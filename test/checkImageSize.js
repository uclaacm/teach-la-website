const sizeOf = require('image-size');
const sharp = require('sharp');
const fs = require('fs');
// Change the code so that the width and height are equal
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
let dimensions = sizeOf('./img/team/njeong.jpg');
width = dimensions.width;
height = dimensions.height;
if (width != height){
    console.log("Not a pixel-perfect square aspect ratio")
}
else{
    console.log("Good aspect ratio")
}

if((width <512 || width > 1024) && (height <512 || height > 1024 )){
    console.log("Image is too small or too big")
}
else{
    console.log("Image size is good")
}

let imageStats = fs.statSync('./img/team/njeong.jpg');
let imageFileSizeMB = (imageStats.size) / (1024*1024);

console.log("File is " + imageFileSizeMB + " megabytes");

/*
if((width!=height) || ((width <512 || width > 1024) && (height <512 || height > 1024 ))){
    //sharp('./img/team/njeong.jpg')
    console.log("We need to fix this image")
}

else{
    console.log("Image looks great")
}
*/
