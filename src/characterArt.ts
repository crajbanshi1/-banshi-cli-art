
import { color } from './textColor';

// JavaScript implementation to print the
// pattern of alphabets A to Z using define char

export class CharacterArt {
    // Number of lines for the alphabet's pattern
    private height: number = 7;
    // Number of character width in each line
    private width: number = 13;
    private dummyk!: number;
    private counterM!: number;
    private counterN!: number;
    private spaceO!: number;
    private spaceQ!: number;
    private space0!: number;
    private counterV!: number;
    private counterW!: number;
    private counterX!: number;
    private counterY!: number;
    private counterZ!: number;
    private widthG: any;
    private widthO: any;
    private charSpace: string | Uint8Array = " ";
    private charinSpace: string | Uint8Array = " ";
    private fillchar: string | Uint8Array = "\u2588";
    private colors = color.reset;
    private fullString: string = "";
    private line!: number;
    private widthQ!: number;
    private width0!: number;
    private spaceColor = color.reset;

    private char: any[] = [Array(36).fill(undefined)];
    private charG: any = Array(0);
    private charK: any = Array(0);
    private charM: any = Array(0);
    private charN: any = Array(0);
    private charO: any = Array(0);
    private charQ: any = Array(0);
    private charV: any = Array(0);
    private charW: any = Array(0);
    private charX: any = Array(0);
    private char0: any = Array(0);

    /**
     * constructor
     * 
     * @param options 
     */
    constructor(options: any = {}) {
        if (options?.height) {
            this.height = options?.height;
        }
        if (options?.charSpace) {
            this.setCharSpace(options?.charSpace);
        }
        if (options?.charinSpace) {
            this.setCharInSpace(options?.charinSpace);
        }
        if (options?.fillchar) {
            this.setFillChar(options?.fillchar);
        }
        if (options?.color) {
            this.setColor(options?.color);
        }

        this.reset();
    }


    private reset() {
        // calulated
        this.fullString = "";
        this.width = (2 * this.height) - 1;
        this.counterW = Math.floor(this.height / 2);
        this.counterM = 0;
        this.counterN = 0;
        this.counterV = 0;
        this.counterX = 0;
        this.counterY = 0;
        this.counterZ = this.height - 1;
        this.widthG = this.width;

        this.spaceQ = this.spaceO = this.space0 = Math.floor(this.height / 3);

        this.widthO = Math.floor(this.height / 2) + Math.floor(this.height / 5) + this.spaceO + this.spaceO;
        this.widthQ = Math.floor(this.height / 2) + Math.floor(this.height / 5) + this.spaceQ + this.spaceQ;
        this.width0 = Math.floor(this.height / 2) + Math.floor(this.height / 5) + this.space0 + this.space0;

        // let n: number = Math.floor(this.width / 2), i: number, half: number = Math.floor(this.height / 2);
        this.dummyk = Math.floor(this.height / 2)
    }

    /**
     * Set output height
     * 
     * @param height 
     */
    public setHeight(height: number) {
        this.height = height;
    }

    /**
     * Get current height
     * 
     * @returns 
     */
    public getHeight() {
        return this.height;
    }

    /**
     * Set ANSI color usin. color object, i.e. color.green
     * 
     * @param color 
     */
    public setColor(color: string) {
        if (typeof color != 'function') {
            throw Error("Must provide a function of ANCII color e.g. color.green")
        }
        this.colors = color;
    }

    /**
     * Get current color
     * 
     * @returns 
     */
    public getColor() {
        return this.colors;
    }

    /**
     * Set a ACSII character to fill the art
     * 
     * @param fchar 
     * 
     */
    public setFillChar(fchar: string) {
        this.fillchar = fchar;
    }

    /**
     * Get current ACSII character to fill the art
     * 
     * @returns 
     */
    public getFillChar() {
        return this.fillchar;
    }

    /**
     * Set space character between letters
     * 
     * @param schar 
     */
    public setCharSpace(schar: string | Uint8Array) {
        this.charSpace = schar;
    }

    /**
     * Get space character between letters
     * 
     * @returns 
     */
    public getCharSpace() {
        return this.charSpace;
    }

    /**
     * Set space character inside a letters
     * 
     * @param schar 
     */
    public setCharInSpace(schar: string | Uint8Array) {
        this.charinSpace = schar;
    }

    /**
     * Get space character inside a letters
     * 
     * @returns 
     */
    public getCharInSpace() {
        return this.charinSpace;
    }

    /** Set color for space characters
     * 
     * @param color 
     */
    public setSpaceColor(color: string) {
        if (typeof color != 'function') {
            throw Error("Must provide a function of ANCII color e.g. color.green")
        }

        this.spaceColor = color;
    }

    /**
     * Get color for space characters
     * 
     * @returns 
     */
    public getSpaceColor() {
        return this.spaceColor;
    }

    /**
     * Absolute vale
     * 
     * @param d 
     * @returns 
     */
    private abs(d: number) {
        return d < 0 ? d * -1 : d;
    }

    // Function to print the pattern of 'A'
    private printCharA(n: number, i: number, half: number): string {
        if (Array.isArray(this.char[0]) && typeof this.char[0][i] == 'string') {
            return this.char[0][i];
        } else
            this.char[0] = Array(0);
        this.char[0][i] = this.spaceColor(this.charSpace) + this.makeA(n, i, 0)
        return this.char[0][i];
    }

    private makeA(n: number, i: number, j: number): string {
        if (j > this.width) {
            return "";
        }
        let char: string = '';
        if (j == n || j == (this.width - n)
            || (i == Math.floor(this.height / 2) && j > n
                && j < (this.width - n)))
            char = this.colors(this.fillchar);
        else
            char = this.spaceColor(this.charinSpace);
        return char + this.makeA(n, i, ++j);
    }

    // Function to print the pattern of 'B'
    private printCharB(n: number, i: number, half: number) {
        if (Array.isArray(this.char[1]) && typeof this.char[1][i] == 'string') {
            return this.char[1][i];
        } else
            this.char[1] = Array(0);
        this.char[1][i] = this.spaceColor(this.charSpace);
        this.char[1][i] += this.colors(this.fillchar);

        for (let j = 0; j < Math.ceil(this.width / 2); j++) {
            if ((i == 0 || i == this.height - 1 || i == half)
                && j < (Math.ceil(this.width / 2) - 1))
                this.char[1][i] += this.colors(this.fillchar);
            else if (j == (Math.ceil(this.width / 2) - 1)
                && !(i == 0 || i == this.height - 1
                    || i == half))
                this.char[1][i] += this.colors(this.fillchar);
            else
                this.char[1][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[1][i];
    }

    // Function to print the pattern of 'C'
    private printCharC(n: number, i: number, half: number) {
        if (Array.isArray(this.char[3]) && typeof this.char[3][i] == 'string') {
            return this.char[3][i];

        } else
            this.char[3] = Array(0);
        this.char[3][i] = this.spaceColor(this.charSpace);
        this.char[3][i] += this.colors(this.fillchar);
        for (let j = 0; j < (this.height - 1); j++) {
            if (i == 0 || i == this.height - 1)
                this.char[3][i] += this.colors(this.fillchar);
            else
                this.char[3][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[3][i];
    }

    // Function to print the pattern of 'D'
    private printCharD(n: number, i: number, half: number) {
        if (Array.isArray(this.char[4]) && typeof this.char[4][i] == 'string') {
            return this.char[4][i];
        } else
            this.char[4] = Array(0);
        this.char[4][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == this.height - 1)
                && j < this.height - 1)
                this.char[4][i] += this.colors(this.fillchar);
            else if (j == this.height - 1 && i != 0
                && i != this.height - 1)
                this.char[4][i] += this.colors(this.fillchar);
            else
                this.char[4][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[4][i];
    }

    // Function to print the pattern of 'E'
    private printCharE(n: number, i: number, half: number) {
        if (Array.isArray(this.char[5]) && typeof this.char[5][i] == 'string') {
            return this.char[5][i];
        } else
            this.char[5] = Array(0);
        this.char[5][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == this.height - 1)
                || (i == Math.floor(this.height / 2)
                    && j <= Math.floor(this.height / 2)))
                this.char[5][i] += this.colors(this.fillchar);
            else
                this.char[5][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[5][i];
    }

    // Function to print the pattern of 'F'
    private printCharF(n: number, i: number, half: number) {
        if (Array.isArray(this.char[6]) && typeof this.char[6][i] == 'string') {
            return this.char[6][i];
        } else
            this.char[6] = Array(0);
        this.char[6][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0) || (i == parseInt(half.toString())
                && j <= parseInt(half.toString())))
                this.char[6][i] += this.colors(this.fillchar);
            else
                this.char[6][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[6][i];
    }

    // Function to print the pattern of 'G'
    private printCharG(n: number, i: number, half: number) {
        if (Array.isArray(this.char[7]) && typeof this.char[7][i] == 'string') {
            return this.char[7][i];
        } else
            this.char[7] = Array(0);
        this.char[7][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.widthG; j++) {
            if ((i == 0 || i == this.height - 1)
                && (j == 0 || j == this.widthG - 1)) {
                this.char[7][i] += this.spaceColor(this.charinSpace);
            }
            else if (j == 0)
                this.char[7][i] += this.colors(this.fillchar);
            else if (i == 0 && j <= this.widthG)
                this.char[7][i] += this.colors(this.fillchar);
            else if (i == Math.floor(this.height / 2)
                && j > Math.floor(this.height / 2))
                this.char[7][i] += this.colors(this.fillchar);
            else if (i > Math.floor(this.height / 2)
                && j == this.widthG - 1) {
                this.char[7][i] += this.colors(this.fillchar);
            }
            else if (i == this.height - 1
                && j < this.widthG)
                this.char[7][i] += this.colors(this.fillchar);
            else
                this.char[7][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[7][i];
    }

    // Function to print the pattern of 'H'
    private printCharH(n: number, i: number, half: number) {
        if (Array.isArray(this.char[8]) && typeof this.char[8][i] == 'string') {
            return this.char[8][i];
        } else
            this.char[8] = Array(0);
        this.char[8][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((j == this.height - 1)
                || (i == Math.floor(this.height / 2)))
                this.char[8][i] += this.colors(this.fillchar);
            else
                this.char[8][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[8][i];
    }

    // Function to print the pattern of 'I'
    private printCharI(n: number, i: number, half: number) {
        if (Array.isArray(this.char[9]) && typeof this.char[9][i] == 'string') {
            return this.char[9][i];
        } else
            this.char[9] = Array(0);
        this.char[9][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == 0 || i == this.height - 1)
                this.char[9][i] += this.colors(this.fillchar);
            else if (j == Math.floor(this.height / 2))
                this.char[9][i] += this.colors(this.fillchar);
            else
                this.char[9][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[9][i];
    }

    // Function to print the pattern of 'J'
    private printCharJ(n: number, i: number, half: number) {
        if (Array.isArray(this.char[10]) && typeof this.char[10][i] == 'string') {
            return this.char[10][i];
        } else
            this.char[10] = Array(0);
        this.char[10][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == this.height - 1 && (j > 0
                && j < this.height - 1))
                this.char[10][i] += this.colors(this.fillchar);
            else if ((j == this.height - 1
                && i != this.height - 1)
                || (i > Math.floor(this.height / 2) - 1
                    && j == 0 && i != this.height - 1))
                this.char[10][i] += this.colors(this.fillchar);
            else
                this.char[10][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[10][i];
    }

    // Function to print the pattern of 'K'
    private printCharK(n: number, i: number, half: number) {
        if (Array.isArray(this.char[11]) && typeof this.char[11][i] == 'string') {
            return this.char[11][i];
        } else
            this.char[11] = Array(0);
        this.char[11][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j <= half; j++) {
            if (j == this.abs(this.dummyk))
                this.char[11][i] += this.colors(this.fillchar);
            else
                this.char[11][i] += this.spaceColor(this.charinSpace);
        }
        this.dummyk--;
        return this.char[11][i];
    }

    // Function to print the pattern of 'L'
    private printCharL(n: number, i: number, half: number) {
        if (Array.isArray(this.char[12]) && typeof this.char[12][i] == 'string') {
            return this.char[12][i];
        } else
            this.char[12] = Array(0);
        this.char[12][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (i == this.height - 1)
                this.char[12][i] += this.colors(this.fillchar);
            else
                this.char[12][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[12][i];
    }

    // Function to print the pattern of 'M'
    private printCharM(n: number, i: number, half: number) {
        if (Array.isArray(this.char[13]) && typeof this.char[13][i] == 'string') {
            return this.char[13][i];
        } else
            this.char[13] = Array(0);
        this.char[13][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.height)
                this.char[13][i] += this.colors(this.fillchar);
            else if (j == this.counterM
                || j == this.height - this.counterM - 1)
                this.char[13][i] += this.colors(this.fillchar);
            else
                this.char[13][i] += this.spaceColor(this.charinSpace);
        }
        if (this.counterM == Math.floor(this.height / 2)) {
            this.counterM = -99999;
        }
        else
            this.counterM++;
        return this.char[13][i];
    }

    // Function to print the pattern of 'N'
    private printCharN(n: number, i: number, half: number) {
        if (Array.isArray(this.char[14]) && typeof this.char[14][i] == 'string') {
            return this.char[14][i];
        } else
            this.char[14] = Array(0);
        this.char[14][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.height)
                this.char[14][i] += this.colors(this.fillchar);
            else if (j == this.counterN)
                this.char[14][i] += this.colors(this.fillchar);
            else
                this.char[14][i] += this.spaceColor(this.charinSpace);
        }
        this.counterN++;
        return this.char[14][i];
    }


    // Function to print the pattern of 'O'
    private printCharO(n: number, i: number, half: number) {
        if (Array.isArray(this.char[15]) && typeof this.char[15][i] == 'string') {
            return this.char[15][i];
        } else
            this.char[15] = Array(0);
        this.char[15][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.widthO; j++) {
            if (j == this.widthO - this.abs(this.spaceO)
                || j == this.abs(this.spaceO))
                this.char[15][i] += this.colors(this.fillchar);
            else if ((i == 0
                || i == this.height - 1)
                && j > this.abs(this.spaceO)
                && j < this.widthO - this.abs(this.spaceO))
                this.char[15][i] += this.colors(this.fillchar);
            else
                this.char[15][i] += this.spaceColor(this.charinSpace);
        }
        if (this.line != n && this.spaceO != 0
            && i < Math.floor(this.height / 2)) {
            this.spaceO--;
            this.line = n;
        }
        else if (this.line != n && i >= (Math.floor(this.height / 2) + Math.floor(this.height / 5))) {
            this.spaceO--;
            this.line = n;
        }

        return this.char[15][i];
    }

    // Function to print the pattern of 'P'
    private printCharP(n: number, i: number, half: number) {
        if (Array.isArray(this.char[16]) && typeof this.char[16][i] == 'string') {
            return this.char[16][i];
        } else
            this.char[16] = Array(0);
        this.char[16][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 2))
                && j < this.height - 1)
                this.char[16][i] += this.colors(this.fillchar);
            else if (i < Math.floor(this.height / 2)
                && j == this.height - 1 && i != 0)
                this.char[16][i] += this.colors(this.fillchar);
            else
                this.char[16][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[16][i];
    }

    // Function to print the pattern of 'Q'
    private printCharQ(n: number, i: number, half: number) {
        if (Array.isArray(this.char[17]) && typeof this.char[17][i] == 'string') {
            return this.char[17][i];
        } else
            this.char[17] = Array(0);
        this.char[17][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.widthQ; j++) {
            if (j == this.widthQ - this.abs(this.spaceQ)
                || j == this.abs(this.spaceQ)) {
                this.char[17][i] += this.colors(this.fillchar);
            }
            else if ((i == 0
                || i == this.height - 1)
                && j > this.abs(this.spaceQ)
                && j < this.widthQ - this.abs(this.spaceQ)) {
                this.char[17][i] += this.colors(this.fillchar);
            }
            else
                this.char[17][i] += this.spaceColor(this.charinSpace);
        }
        if (this.line != n && this.spaceQ != 0
            && i < Math.floor(this.height / 2)) {
            this.spaceQ--;
            this.char[17][i] += this.spaceColor(this.charinSpace);
            this.line = n;
        }
        else if (this.line != n && i >= (Math.floor(this.height / 2) + Math.floor(this.height / 5))) {
            this.spaceQ--;
            this.char[17][i] += this.colors(this.fillchar);
            this.line = n;
        } else {
            this.char[17][i] += this.spaceColor(this.charinSpace);
        }
        this.char[17][i] += this.spaceColor(this.charinSpace);
        return this.char[17][i];
    }

    // Function to print the pattern of 'R'
    private printCharR(n: number, i: number, half: number) {
        if (Array.isArray(this.char[18]) && typeof this.char[18][i] == 'string') {
            return this.char[18][i];
        } else
            this.char[18] = Array(0);
        this.char[18][i] = this.spaceColor(this.charSpace) + this.colors(this.fillchar);
        for (let j = 0; j < Math.ceil(this.width / 2); j++) {
            if ((i == 0 || i == half)
                && j < (Math.ceil(this.width / 2) - 2))
                this.char[18][i] += this.colors(this.fillchar);
            else if (j == (Math.ceil(this.width / 2) - 2)
                && !(i == 0 || i == half))
                this.char[18][i] += this.colors(this.fillchar);
            else
                this.char[18][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[18][i];
    }

    // Function to print the pattern of 'S'
    private printCharS(n: number, i: number, half: number) {
        if (Array.isArray(this.char[19]) && typeof this.char[19][i] == 'string') {
            return this.char[19][i];
        } else
            this.char[19] = Array(0);
        this.char[19][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 2)
                || i == this.height - 1))
                this.char[19][i] += this.colors(this.fillchar);
            else if (i < Math.floor(this.height / 2)
                && j == 0)
                this.char[19][i] += this.colors(this.fillchar);
            else if (i > Math.floor(this.height / 2)
                && j == this.height - 1)
                this.char[19][i] += this.colors(this.fillchar);
            else
                this.char[19][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[19][i];
    }

    // Function to print the pattern of 'T'
    private printCharT(n: number, i: number, half: number) {
        if (Array.isArray(this.char[20]) && typeof this.char[20][i] == 'string') {
            return this.char[20][i];
        } else
            this.char[20] = Array(0);
        this.char[20][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == 0)
                this.char[20][i] += this.colors(this.fillchar);
            else if (j == Math.floor(this.height / 2))
                this.char[20][i] += this.colors(this.fillchar);
            else
                this.char[20][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[20][i];
    }

    // Function to print the pattern of 'U'
    private printCharU(n: number, i: number, half: number) {
        if (Array.isArray(this.char[21]) && typeof this.char[21][i] == 'string') {
            return this.char[21][i];
        } else
            this.char[21] = Array(0);
        this.char[21][i] = this.spaceColor(this.charSpace);
        if (i != this.height - 1)
            this.char[21][i] += this.colors(this.fillchar);
        else
            this.char[21][i] += this.spaceColor(this.charinSpace);
        for (let j = 0; j < this.height; j++) {
            if (((i == this.height - 1)
                && j >= 0
                && j < this.height - 1))
                this.char[21][i] += this.colors(this.fillchar);
            else if (j == this.height - 1 && i != this.height - 1)
                this.char[21][i] += this.colors(this.fillchar);
            else
                this.char[21][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[21][i];
    }

    // Function to print the pattern of 'V'
    private printCharV(n: number, i: number, half: number) {
        if (Array.isArray(this.char[22]) && typeof this.char[22][i] == 'string') {
            return this.char[22][i];
        } else
            this.char[22] = Array(0);
        this.char[22][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.width; j++) {
            if (j == this.counterV
                || j == this.width - this.counterV - 1)
                this.char[22][i] += this.colors(this.fillchar);
            else
                this.char[22][i] += this.spaceColor(this.charinSpace);
        }
        this.counterV++;
        return this.char[22][i]
    }

    // Function to print the pattern of 'W'

    private printCharW(n: number, i: number, half: number) {
        if (Array.isArray(this.char[23]) && typeof this.char[23][i] == 'string') {
            return this.char[23][i];
        } else
            this.char[23] = Array(0);
        this.char[23][i] = this.spaceColor(this.charSpace);
        this.char[23][i] += this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.height)
                this.char[23][i] += this.colors(this.fillchar);
            else if ((i >= Math.floor(this.height / 2))
                && (j == this.counterW
                    || j == this.height - this.counterW - 1))
                this.char[23][i] += this.colors(this.fillchar);
            else
                this.char[23][i] += this.spaceColor(this.charinSpace);
        }
        if (i >= Math.floor(this.height / 2)) {
            this.counterW++;
        }
        return this.char[23][i];
    }

    // Function to print the pattern of 'X'

    private printCharX(n: number, i: number, half: number) {
        if (Array.isArray(this.char[24]) && typeof this.char[24][i] == 'string') {
            return this.char[24][i];
        } else
            this.char[24] = Array(0);
        this.char[24][i] = this.spaceColor(this.charSpace);

        for (let j = 0; j <= this.height; j++) {
            if (j == this.counterX
                || j == this.height - this.counterX)
                this.char[24][i] += this.colors(this.fillchar);
            else
                this.char[24][i] += this.spaceColor(this.charinSpace);
        }
        this.counterX++;
        return this.char[24][i];
    }

    // Function to print the pattern of 'Y'
    private printCharY(n: number, i: number, half: number) {
        if (Array.isArray(this.char[25]) && typeof this.char[25][i] == 'string') {
            return this.char[25][i];
        } else
            this.char[25] = Array(0);
        this.char[25][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.counterY
                || j == this.height - this.counterY
                && i <= parseInt(half.toString()))
                this.char[25][i] += this.colors(this.fillchar);
            else
                this.char[25][i] += this.spaceColor(this.charinSpace);
        }
        if (i < parseInt(half.toString()))
            this.counterY++;
        return this.char[25][i];
    }

    // Function to print the pattern of 'Z'
    private printCharZ(n: number, i: number, half: number) {
        if (Array.isArray(this.char[26]) && typeof this.char[26][i] == 'string') {
            return this.char[26][i];
        } else
            this.char[26] = Array(0);
        this.char[26][i] = this.spaceColor(this.charSpace);

        for (let j = 0; j < this.height; j++) {
            if (i == 0 || i == this.height - 1
                || j == this.counterZ)
                this.char[26][i] += this.colors(this.fillchar);
            else
                this.char[26][i] += this.spaceColor(this.charinSpace);
        }
        this.counterZ--;
        return this.char[26][i];
    }

    // Function to print the pattern of '0'
    private printChar0(n: number, i: number, half: number) {
        if (Array.isArray(this.char[27]) && typeof this.char[27][i] == 'string') {
            return this.char[27][i];
        } else
            this.char[27] = Array(0);

        this.char[27][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.width0; j++) {
            if (j == this.width0 - this.abs(this.space0)
                || j == this.abs(this.space0))
                this.char[27][i] += this.colors(this.fillchar);
            else if ((i == 0 || i > 0 && j == this.width0 - i - 1
                || i == this.height - 1)
                && j > this.abs(this.space0)
                && j < this.width0 - this.abs(this.space0))
                this.char[27][i] += this.colors(this.fillchar);
            else
                this.char[27][i] += this.spaceColor(this.charinSpace);
        }
        if (this.line != n && this.space0 != 0
            && i < Math.floor(this.height / 2)) {
            this.space0--;
            this.line = n;
        }
        else if (this.line != n && i >= (Math.floor(this.height / 2) + Math.floor(this.height / 5))) {
            this.space0--;
            this.line = n;
        }

        return this.char[27][i];
    }

    // Function to print the pattern of '1'
    private printChar1(n: number, i: number, half: number) {
        if (Array.isArray(this.char[28]) && typeof this.char[28][i] == 'string') {
            return this.char[28][i];
        } else
            this.char[28] = Array(0);
        this.char[28][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == 0 && j == half - 1)
                this.char[28][i] += this.colors(this.fillchar);
            else if (i == 1 && j >= half - 2 && j < half)
                this.char[28][i] += this.colors(this.fillchar);
            else if (j == Math.floor(this.height / 2))
                this.char[28][i] += this.colors(this.fillchar);
            else
                this.char[28][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[28][i];
    }

    // Function to print the pattern of '2'
    private printChar2(n: number, i: number, half: number) {
        if (Array.isArray(this.char[29]) && typeof this.char[29][i] == 'string') {
            return this.char[29][i];
        } else
            this.char[29] = Array(0);
        this.char[29][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 2)
                || i == this.height - 1))
                this.char[29][i] += this.colors(this.fillchar);
            else if (i < Math.floor(this.height / 2)
                && j == this.height - 1)
                this.char[29][i] += this.colors(this.fillchar);
            else if (i > Math.floor(this.height / 2)
                && j == 0)
                this.char[29][i] += this.colors(this.fillchar);
            else
                this.char[29][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[29][i];
    }

    // Function to print the pattern of '3'
    private printChar3(n: number, i: number, half: number) {
        if (Array.isArray(this.char[30]) && typeof this.char[30][i] == 'string') {
            return this.char[30][i];
        } else
            this.char[30] = Array(0);
        this.char[30][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 2)
                || i == this.height - 1))
                this.char[30][i] += this.colors(this.fillchar);
            else if (j == this.height - 1)
                this.char[30][i] += this.colors(this.fillchar);
            else
                this.char[30][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[30][i];
    }

    // Function to print the pattern of '4'
    private printChar4(n: number, i: number, half: number) {
        if (Array.isArray(this.char[31]) && typeof this.char[31][i] == 'string') {
            return this.char[31][i];
        } else
            this.char[31] = Array(0);
        this.char[31][i] = this.spaceColor(this.charSpace);
        if (i <= this.height / 2)
            this.char[31][i] += this.colors(this.fillchar);
        else
            this.char[31][i] += this.spaceColor(this.charinSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == this.height / 2 - 1)
                this.char[31][i] += this.colors(this.fillchar);
            else if (((i == Math.floor(this.height / 2))
                && j >= 0))
                this.char[31][i] += this.colors(this.fillchar);

            else if (j == this.height - 1 && i != this.height)
                this.char[31][i] += this.colors(this.fillchar);
            else
                this.char[31][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[31][i];
    }

    // Function to print the pattern of '5'
    private printChar5(n: number, i: number, half: number) {
        if (Array.isArray(this.char[32]) && typeof this.char[32][i] == 'string') {
            return this.char[32][i];
        } else
            this.char[32] = Array(0);
        this.char[32][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 3)
                || i == this.height - 1))
                this.char[32][i] += this.colors(this.fillchar);
            else if (i < Math.floor(this.height / 3)
                && j == 0)
                this.char[32][i] += this.colors(this.fillchar);
            else if (i > Math.floor(this.height / 3)
                && j == this.height - 1)
                this.char[32][i] += this.colors(this.fillchar);
            else
                this.char[32][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[32][i];
    }

    // Function to print the pattern of '6'
    private printChar6(n: number, i: number, half: number) {
        if (Array.isArray(this.char[33]) && typeof this.char[33][i] == 'string') {
            return this.char[33][i];
        } else
            this.char[33] = Array(0);
        this.char[33][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j < Math.ceil(this.width / 2); j++) {
            if ((j == 0 && i == 0) || (j == 0 && i == Math.ceil(this.height / 2) - 1) || (j == 0 && i == this.height - 1))
                this.char[33][i] += this.spaceColor(this.charinSpace);
            else if (j == 0 && i > 0 && i < Math.ceil(this.height)) {
                this.char[33][i] += this.colors(this.fillchar);
            } else if ((i == 0 || i == this.height - 1 || i == half)
                && j < (Math.ceil(this.width / 2) - 1))
                this.char[33][i] += this.colors(this.fillchar);
            else if (j == (Math.ceil(this.width / 2) - 1)
                && !(i == 0 || i == this.height - 1
                    || i == half) && i > half)
                this.char[33][i] += this.colors(this.fillchar);
            else
                this.char[33][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[33][i];
    }

    // Function to print the pattern of '7'
    private printChar7(n: number, i: number, half: number) {
        if (Array.isArray(this.char[34]) && typeof this.char[34][i] == 'string') {
            return this.char[34][i];
        } else
            this.char[34] = Array(0);
        this.char[34][i] = this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.width / 2 - 1; j++) {
            if (i == 0)
                this.char[34][i] += this.colors(this.fillchar);
            else if (j == n)
                this.char[34][i] += this.colors(this.fillchar);
            else
                this.char[34][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[34][i];
    }

    // Function to print the pattern of '8'
    private printChar8(n: number, i: number, half: number) {
        if (Array.isArray(this.char[35]) && typeof this.char[35][i] == 'string') {
            return this.char[35][i];
        } else
            this.char[35] = Array(0);
        this.char[35][i] = this.spaceColor(this.charSpace);

        for (let j = 0; j < Math.ceil(this.width / 2); j++) {
            if ((j == 0 && i == 0) || (j == 0 && i == Math.ceil(this.height / 2) - 1) || (j == 0 && i == this.height - 1))
                this.char[35][i] += this.spaceColor(this.charinSpace);
            else if (j == 0 && i > 0 && i < Math.ceil(this.height)) {
                this.char[35][i] += this.colors(this.fillchar);
            } else if ((i == 0 || i == this.height - 1 || i == half)
                && j < (Math.ceil(this.width / 2) - 1))
                this.char[35][i] += this.colors(this.fillchar);
            else if (j == (Math.ceil(this.width / 2) - 1)
                && !(i == 0 || i == this.height - 1
                    || i == half))
                this.char[35][i] += this.colors(this.fillchar);
            else
                this.char[35][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[35][i];
    }


    // Function to print the pattern of '9'
    private printChar9(n: number, i: number, half: number) {
        if (Array.isArray(this.char[36]) && typeof this.char[36][i] == 'string') {
            return this.char[36][i];
        } else
            this.char[36] = Array(0);
        this.char[36][i] = this.spaceColor(this.charSpace);
        // 

        for (let j = 0; j < Math.ceil(this.width / 2); j++) {
            if ((j == 0 && i == 0) || (j == 0 && i == Math.ceil(this.height / 2) - 1))
                this.char[36][i] += this.spaceColor(this.charinSpace);
            else if (j == 0 && i > 0 && i < Math.ceil(this.height / 2)) {
                this.char[36][i] += this.colors(this.fillchar);
            } else if ((i == 0 || i == this.height - 1 || i == half)
                && j < (Math.ceil(this.width / 2) - 1) && j > 0)
                this.char[36][i] += this.colors(this.fillchar);
            else if (j == (Math.ceil(this.width / 2) - 1)
                && !(i == 0 || i == this.height - 1
                    || i == half))
                this.char[36][i] += this.colors(this.fillchar);
            else
                this.char[36][i] += this.spaceColor(this.charinSpace);
        }
        return this.char[36][i];
    }

    private printSpace(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            this.fullString += this.spaceColor(this.charinSpace);
        }
    }


    // Function print the pattern of the
    // alphabets from A to Z

    /**
     * Function print the pattern of the alphabets from A to Z or small word 
     * 
     * @param character 
     * @returns 
     */
    public charPattern(character: string) {
        this.reset();
        let chars = character.toUpperCase().split('');
        let n: number = Math.floor(this.width / 2), i: number, half: number = Math.floor(this.height / 2);
        this.dummyk = half;
        this.fullString += "\n";

        for (i = 0; i < this.height; i++) {
            chars.forEach(element => {
                switch (element) {
                    case 'A':
                        this.fullString += this.printCharA(n, i, half);
                        break;
                    case 'B':
                        this.fullString += this.printCharB(n, i, half);
                        break;
                    case 'C':
                        this.fullString += this.printCharC(n, i, half);
                        break;
                    case 'D':
                        this.fullString += this.printCharD(n, i, half);
                        break;
                    case 'E':
                        this.fullString += this.printCharE(n, i, half);
                        break;
                    case 'F':
                        this.fullString += this.printCharF(n, i, half);
                        break;
                    case 'G':
                        this.fullString += this.printCharG(n, i, half);
                        break;
                    case 'H':
                        this.fullString += this.printCharH(n, i, half);
                        break;
                    case 'I':
                        this.fullString += this.printCharI(n, i, half);
                        break;
                    case 'J':
                        this.fullString += this.printCharJ(n, i, half);
                        break;
                    case 'K':
                        this.fullString += this.printCharK(n, i, half);
                        break;
                    case 'L':
                        this.fullString += this.printCharL(n, i, half);
                        break;
                    case 'M':
                        this.fullString += this.printCharM(n, i, half);
                        break;
                    case 'N':
                        this.fullString += this.printCharN(n, i, half);
                        break;
                    case 'O':
                        this.fullString += this.printCharO(n, i, half);
                        break;
                    case 'P':
                        this.fullString += this.printCharP(n, i, half);
                        break;
                    case 'Q':
                        this.fullString += this.printCharQ(n, i, half);
                        break;
                    case 'R':
                        this.fullString += this.printCharR(n, i, half);
                        break;
                    case 'S':
                        this.fullString += this.printCharS(n, i, half);
                        break;
                    case 'T':
                        this.fullString += this.printCharT(n, i, half);
                        break;
                    case 'U':
                        this.fullString += this.printCharU(n, i, half);
                        break;
                    case 'V':
                        this.fullString += this.printCharV(n, i, half);
                        break;
                    case 'W':
                        this.fullString += this.printCharW(n, i, half);
                        break;
                    case 'X':
                        this.fullString += this.printCharX(n, i, half);
                        break;
                    case 'Y':
                        this.fullString += this.printCharY(n, i, half);
                        break;
                    case 'Z':
                        this.fullString += this.printCharZ(n, i, half);
                        break;
                    case '0':
                        this.fullString += this.printChar0(n, i, half);
                        break;
                    case '1':
                        this.fullString += this.printChar1(n, i, half);
                        break;
                    case '2':
                        this.fullString += this.printChar2(n, i, half);
                        break;
                    case '3':
                        this.fullString += this.printChar3(n, i, half);
                        break;
                    case '4':
                        this.fullString += this.printChar4(n, i, half);
                        break;
                    case '5':
                        this.fullString += this.printChar5(n, i, half);
                        break;
                    case '6':
                        this.fullString += this.printChar6(n, i, half);
                        break;
                    case '7':
                        this.fullString += this.printChar7(n, i, half);
                        break
                    case '8':
                        this.fullString += this.printChar8(n, i, half);
                        break
                    case '9':
                        this.fullString += this.printChar9(n, i, half);
                        break
                    case ' ':
                        this.printSpace(n, i, half);
                        break;
                }
            });
            this.fullString += this.spaceColor(this.charSpace);
            this.fullString += ("\n");
            this.line = n;
            n--;
        }
        this.charG = [];
        this.charM = [];
        this.charN = [];
        this.charO = [];
        this.charQ = [];
        this.charV = [];
        this.charW = [];
        this.charX = [];
        return this;
    }

    /**
     * Get String format of word art for console
     * 
     * @returns 
     */
    public toString() {
        return this.fullString;
    }

    /**
     * Print to console and destroy
     */
    public render() {
        process.stdout.write(this.toString());
        this.fullString = "";
    }
}