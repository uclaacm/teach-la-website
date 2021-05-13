const sharp = require('sharp');
const sizeOf = require('image-size');
const fs = require('fs');
//const imageSizeChecker = require("./checkImageSize");
const checkImageSize = require("./checkImageSize");

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
console.log("checkImageSize" + checkImageSize);
const finalFilesArray =  checkImageSize.getAllFiles("./img/team");
for (const file of finalFilesArray){
    console.log(file);
}
    /*
    const imageStatus = imageSizeChecker(file);
    if (imageStatus.error){
        if (imageStatus.fixable){
           fixImage(file);
        }
    }
} 
*/
