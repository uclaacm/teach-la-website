import "process";
import {imageSizeChecker} from './library.js';
import {getAllFiles} from './library.js';

const finalFilesArray =  getAllFiles("./img/team");
let incorrectFiles = 0;
let fixableFiles = 0;
for (const file of finalFilesArray){ //Check the image size of all image files
    const imageStatus = imageSizeChecker(file);
    if (imageStatus.error){
        console.error("Error: " + file + " -- " + imageStatus.message);
        incorrectFiles++;
        if (imageStatus.fixable){
            fixableFiles++;
            console.log("Image is fixable. To fix the image, type the following line: npm test:fix-team-image")
        }
    console.log("\n")
    }
}

if (incorrectFiles != 0){
    console.log(incorrectFiles + " files have errors");
    console.log(fixableFiles +" files are fixable")
    process.exit(1);
}

