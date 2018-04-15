var express = require('express');
var User = require('../models/user');
var posts = require('../models/post');
var comment = require('../models/comments');
var formidable = require('formidable');


var app = express.Router();
app.get('/dist/assets/postUploads/:file', (req, res) => {
    res.download("./dist/assets/postUploads/" + req.params.file);
})
app.get('/dist/assets/postUploads/:file/:filename', (req, res) => {
    res.download("./dist/assets/postUploads/" + req.params.file, req.params.filename);
})

app.post('/newpost', (req, res) => {
    var date = Date.now();
    var form = new formidable.IncomingForm({
        uploadDir: './dist/assets/postUploads',
        keepExtensions: true,
        maxFileSize: 200 * 1024 * 1024
    });
    form.on('end', () => {
        console.log('ho');
    })
    form.parse(req, function(err, fields, files) {
        console.log(err)
        console.log(fields);
        console.log(files)


        var post = fields;
        if (files.file) {
            if (files.file.name.endsWith('.jpg') || files.file.name.endsWith('.jpeg') ||
                files.file.name.endsWith('.png')) {
                post.imagepath = '\\post\\' + files.file.path;

            } else {
                post.filepath = '\\post\\' + files.file.path;
            }
            post.filename = files.file.name;
        }
        post.time = Date.now();
        (new posts(post)).save((err) => {
            if (err) {
                res.json({ resp: false, error: 'server error' });
            } else {
                res.json({ resp: true });
            }
        });


    });


})

app.post('/delete', (req, res) => {
    posts.deleteOne({ _id: req.body.postid, author: req.body.author }, (err, post) => {
        if (err) {
            res.json({
                resp: false
            });
        } else {

            res.json({
                resp: true
            });
        }

    })
})
app.post('/like', (req, res) => {
    posts.findById(req.body.postid, (err, post) => {
        if (err) {
            res.json({ resp: false });
        } else {
            post.likes.push(req.body.myid);
            post.save((err) => {
                if (err) {
                    res.json({ resp: false });
                } else {
                    res.json({ resp: true });
                }
            });
        }
    })
})
app.post('/unlike', (req, res) => {
    posts.findById(req.body.postid, (err, post) => {
        if (err) {
            res.json({ resp: false });
        } else {
            for (var i = 0; i < post.likes.length; i++) {
                if (post.likes[i].toString() === req.body.myid) {
                    post.likes.splice(i, 1);
                    break;
                }
            }
            post.save((err) => {
                if (err) {
                    res.json({ resp: false });
                } else {
                    res.json({ resp: true });
                }
            });
        }
    })
})
app.post('/comment', (req, res) => {
    posts.findById(req.body.postid, (err, post) => {
        if (err) {
            res.json({ resp: false });
        } else {
            (new comment({
                postid: req.body.postid,
                author: req.body.name,
                comment: req.body.comment
            })).save((err, c) => {
                if (err) {
                    res.json({ resp: false });
                } else {
                    post.comment.push(c._id);
                    post.save((err) => {
                        if (err) {
                            res.json({ resp: false });
                        } else {
                            res.json({ resp: true });
                        }
                    });
                }

            });
        }
    })
});
app.get("/posts/:count?", function(req, resp) {

    var count = req.params.count;
    try {
        count = parseInt(count);
    } catch (e) {
        count = 0;
    }

    posts.find({}).sort([
        ['time', -1]
    ]).skip(count).limit(20).populate("comment").exec(function(err, data) {
        if (err) {
            resp.json({ response: false })

        } else {
            resp.json({ response: true, posts: data });

        }

    });

});
module.exports = app;