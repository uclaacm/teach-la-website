import { readdirSync, statSync, rename } from 'fs';
import sizeOf from 'image-size';
import sharp from "sharp";

function getFileSizeMB(fileStats){
    return (fileStats.size) / (1024*1024);
}

function getFileSizeKB(fileStats){
    return (fileStats.size) / 1024;
}

//Check if image is larger than 1MB
function isFileSizeBig(fileStats){ 
    return getFileSizeMB(fileStats) > 1;
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
    return (imageFileName.includes(".jpg") | imageFileName.includes(".png") | imageFileName.includes(".jpeg"));
}

const errorType =  {
    ASPECT_RATIO_ERROR: {
        error: true,
        message: "Not a square aspect ratio",
        fixable: false
    },
    SMALL_IMAGE_ERROR: {
        error: true,
        message: "Your image is too small and should be 512px by 512px",
        fixable: false
    },
    LARGE_IMAGE_ERROR: {
        error: true,
        message: "Your image is too large and should be 512px by 512px",
        fixable: true
    },
    EXTENSION_ERROR: {
        error: true,
        message: "Image File Name does not have lower case extension",
        fixable: true
    },
    FILE_SIZE_ERROR: {
        error: true,
        message: "Your file should be below 1MB",
        fixable: true
    },
    NO_ERROR: {
        error: false,
        message: "No Error"
    }
}

function imageSizeChecker(input){  //input here is the image file
    //let inputName = "./img/" + input;
    let imageSize = sizeOf(input);
    let width = imageSize.width;
    let height = imageSize.height;
    let imageStats = statSync(input);
    if (width != height){
        return errorType.ASPECT_RATIO_ERROR;
    }
    else if (isImageWidthSmall(imageSize)){
        return errorType.SMALL_IMAGE_ERROR;
    }
    else if (isFileSizeBig(imageStats)){
        return errorType.FILE_SIZE_ERROR;
    } 
    else if(isImageWidthLarge(imageSize)){
        return errorType.LARGE_IMAGE_ERROR;
    }
    else if (!isAValidExtension(input)){
        return errorType.EXTENSION_ERROR;
    }
    else {
        return errorType.NO_ERROR;
    }
};

function getAllFiles(directoryName){ 
    let teamFiles = readdirSync(directoryName);
    const finalFilesArray = [];
    for (const file of teamFiles){
        if (isAValidExtension(file.toLowerCase())){
            finalFilesArray.push(directoryName + "/" + file);
        }
        else{
           continue;
        }
    }
    return finalFilesArray;
}

function fixImage(imageFileName){
    sharp(imageFileName)
        .resize({width: 512, height: 512})
        .toFile(imageFileName+ "1").then(()=>{
        rename(imageFileName+ "1",imageFileName, (err) => {
            if (err) throw err;
            let imageSize = sizeOf(imageFileName);
            let width = imageSize.width;
            let height = imageSize.height;
            let imageStats = statSync(imageFileName);
            console.log(imageFileName + " has been fixed\n" 
            + imageFileName + " has size " + getFileSizeKB(imageStats).toFixed(2)+"MB\n" 
            + imageFileName + " has dimensions "+width +"px by " +height+"px'\n");
        });
    });
}

export { imageSizeChecker, getAllFiles, fixImage };