var express = require('express');
var User = require('../models/user');
var UserRequest = require('../models/user_request');
var Login = require('../models/login');
var passport = require('passport');

var app = express.Router();

app.get('/userRequests', (req, res) => {
    UserRequest.find({})
        .limit(20)
        .exec((err, data) => {
            if (err) {
                res.json([]);
            } else {
                //  console.log(data);
                //    var a = data.concat(data.concat(data.concat(data.concat(data.concat(data.concat(data.concat(data)))))))
                res.json(data);
            }
        });


})

app.post('/acceptUser', (req, res) => {
    UserRequest.findOne({ 'username': req.body.username }, (err, data) => {
        if (err) {
            res.json({ response: 'fail' });
        } else {

            var tmpUser = {
                username: data.username,
                email: data.email,
                phoneNo: data.phoneNo,
                fullname: data.fullname,
                dob: data.dob,
                gender: data.gender,
                imglink: data.imglink
            }
            if (data.description) {
                tmpUser.description = data.description;
            }
            var user = new User(tmpUser);
            user.save((err, user) => {
                if (err) {
                    console.log(err);
                    res.json({ response: 'fail' })
                } else {
                    UserRequest.remove({ username: user.username }, (err) => {
                        if (err) {
                            res.json({ response: 'fail' })
                        } else {
                            res.json({ response: 'success' });
                        }
                    })

                }
            })

        }
    })

})

app.post('/rejectUser', (req, res) => {

    UserRequest.remove({ username: req.body.username }, (err) => {
        if (err) {
            res.json({ response: 'fail' })
        } else {
            res.json({ response: 'success' });
        }
    })
})



module.exports = app;