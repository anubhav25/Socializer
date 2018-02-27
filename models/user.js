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
    DOB: {
        type: Date,
        required: true
      },
    Gender: {
        type: String,
        required: true
      },
    Description: String,
    imageUrl: {
        type: String,
        required: true
      }
});
module.exports = mongoose.model('User', userSchema);