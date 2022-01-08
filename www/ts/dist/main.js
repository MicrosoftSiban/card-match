"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdf2png_mp_1 = __importDefault(require("pdf2png-mp"));
const fs_1 = __importDefault(require("fs"));
console.log(pdf2png_mp_1.default);
pdf2png_mp_1.default.convert("cards/flashcards.pdf", { quality: 300 }, function (response) {
    if (!response.success) {
        console.log("Something went wrong: " + response.error);
        return;
    }
    console.log("Yayy the pdf got converted, now I'm gonna save it!");
    response.data.forEach(function (item, index) {
        index = '' + index;
        if (index.length == 1)
            '00' + index;
        if (index.length == 2)
            '0' + index;
        fs_1.default.writeFile("cards/flashcards-page-" + index + ".jpg", item, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("The file " + index + " was saved!");
            }
        });
    });
});
//# sourceMappingURL=main.js.map