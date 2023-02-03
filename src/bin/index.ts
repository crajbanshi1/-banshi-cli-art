#!/usr/bin/env node

import { program } from 'commander';
import { color, CharacterArt } from '../index';


const version = () => {
    const { version } = require("../../package.json");
    console.log(color.green(version));
}

const printart = (name: string, options: any) => {
    let n = new CharacterArt();
    n.setColor(color[options.color]);
    n.charPattern(name).render();
}

const format = (name: string, options: any) => {
    console.log(color[options.color](name));
}

program
    .option('-v, --version')
    .action(version);

program
    .command('textart <name>')
    .description("textart <name>\nPrinted text art with color")
    .option('-c, --color <textcolor>', "Specify output color")
    .action(printart);

program
    .command('format <name>')
    .description("textart <name>\nPrinted text art with color")
    .option('-c, --color <textcolor>', "Specify output color")
    .action(format);

program.parse();