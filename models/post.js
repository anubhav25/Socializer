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
    text: String,
    imagepath: String,
    filepath: String,
    filename: String,
    likes: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],

    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"


    }]
});
module.exports = mongoose.model('Posts', postSchema);