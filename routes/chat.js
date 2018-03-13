var app = require('express').Router();
var formidable = require('formidable');
var Users = require('../models/user');
var messages = require('../models/messages');

module.exports = (server) => {
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
                            if (dbdata.hasMsg || dbdata.hasImage || dbdata.hasFile) {
                                io.to(to).emit('sendMessage', dbdata);
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






        app.post('/newchatfile', function(req, res) {
                    var date = Date.now();
                    var form = new formidable.IncomingForm({
                        uploadDir: './src/assets/chatUploads',
                        keepExtensions: true
                    });

                    form.on('end', function() {
                        res.end();
                    });

                    form.parse(req, function(err, fields, files) {
                        console.log(fields);
                        console.log(files);
                        /*             var message = {};
                        message.hasMsg = req.body.hasMsg;
                        message.hasImage = req.body.hasImage;
                        message.hasFile = req.body.hasFile;
                        message.message = req.body.text;
                        message.from = req.body.from;
                        message.to = req.body.to;
                        message.time = req.body.time;
                        
        });

        res.json(message);*/
                    });


                    return app;
                }