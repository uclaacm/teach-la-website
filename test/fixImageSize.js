const sizeOf = require('image-size');
const sharp = require('sharp');
const fs = require('fs');

imageFileName = './img/team/njeong.jpg';
let dimensions = sizeOf(imageFileName);
width = dimensions.width;
height = dimensions.height;
let imageStats = fs.statSync(imageFileName);
let imageFileSizeMB = (imageStats.size) / (1024*1024);
if (width != height){
    throw Error("Not a pixel-perfect square aspect ratio. We can't auto-fix non-square aspect ratio") //Throw an error
}
else{
    if((imageFileSizeMB > 1) || ((width <512 || width > 1024) && (height <512 || height > 1024 ))){
        //We need to resize this image
        sharp(imageFileName)
            .resize({width: 512, height: 512})
            .toFile('./img/team/newimage.jpg').then(()=>{
                fs.rename('./img/team/newimage.jpg',imageFileName, (err) => {
                    if (err) throw err;
                    console.log('Rename complete!');
                     });
            }); 

        console.log("Changes have been made")
    }
    else{
        console.log("Image looks great")
    }
}





// sharp(imageFileName)
//     .resize({width: 512, height: 512})
//     .toFile('./img/team/newimage.jpg').then(()=>{
//         fs.rename('./img/team/newimage.jpg',imageFileName, (err) => {
//             if (err) throw err;
//             console.log('Rename complete!');
//              });
// });