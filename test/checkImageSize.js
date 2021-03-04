const sizeOf = require('image-size');
const sharp = require('sharp');
const fs = require('fs');
// Change the code so that the width and height are equal - if not throw error
// Check width and height separately >=512   <=1024
// Then add and commit code

//Actual size of file  <= 1MB  --use fs
//Add commit code

//Refactor: if either the width or the height are > 1024 or size of file > 1MB --> Resize to 512 by 512
//Import sharp
//Add and commit

//First: can you read all the images in folder and print them out
//Can you apply the function to each image
//Add and commit

//Can we run this in parallel -- asynchronous
//Are the libraries that do this already

//bytesize pieces
//Try to not copy code --> read through the code

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
            .toFile('./img/team/newimage.jpg'); 
        /*
        fs.rename('./img/team/newimage.jpg', imageFileName, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
            });
        */

        /*
        fs.unlink(imageFileName, (err) => {
            if (err) throw err;
            console.log('File was deleted')});
        */
        console.log("Changes have been made")
    }
    else{
        console.log("Image looks great")
    }
}
fs.rename('./img/team/newimage.jpg', imageFileName, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
    });

/*
Function:
function imageSizeChecker(input){  //input here is the image file

    let dimensions = sizeOf(input);
    width = dimensions.width;
    height = dimensions.height;
    let imageStats = fs.statSync(input);
    let imageFileSizeMB = (imageStats.size) / (1024*1024);
    if (width != height){
        console.log("Not a pixel-perfect square aspect ratio") //Throw an error
    }
    else{
        if((imageFileSizeMB > 1) || ((width <512 || width > 1024) && (height <512 || height > 1024 ))){
            //sharp(input)  - Use sharp
            console.log("We need to fix this image")
        }
        else{
            console.log("Image looks great")
        }
    }
};
*/

