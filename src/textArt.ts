/**
 * Matrinx type console print
 */

import { color } from './textColor';

/**
 *  Generate random string
 * 
 * @param length 
 * @param space 
 * @returns 
 */
export function generateString(length: number, space: number = 0) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789 ★☆✡✺㎡~!@#$%^&*()_+={};:"<>?/|';

    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        let pos = Math.floor(Math.random() * charactersLength);
        if (Math.floor(Math.random() * 100) / i == 0) {
            result += color.red(characters.charAt(pos));
        } else {
            result += color.green(characters.charAt(pos));
        }
        if (space) {
            let k = 0;
            while (k < space) {
                result += " ";
                k++;
            }
        }
    }
    return result;
}


/**
 * Consolor print random letters
 * 
 * @param option 
 */
export async function matrix(option: any = {}) {
    var i = 0;
    let interval = option?.interval ?? 100;
    let stopat = option?.stopAt ?? 1000;
    var st = setInterval(async () => {
        i += 1;
        let text = generateString(option?.stringLenth ?? 60, option?.spaceb2nletter ?? 2);
        console.log(text);
        if (i >= stopat) {
            clearInterval(st);
        }
    }, interval);
}