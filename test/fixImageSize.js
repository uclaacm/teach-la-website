import { fixImage, getAllFiles, imageSizeChecker} from './library.js';


const finalFilesArray =  getAllFiles("./img/team");
for (const file of finalFilesArray){
    const imageStatus = imageSizeChecker(file);
    if (imageStatus.error){
        if(imageStatus.fixable){
            fixImage(file);
        }
    }
}
