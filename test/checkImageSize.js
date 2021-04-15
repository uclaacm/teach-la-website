var fixImage = require("./fixImageSize.js");
const sizeOf = require('image-size');
const fs = require('fs');
const { exit } = require("process");

//Can we run this in parallel -- asynchronous
//Are the libraries that do this already

//bytesize pieces

function getFileSizeMB(fileStats){
    return (fileStats.size) / (1024*1024);
}

//Check if image is larger than 1MB
function isFileSizeBig(fileStats){ 
    return getFileSizeMB(fileStats) > 1;
}

function getImageWidth(imageSize){
    return imageSize.width;
}

function getImageHeight(imageSize){
    return imageSize.height;
}

//Check if the width of image is larger than 1024px or lower than 512px
function isImageWidthUnreasonable(imageSize){
    let width = imageSize.width;
    return (width <512 || width > 1024)
}

function imageSizeChecker(input){  //input here is the image file
    //let inputName = "./img/" + input;
    let imageSize = sizeOf(input);
    let width = imageSize.width;
    let height = imageSize.height;
    let imageStats = fs.statSync(input);
    if (width != height){
        throw Error("Not a pixel-perfect square aspect ratio")
    }
    else{
        if(isFileSizeBig(imageStats)){
            throw Error("Your file is " + getFileSizeMB(imageStats).toFixed(2) + "MB")
        } 
        else if(isImageWidthUnreasonable(imageSize)){
            throw Error("Your image size is " + getImageWidth(imageSize) +"px by " +getImageHeight(imageSize)+"px");
        }
        // else{
        //     console.log("Image looks great\n")
        // }
    }
};

//Loop through every file in "./img"
//If the file has a "." included, it means that it contains .jpg, .png, etc
//Those files are appended to a new array of all the file names
//If not, it is a directory inside a directory and the files inside there need to be extracted
//Again files with a "." are appended to the new array, while the other files are directories where its files need to be extracted
//This loop continues until there is no other directory within a directory
function getAllFiles(files, newFileArray, directoryName){ 
    for (file of files){
        if (file.includes(".")){
            newFileArray.push(directoryName + "/" + file)
        }
        else{
            newFile = fs.readdirSync(directoryName + "/" + file)
            let newDirectoryName = directoryName + "/" + file
            getAllFiles(newFile, newFileArray, newDirectoryName)
        }
    }
}

const directoryName =  "./img/team" //This is the name of the image directory
// let files = fs.readdirSync(directoryName); //Create an array of files inside "./img"
// files.shift() //Removes the .DS_store file from the array
let finalFilesArray = []
let teamFiles = fs.readdirSync("./img/team")
getAllFiles(teamFiles, finalFilesArray, directoryName)

for (file of finalFilesArray){ //Check the image size of all image files
    try {
        imageSizeChecker(file);
        let imageSize = sizeOf(file);
        let width = imageSize.width;
        let height = imageSize.height;
        if (width == height){
            fixImage.fixImage(file);
        }
      }
    catch(err) { //If there is an error, tell me what file has the error and what that error is
        //console.error("File with error: " + file + " ----- Error message: " + err.message+ "\n");
        process.exit(1)
      } 
}

