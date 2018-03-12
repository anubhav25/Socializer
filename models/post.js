var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    time: {
        type: Date,
        default: new Date()
    },
    post: {
        type: String

    },
    Imagepath: {
        type: String

    },
    filepath: {
        type: String,

    },

    likes = [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],

    comment = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"


    }]
});
module.exports = mongoose.model('Posts', postSchema);