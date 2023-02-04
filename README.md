# color-art
A simple cli output tool for node js. Command line colored text, word art, simple progress bar.

![color-art](https://raw.githubusercontent.com/crajbanshi/color-art/main/assets/image/logo.png)

# Demo
![Demo](https://raw.githubusercontent.com/crajbanshi/color-art/main/assets/image/Screenshot%202023-02-03%20092129.png)

# Project goal
Target to build a lightwaight commandline module for colored commadline text output.

# install

```.ts
npm i --save-dev color-art
```

# Use

```.ts
import {
    progressBar, replaceLastLine, color, CharacterArt
} from 'color-art';

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

chAr.charPattern("CLI ART").render();

```

## List of Format method

reset
bold
dim
italic
underline
overline
inverse
reverse
hidden
strikethrough

## List of Colors method

black
red
green
yellow
blue
magenta
cyan
white
blackBright
gray // Alias of `blackBright`
redBright
greenBright
yellowBright
blueBright
magentaBright
cyanBright
whiteBright
bgBlack
bgRed
bgGreen
bgYellow
bgBlue
bgMagenta
bgCyan
bgWhite
bgBlackBright
bgGray // Alias of `bgBlackBright`
bgRedBright
bgGreenBright
bgYellowBright
bgBlueBright
bgMagentaBright
bgCyanBright
bgWhiteBright


## Art Matrix

```.ts
import { matrix } from 'color-art';

let opt = {
    "stringLenth": 55,
    "spaceb2nletter": 5,
    "interval": 70,
    "stopAt": 500
}

matrix(opt);

```

## Command line

Install global for command line tool
```.ts
npm i -g color-art
```


```.ts
cli-art textart CLI

// with color option

cli-art textart CLI -c red

```
