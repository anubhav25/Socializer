var express = require('express');
var User = require('../models/user');
var UserRequest = require('../models/user_request');
var Login = require('../models/login');
var passport = require('passport');

var app = express.Router();

app.get('/userRequests', (req, res) => {
    // read userRequest data and send a json response
    var tempData = [{
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }, {
        description: "qwertyui",
        dob: "1996-05-25",
        email: "abc@abc.abc",
        fullname: "qweert",
        gender: "female",
        phoneNo: "7404541566",
        username: "123456798",
        imglink: '/assets/img/a.jpg'
    }]
    res.json(tempData);
})


module.exports = app;