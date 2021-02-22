const sizeOf = require('image-size');

var dimensions = sizeOf('./img/team/njeong.jpg');
if (dimensions.width != 512 && dimensions.height != 512){
   console.log("Something is wrong")
   console.log(dimensions.width + " " + dimensions.height) 
}

else{
    console.log("Image is fine")

}

