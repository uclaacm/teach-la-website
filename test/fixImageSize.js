const sharp = require('sharp');
const sizeOf = require('image-size');
const fs = require('fs');
 
function getFileSizeMB(fileStats){
    return (fileStats.size) / (1024*1024);
}

function fixImage(imageFileName){
    sharp(imageFileName)
        .resize({width: 512, height: 512})
        .toFile(imageFileName+ "1").then(()=>{
        fs.rename(imageFileName+ "1",imageFileName, (err) => {
            if (err) throw err;
             let imageSize = sizeOf(input);
             let width = imageSize.width;
             let height = imageSize.height;
             let imageStats = fs.statSync(input);
             console.log(imageFileName + "has size " + getFileSizeMB(imageStats).toFixed(2)+"MB");
             console.log(imageFileName + "has dimensions "+width +"px by " +height+"px");
            });
 });
}
