import { imageSizeChecker, getAllFiles, fixImage } from './library.js';

let fixedFiles = 0;
const finalFilesArray =  getAllFiles("./img/team");
for (const file of finalFilesArray){
    const imageStatus = imageSizeChecker(file);
    if (imageStatus.error && imageStatus.fixable){
        try{
            fixImage(file);
            fixedFiles++;
        }
        catch{
            console.log("Could not fix " + file + ". You should fix it manually. Type npm run test:team-image and see what needs to be fixed.")
        }
    }
}
console.log("------------------------------------------------------------------------------------------------------");
console.log(fixedFiles + " Files have been fixed");
