const sizeOf = require('image-size');
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

/*
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
        throw Error("Image is too big")
    }
    else{
        console.log("Image looks great")
    }
}
*/

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
        else{
            console.log("Image looks great")
        }
    }
};

//imageSizeChecker("./img/team/zxue.jpg")
//imageSizeChecker("./img/team/dolson.jpg")


/*
fs.readdir("img/team", (err, files)=>{
    if (err){
        console.error(err.message);
    }
    else{
        for (file of files){
            imageSizeChecker("./img/team/" + file)
    }
}
});
*/

directoryName =  "./img"
files = fs.readdirSync(directoryName); //Create an array of files inside "./img"
files.shift() //Removes the .DS_store file from the array
finalFilesArray = []

function getAllFiles(files, newFileArray, directoryName){
    for (file of files){
        if (file.includes(".")){
            newFileArray.push(directoryName + "/" + file)
        }
        else{
            newFile = fs.readdirSync(directoryName + "/" + file)
            newDirectoryName = directoryName + "/" + file
            getAllFiles(newFile, newFileArray, newDirectoryName)
        }
    }
}
getAllFiles(files, finalFilesArray, directoryName)

//Simplify this code  --> make it into a function
// for (file of files){
//     if (file.includes(".")){
//     finalFilesArray.push("./img/" + file)
//     }
//     else{
//         files2 = fs.readdirSync("./img/" + file)
//         for (file2 of files2){
//             if (file2.includes(".")){
//                 finalFilesArray.push("./img/" + file + "/" + file2)
//             }
//             else{
//                files3 = fs.readdirSync("./img/" + file + "/" + file2);
//                for (file3 of files3){
//                 finalFilesArray.push("./img/" + file + "/" + file2 + "/" + file3);
//                }
//             }
//         }
//     }
// }
for (file of finalFilesArray){
     imageSizeChecker(file);
}

//create some logic that runs through the array that is given by files, this logic would look for a . b/c if there's a . then it's an image
//after you run through your logic you would create an array and append all of the strings that don't have a . b/c those are your directories
//fs.readdirSync this should give you whatevers in the dir that you're running it on
//put all of the images inside of another array and run it with the for loop