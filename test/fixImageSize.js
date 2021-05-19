import {imageSizeChecker} from './library.js';
import {getAllFiles} from './library.js';
import {fixImage} from './library.js';


const finalFilesArray =  getAllFiles("./img/team");
for (const file of finalFilesArray){
    const imageStatus = imageSizeChecker(file);
    if (imageStatus.error){
        if(imageStatus.fixable){
            fixImage(file);
        }
    }
}
