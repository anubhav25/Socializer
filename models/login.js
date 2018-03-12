var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');


var loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    type: String,
    password: String
});
loginSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Login', loginSchema);