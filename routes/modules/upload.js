var multer = require('multer')
var path = require('path');




function setOptions(tag, nameOfFile, folder, myreq, myres, fn) {
    var upload = multer({
        storage: multer.diskStorage({
            destination: function(req, file, callback) {
                callback(null, './src/assets/' + folder);
            },
            filename: function(req, file, callback) {
                var name = nameOfFile + path.extname(file.originalname).toLowerCase();
                req.body.imglink = '/assets/profilePictures/' + name;
                callback(null, name)
            }
        }),
        fileFilter: function(req, file, callback) {
            var ext = path.extname(file.originalname)
            ext = ext.toLowerCase();
            console.log(ext)
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                myres.json({ response: 'fail', message: 'image format not sipported' });
                // throw err;
                console.log('err');
                return;
            }
            callback(null, true)
        }
    }).single(tag);

    upload(myreq, myres, fn);

}
module.exports = setOptions