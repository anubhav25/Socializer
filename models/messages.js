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
    hasImage: Boolean,
    hasFile: Boolean,
    imgLink: String,
    fileLink: String,
    time: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('messages', messageSchema);