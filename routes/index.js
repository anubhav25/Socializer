var express = require('express');
var User = require('../models/user');
var UserRequest = require('../models/user_request');
var Login = require('../models/login');
var passport = require('passport');

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
app.post('/phoneNoVaild', (req, res) => {
    //check of if the phoneno is already available
    //if already exists send false
    //else send true
    if (req.body.phoneNo == '7404541565')
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

    //validate user object
    //if correct then store else
    //send fail response
    let user = new UserRequest({
        username: req.body.username,
        email: req.body.email,
        phoneNo: req.body.phoneNo
    });
    user.save((err, user) => {
        if (err) {
            console.log(err);
            res.json({ response: 'fail' })
        } else {
            res.json({ response: 'success' });
        }
    })
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