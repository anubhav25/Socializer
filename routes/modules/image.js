var jimp = require("jimp");
var fs = require('fs');

function rotateImage(source, rotation = 0,fn) {
    rotation = (+rotation + 360) % 360;
    jimp.read(source, function(err, image) {
        if (err) throw err;
        var rotatedImg = image.rotate(rotation);
        rotatedImg.write(source, function(err) {
            if (err) throw err;
            compress(source,fn);
        })
    });
}
function compress(source,fn) {
	 var size = (fs.statSync(source).size)/(1024*1024);
	 if(size > 2){
	 	jimp.read(source, function(err, image) {
        if (err) throw err;
         	var compressedImg = image.quality(60);
         	compressedImg.write(source, function(err) {
            if (err) {throw err;}
            else {
            	compress(source,fn);
            }
        })
    });
	 }
	 else {
	 	if(fn){
	 		fn();
	 	}
	 }
}
module.exports.rotate = rotateImage;
module.exports.compress = compress;