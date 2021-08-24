import pdf2png from 'pdf2png-mp';
import fs from 'fs';

console.log(pdf2png);

pdf2png.convert("cards/flashcards.pdf", { quality: 300 }, function(response) {
    if(!response.success) {
        console.log("Something went wrong: " + response.error);
        return;
    }
 
    console.log("Yayy the pdf got converted, now I'm gonna save it!");
 
    response.data.forEach(function(item, index) {
        index = '' + index
        if(index.length == 1) '00' + index
        if(index.length == 2) '0'  + index
        
        fs.writeFile("cards/flashcards-page-" + index + ".jpg", item, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("The file " + index + " was saved!");
            }
        });
    });
});