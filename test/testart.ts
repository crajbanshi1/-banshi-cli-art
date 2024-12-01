import {
    logPrint, progressBar, replaceLastLine, color, CharacterArt, matrix
} from '../src';


console.log(color.italic("testing"))
console.log(color.strikethrough("strikeword"));
console.log(color.underline("underline"));
console.log(color.bold("bold"));
console.log(color.italic("italic"));
console.log(color.bold(color.italic("bold italic")));
console.log(color.inverse('background'));
console.log(color.underline(color.blue("background testing")));
replaceLastLine("Replaced by you and your friend");
replaceLastLine("Replaced by me");

console.log(color.green("\nI am a successfull message"));


let chAr = new CharacterArt({ "color": color.green });

// chAr.setHeight(12);
// chAr.setCharInSpace("!")
chAr.charPattern("abcdefghijk").render();
chAr.setCharInSpace("!")
chAr.charPattern("0123456789").render();

