var express = require('express');
var User = require('../models/user');
var UserRequest = require('../models/user_request');
var Login = require('../models/login');
var passport = require('passport');
var image = require('./modules/image')
var upload = require('./modules/upload')

var app = express.Router();

function isLoggedin(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

app.get('/isLoggedIn', (req, res) => {
    console.log('here');
    if (req.isAuthenticated()) {
        res.json({ message: true, user: req.user });
    } else {
        res.json({ msg: false })
    }
});


app.post('/usernameVaild', (req, res) => {
    //check of if the username is already available
    //if already exists send false
    //else send true
    if (req.body.username == 'anubhav')
        res.json({ response: false });
    else
        res.json({ response: true });
});
app.post('/emailVaild', (req, res) => {
    //check of if the email is already available
    //if already exists send false
    //else send true
    if (req.body.email == 'anubhav@ab.ab')
        res.json({ response: false });
    else
        res.json({ response: true });
});


/* app.post('/register', (req, res) => {
    UserRequest.register(new UserRequest({ username: req.body.username, email }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/admin');
            })
        }
    })
}) */


app.post('/register', (req, res) => {
    var nameOfFile = 'anubhav-' + Date.now();
    upload('file', nameOfFile, 'profilePictures', req, res, function(err) {
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
                req.body.imglink = '/assets/profilePictures/default.png'
            }
            let user = new UserRequest(req.body);
            user.save((err, user) => {
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

app.get('/search/:query', (req, res) => {
    var myquery = req.params.query;
    var regex = new RegExp(myquery, 'i');
    regex = '/.*' + myquery + '.*/i/';
    console.log(regex)
    var query = User.find({ username: regex }, { 'username': 1 }).limit(20);
    query.exec(function(err, users) {
        if (!err) {
            var query = UserRequest.find({ username: regex }, { 'username': 1 }).limit(20);
            query.exec(function(err, users2) {
                if (!err) {
                    res.json(users.concat(users2));
                } else {
                    res.json(err);
                }
            });


        } else {
            res.json(err);
        }
    });
})


app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.json({ response: 'fail', message: info.message }) }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.json({ response: 'success', path: '/home', user: { username: user.username, _id: user._id } });
        });
    })(req, res, next);
});



app.get('/logout', (req, res) => {
    req.logout();
})


module.exports = app;