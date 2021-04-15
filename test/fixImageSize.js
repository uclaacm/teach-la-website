const sharp = require('sharp');
const fs = require('fs');

//export default 
exports.fixImage = function fixImage(imageFileName){
    sharp(imageFileName)
        .resize({width: 512, height: 512})
        .toFile(imageFileName+ "1").then(()=>{
        fs.rename(imageFileName+ "1",imageFileName, (err) => {
            if (err) throw err;
             console.log('Rename complete!');
            });
 });
}
