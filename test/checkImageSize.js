const sizeOf = require('image-size');
const fs = require('fs');
const { exit } = require("process");

function getFileSizeMB(fileStats){
    return (fileStats.size) / (1024*1024);
}

//Check if image is larger than 1MB
function isFileSizeBig(fileStats){ 
    return getFileSizeMB(fileStats) > 1;
}
//Check if the width of image is larger than 1024px or lower than 512px
function isImageWidthUnreasonable(imageSize){
    let width = imageSize.width;
    return (width > 1024 | width < 512);
}

function isImageWidthLarge(imageSize){
    let width = imageSize.width;
    return (width >1024);
}

function isImageWidthSmall(imageSize){
    let width = imageSize.width;
    return (width <512);
}

function isAValidExtension(imageFileName){
    return (imageFileName.includes(".jpg") | imageFileName.includes(".png") | imageFileName.includes(".jpeg"))
}

function imageSizeChecker(input){  //input here is the image file
    //let inputName = "./img/" + input;
    let imageSize = sizeOf(input);
    let width = imageSize.width;
    let height = imageSize.height;
    let imageStats = fs.statSync(input);
    if (width != height){
        throw Error("Not a pixel-perfect square aspect ratio");
    }
    else if (!isAValidExtension(input)){
        throw Error("Image File Name does not have lower case extension");
    }
    else if (isFileSizeBig(imageStats)){
            throw Error("Your file is " + getFileSizeMB(imageStats).toFixed(2) + "MB. Your file should be below 1MB.");
        } 
    else if (isImageWidthUnreasonable(imageSize)){
        if(isImageWidthSmall(imageSize)){
            throw Error("Your image size is " + width +"px by " +height+"px. Your image is too small and should be 512px by 512px.");
        }
        else if(isImageWidthLarge(imageSize)){
            throw Error("Your image size is " + width +"px by " +height+"px. Your image is too large and should be 512px by 512px.");
            }
        }
};

function getAllFiles(files, newFileArray, directoryName){ 
    for (file of files){
        if (file.includes(".jpg") | file.includes(".png") | file.includes(".jpeg") | file.includes(".JPG") | file.includes(".PNG") | file.includes(".JPEG")){
            newFileArray.push(directoryName + "/" + file);
        }
        else{
           continue;
        }
    }
}

const directoryName =  "./img/team"; //This is the name of the image directory
let finalFilesArray = [];
let teamFiles = fs.readdirSync("./img/team");
getAllFiles(teamFiles, finalFilesArray, directoryName);

let incorrectFiles = 0;
for (file of finalFilesArray){ //Check the image size of all image files
    try {
        imageSizeChecker(file);
      }
    catch(err) { //If there is an error, tell me what file has the error and what that error is
        console.error("Error: " + file + " -- " + err.message+ "\n");
        incorrectFiles++;
      } 
}
if (incorrectFiles != 0){
    process.exit(1)
}
