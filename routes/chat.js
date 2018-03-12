var app = require('express').Router();


var Users = require('../models/user');
var messages = require('../models/messages');

module.exports = (server, siofu) => {
    var io = require('socket.io').listen(server);
    var usersCollection = {};
    var idCollection = {};


    app.get("/users", (req, res) => {
        Users.find({}, (err, users) => {
            if (err) {
                console.log(err);
            } else
                res.json(users);
        })
    })
    app.post('/messages', (req, res) => {
        var count = 0;
        try {
            count = parseInt(req.body.count)
        } catch (e) {
            count = 0
        }
        messages.find({})
            .or([{ from: req.body.me, to: req.body.other }, { from: req.body.other, to: req.body.me }])
            .sort('time')
            .limit(50)
            .skip(count)
            .exec((err, msgs) => {
                if (err) {
                    res.send({ 'response': 'fail' });
                } else {
                    res.send(msgs);
                }
            })
    });
    //sockets handling
    io.on('connection', function(socket) {
        console.log('A new')
        console.log(usersCollection)
        socket.on('online', function(username) {

            usersCollection[username] = socket.id;
            idCollection[socket.id] = username;
            console.log(usersCollection)
            io.emit("onlinelistchanged", usersCollection);
            console.log(username + " has joined the chat room.");

            socket.on('disconnect', function() {
                console.log('User disconnected!');
                let a = idCollection[socket.id];
                delete idCollection[socket.id];
                delete usersCollection[a];
                delete a;
                socket.broadcast.emit("onlinelistchanged", usersCollection);
            });
        });



        socket.on('sendMessage', function(data, callback) {
            let msg = new messages(data);
            msg.save((err, dbdata) => {

                if (err) {
                    callback({ success: false });
                } else {
                    console.log(dbdata);
                    let to = usersCollection[dbdata.to];
                    if (to) {
                        if (dbdata.hasMsg) {
                            io.to(to).emit('sendMessage', dbdata);
                            callback({ success: true });
                        } else if (dbdata.hasImage) {
                            socket.emit('sendMessage', dbdata);
                            callback({ success: true });
                        } else if (dbdata.hasFile) {
                            socket.emit('sendMessage', dbdata);
                            callback({ success: true });
                        } else {
                            callback({ success: false });
                        }
                    } else {
                        //change in user table
                        Users.findOne({ username: dbdata.to }, (err, user) => {
                            if (err) {
                                callback({ success: false });
                            } else {
                                for (let i = 0; i < user.unreadMessages.length; i++) {
                                    if (user.unreadMessages[i].from === dbdata.from) {
                                        user.unreadMessages[i].number++;
                                    }
                                    break;
                                }
                                if (i === user.unreadMessages.length) {
                                    user.unreadMessages.push({
                                        from: dbdata.from,
                                        number: 1
                                    });
                                }
                                user.save();
                            }
                        });
                    }
                }
            });
        });
    });





    // route for uploading images asynchronously
    app.post('/newchatimage', function(req, res) {
        var imgdatetimenow = Date.now();
        var form = new formidable.IncomingForm({
            uploadDir: '..//src/assets/chatUploads',
            keepExtensions: true
        });

        form.on('end', function() {
            res.end();
        });

        form.parse(req, function(err, fields, files) {
            var data = {
                username: fields.username,
                userAvatar: fields.userAvatar,
                repeatMsg: true,
                hasFile: fields.hasFile,
                isImageFile: fields.isImageFile,
                istype: fields.istype,
                showme: fields.showme,
                dwimgsrc: fields.dwimgsrc,
                dwid: fields.dwid,
                serverfilename: baseName(files.file.path),
                msgTime: fields.msgTime,
                filename: files.file.name,
                size: bytesToSize(files.file.size)
            };
            var image_file = {
                dwid: fields.dwid,
                filename: files.file.name,
                filetype: fields.istype,
                serverfilename: baseName(files.file.path),
                serverfilepath: files.file.path,
                expirytime: imgdatetimenow + (3600000 * expiryTime)
            };
            files_array.push(image_file);
            io.sockets.emit('new message image', data);
        });
    });
    /* 
        // route for uploading audio asynchronously
        app.post('/v1/uploadFile', function(req, res) {
            var userName, useravatar, hasfile, ismusicfile, isType, showMe, DWimgsrc, DWid, msgtime;
            var imgdatetimenow = Date.now();
            var form = new formidable.IncomingForm({
                uploadDir: __dirname + '/public/app/upload/music',
                keepExtensions: true
            });


            form.on('end', function() {
                res.end();
            });
            form.parse(req, function(err, fields, files) {
                console.log("files : ", files);
                console.log("fields : ", fields);
                var data = {
                    username: fields.username,
                    userAvatar: fields.userAvatar,
                    repeatMsg: true,
                    hasFile: fields.hasFile,
                    isMusicFile: fields.isMusicFile,
                    istype: fields.istype,
                    showme: fields.showme,
                    dwimgsrc: fields.dwimgsrc,
                    dwid: fields.dwid,
                    serverfilename: baseName(files.file.path),
                    msgTime: fields.msgTime,
                    filename: files.file.name,
                    size: bytesToSize(files.file.size)
                };
                var audio_file = {
                    dwid: fields.dwid,
                    filename: files.file.name,
                    filetype: fields.istype,
                    serverfilename: baseName(files.file.path),
                    serverfilepath: files.file.path,
                    expirytime: imgdatetimenow + (3600000 * expiryTime)
                };
                files_array.push(audio_file);
                io.sockets.emit('new message music', data);
            });
        });

        // route for uploading document asynchronously
        app.post('/v1/uploadPDF', function(req, res) {
            var imgdatetimenow = Date.now();
            var form = new formidable.IncomingForm({
                uploadDir: __dirname + '/public/app/upload/doc',
                keepExtensions: true
            });

            form.on('end', function() {
                res.end();
            });
            form.parse(req, function(err, fields, files) {
                var data = {
                    username: fields.username,
                    userAvatar: fields.userAvatar,
                    repeatMsg: true,
                    hasFile: fields.hasFile,
                    isPDFFile: fields.isPDFFile,
                    istype: fields.istype,
                    showme: fields.showme,
                    dwimgsrc: fields.dwimgsrc,
                    dwid: fields.dwid,
                    serverfilename: baseName(files.file.path),
                    msgTime: fields.msgTime,
                    filename: files.file.name,
                    size: bytesToSize(files.file.size)
                };
                var pdf_file = {
                    dwid: fields.dwid,
                    filename: files.file.name,
                    filetype: fields.istype,
                    serverfilename: baseName(files.file.path),
                    serverfilepath: files.file.path,
                    expirytime: imgdatetimenow + (3600000 * expiryTime)
                };
                files_array.push(pdf_file);
                io.sockets.emit('new message PDF', data);
            });
        });

        // route for checking requested file , does exist on server or not
        app.post('/v1/getfile', function(req, res) {
            var data = req.body.dwid;
            var filenm = req.body.filename;
            var dwidexist = false;
            var req_file_data;

            for (var i = 0; i < files_array.length; i++) {
                if (files_array[i].dwid == data) {
                    dwidexist = true;
                    req_file_data = files_array[i];
                }
            }

            // CASE 1 : File Exists
            if (dwidexist == true) {
                //CASE 2 : File Expired and Deleted
                if (req_file_data.expirytime < Date.now()) {
                    var deletedfileinfo = {
                        isExpired: true,
                        expmsg: "File has beed removed."
                    };
                    fs.unlink(req_file_data.serverfilepath, function(err) {
                        if (err) {
                            return console.error(err);
                        }
                        res.send(deletedfileinfo);
                    });
                    var index = files_array.indexOf(req_file_data);
                    files_array.splice(index, 1);
                } else {
                    // CASE 3 : File Exist and returned serverfilename in response
                    var fileinfo = {
                        isExpired: false,
                        filename: req_file_data.filename,
                        serverfilename: req_file_data.serverfilename
                    };
                    res.send(fileinfo);
                }
            } else {
                // CASE 4 : File Doesn't Exists.       
                var deletedfileinfo = {
                    isExpired: true,
                    expmsg: "File has beed removed."
                };
                res.send(deletedfileinfo);
            }
        });

        // Routine Clean up call
        setInterval(function() { routine_cleanup(); }, (3600000 * routineTime));
     */
    // Size Conversion
    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return 'n/a';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if (i == 0) return bytes + ' ' + sizes[i];
        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    };
    //get file name from server file path
    function baseName(str) {
        var base = new String(str).substring(str.lastIndexOf('/') + 1);
        return base;
    }

    // Routine cleanup function (files delete after specific interval)
    function routine_cleanup() {
        for (var i = 0; i < files_array.length; i++) {
            if (Date.now() > files_array[i].expirytime) {
                fs.unlink(files_array[i].serverfilepath, function(err) {
                    if (err) {
                        return console.error(err);
                    }
                });
                files_array.splice(i, 1);
            }
        }
    };

    /*     io.on('connection', function(socket) {
            console.log('A user has connected to the server.');

            socket.on('online', function(username) {
                usersCollection[username] = socket.id;
                idCollection[socket.id] = username;
                io.emit("onlinelistchanged", usersCollection);
                console.log(username + " has joined the chat room.");

                socket.on('disconnect', function() {
                    console.log('User disconnected!');
                    let a = idCollection[socket.id];
                    delete idCollection[socket.id];
                    delete usersCollection[a];
                    delete a;
                    socket.broadcast.emit("onlinelistchanged", usersCollection);
                });
            });
            /* 
                    socket.on("sendMessage", function(message) {
                        console.log("Message received:");
                        console.log(message);

                        io.to(message.toId).emit("messageReceived", {
                            user: usersCollection.find(x => x.id == message.fromId),
                            message: message
                        });

                        console.log("Message dispatched.");
                    }); */
    /*  }); */
    return app;
}