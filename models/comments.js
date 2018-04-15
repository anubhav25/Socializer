var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
    postid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    },

    author: {
        type: String,
        required: true
    },

    time: {
        type: Date,
        default: new Date()
    },
    comment: {
        type: String,
        required: true

    }

});
module.exports = mongoose.model('Comments', commentSchema);