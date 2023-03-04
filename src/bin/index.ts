#!/usr/bin/env node

import { program } from 'commander';
import { color, CharacterArt, matrix } from '../index';


const version = () => {
    const { version } = require("../../package.json");
    console.log(color.green(version));
}

const printart = (name: string, options: any) => {
    let n = new CharacterArt();
    n.setColor(color[options.color] ?? color.reset);
    n.setHeight(options.height || n.getHeight());
    n.setFillChar(options.fillchar || n.getFillChar())
    n.setCharSpace(options.charspace || n.getCharSpace())
    n.setCharInSpace(options.charspace || n.getCharSpace())
    n.charPattern(name).render();
}

const cliMatrix = (options: any) => {
    options.stopAt = options.stop;
    if (!options.stringLenth)
        options.stringLenth = options.charlen;
    options.spaceb2nletter = options.space;
    matrix(options);
};

const format = (name: string, options: any) => {
    Object.keys(options).forEach((key: any, i: number) => {
        if (key == "color") {
            name = color[options.color](name);
        } else {
            name = (color[key])(name);
        }

    });
    console.log(name);
}

program
    .option('-v, --version')
    .action(version);

program
    .command('textart <name>')
    .description("textart <name>\nPrinted text art with color")
    .option('-c, --color <textcolor>', "Specify output color")
    .option('-f, --fillchar <char>', "Specify output fill char")
    .option('-h, --height <number>', "Specify output height")
    .option('-cp, --charspace <char>', "Specify space character")
    .action(printart);

program
    .command('format <name>')
    .description("format of text <name>\nPrinted text art")
    .option('-c, --color <textcolor>', "Specify output color")
    .option("-b, --bold", "Bold text")
    .option("-u, --underline", "Underline text")
    .option("-r, --reverse", "Reverse color")
    .option("-i, --italic", "Italic text")
    .option("-o, --overline", "Overline text")
    .option("-s, --strikethrough", "Strikethrough text")
    .action(format);

program
    .command('matrix')
    .description("matrrix <name>\nPrinted text art with rain effect like Matrix")
    .option('-c, --color <textcolor>', "Color to cli char display")
    .option('-iv, --interval <time>', "Interval time in ms")
    .option('-st, --stop <time>', "Stop after time in ms")
    .option('-cl, --charlen <number>', "Char lenth per chunk")
    .option('-sp, --spaceb2nletter <number>', "Spaces between character chunks")
    .option('-sl, --stringLenth <number>', "Char lenth per chunk")
    .action(cliMatrix);

program.parse();