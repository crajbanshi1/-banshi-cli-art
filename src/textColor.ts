
import readline from 'readline';
import { curentDateTime } from './util';
// import {text} from './colorText'




import colors from './data/colors';

let styles: any = [];


function loadmethods(options: any): any {
    const CText = (...strings: any) => strings.join(' ');
    Object.setPrototypeOf(CText, createCText.prototype);
    return CText;
}

function createCText(options: any = null) {
    return loadmethods(options);
}

for (const [styleName, style] of Object.entries(colors)) {
    styles[styleName] = {
        get() {
            const builder = (str: string) => {
                return `\x1b[${style[0]}m${str}\x1b[${style[1]}m`;
            }
            Object.defineProperty(this, styleName, { value: builder });
            return builder;
        },
    };
}
Object.defineProperties(createCText.prototype, styles);
export const color = createCText();




export async function printProgress(progress: number | string) {
    readline.cursorTo(process.stdout, 0);    
    process.stdout.write(progress + '%');
}

export function replaceLastLine(progress: string) {    
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(progress);
}

/**
 * 
 * @param progress number 
 * @param options | {"fillcolor": green, "fillToPercent":false, "percentColor": red }
 * @param msg string
 *  
 * 
 */
export async function progressBar(progress: number,  options: any = {}, msg: string = "") {
    let fill = '\u2588'
    let pr = fill;
    let j = 0;
    let restPr = '';

    let fillcolor = options?.fillcolor ?? color.white;
    let percentColor = options?.percentColor ?? color.white;
    if (options?.fillToPercent) {
        percentColor = fillcolor;
    }

    while (j <= progress / 2) {
        pr += fill;
        j++;
    }
    while (j <= 50) {
        restPr += '-';
        j++;
    }
    pr = fillcolor(pr) + restPr + percentColor(progress + '%');
    
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    if (msg)
        process.stdout.write(curentDateTime() + " : " + msg + "\t...." + progress + '%' + "\n");
    process.stdout.write(pr);
}

export function logPrint(msg: any) {
    console.log(curentDateTime(), ":", msg);
}
