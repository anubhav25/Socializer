var mongoose = require('mongoose');
var userRequestSchema = new mongoose.Schema({
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
    }
});
module.exports = mongoose.model('UserRequests', userRequestSchema);