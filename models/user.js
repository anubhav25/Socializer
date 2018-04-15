var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    description: String,
    imglink: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    unreadMessages: [{
        from: String,
        number: {
            type: Number,
            default: 0
        }
    }],
    admin: {
        type: Boolean,
        default: false
    }

});
module.exports = mongoose.model('Users', userSchema);