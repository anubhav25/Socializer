var express = require('express');
var User = require('../models/user');
var post = require('../models/post');
var comment = require('../models/comment');
var upload = require('./modules/upload')
var image = require('./modules/image')

var app = express.Router();

app.post('/newpost', (req, res) => {
    var nameOfFile = 'post-' + Date.now();
    upload('file', nameOfFile, 'postData', req, res, function(err) {
        if (err) {
            res.json({ response: 'fail' });
            console.log(err);
        } else {
            if (req.file) {
                if (parseInt(req.body.rotation) > 0) {
                    image.rotate(req.file.path, req.body.rotation);
                } else {
                    image.compress(req.file.path);
                }
                delete req.body.rotation;
            } else {
                //                req.body.imglink = '/assets/profilePictures/default.png'
            }
            let newPost = new post(req.body);
            newPost.save((err, user) => {
                if (err) {
                    console.log(err);
                    res.json({ response: 'fail' })
                } else {
                    res.json({ response: 'success' });
                }
            })
        }

    })
})

app.get("/posts/:count?", function(req, resp) {

    var count = req.params.count;
    try {
        count = parseInt(count);
    } catch (e) {
        count = 0;
    }

    post.find({}).sort("time").skip(count).limit(20).populate("comment").populate("likes").exec(function(err, data) {
        if (err) {
            resp.json({ response: 'fail' })

        } else {
            resp.json({ response: 'success', posts: data });

        }

    });

})