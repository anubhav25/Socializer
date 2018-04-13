var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    message: String,
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    hasMsg: Boolean,
    hasFile: {
        type: Boolean,
        default: false
    },
    hasImg: {
        type: Boolean,
        default: true
    },
    link: {
        type: String,
        default: ''
    },
    filename: {
        type: String,
        default: ''
    },
    time: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('messages', messageSchema);