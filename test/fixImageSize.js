const sharp = require('sharp');
const fs = require('fs');

//export default 
function fixImage(imageFileName){
    sharp(imageFileName)
        .resize({width: 512, height: 512})
        .toFile('./img/team/newimage.jpg').then(()=>{
        fs.rename('./img/team/newimage.jpg',imageFileName, (err) => {
            if (err) throw err;
             console.log('Rename complete!');
            });
 });
}