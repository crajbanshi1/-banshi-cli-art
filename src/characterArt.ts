
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
    private spaceColor = color.reset;

    private charG: any = Array(0);
    private charK: any = Array(0);
    private charM: any = Array(0);
    private charN: any = Array(0);
    private charO: any = Array(0);
    private charQ: any = Array(0);
    private charV: any = Array(0);
    private charW: any = Array(0);
    private charX: any = Array(0);

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

        this.spaceQ = this.spaceO = Math.floor(this.height / 3);

        this.widthO = Math.floor(this.height / 2) + Math.floor(this.height / 5) + this.spaceO + this.spaceO;
        this.widthQ = Math.floor(this.height / 2) + Math.floor(this.height / 5) + this.spaceQ + this.spaceQ;

        let n: number = Math.floor(this.width / 2), i: number, half: number = Math.floor(this.height / 2);
        this.dummyk = half;
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
    private printCharA(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.width; j++) {
            if (j == n || j == (this.width - n)
                || (i == Math.floor(this.height / 2) && j > n
                    && j < (this.width - n)))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }

    }

    // Function to print the pattern of 'B'
    private printCharB(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.width; j++) {
            if ((i == 0 || i == this.height - 1 || i == half)
                && j < (this.width - 2))
                this.fullString += this.colors(this.fillchar);
            else if (j == (this.width - 2)
                && !(i == 0 || i == this.height - 1
                    || i == half))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'C'
    private printCharC(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < (this.height - 1); j++) {
            if (i == 0 || i == this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'D'
    private printCharD(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == this.height - 1)
                && j < this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else if (j == this.height - 1 && i != 0
                && i != this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);

        }
    }

    // Function to print the pattern of 'E'
    private printCharE(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == this.height - 1)
                || (i == Math.floor(this.height / 2)
                    && j <= Math.floor(this.height / 2)))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);

        }
    }

    // Function to print the pattern of 'F'
    private printCharF(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0) || (i == parseInt(half.toString())
                && j <= parseInt(half.toString())))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);

        }
    }

    // Function to print the pattern of 'G'
    private printCharG(n: number, i: number, half: number) {
        if (typeof this.charG[i] == 'string') {
            this.fullString += this.charG[i];
            return;
        }
        this.charG[i] = this.spaceColor(this.charSpace);
        this.charG[i] += this.spaceColor(this.charSpace);
        for (let j = 0; j < this.widthG; j++) {
            if ((i == 0 || i == this.height - 1)
                && (j == 0 || j == this.widthG - 1)) {
                this.charG[i] += this.spaceColor(this.charinSpace);
            }
            else if (j == 0)
                this.charG[i] += this.colors(this.fillchar);
            else if (i == 0 && j <= this.widthG)
                this.charG[i] += this.colors(this.fillchar);
            else if (i == Math.floor(this.height / 2)
                && j > Math.floor(this.height / 2))
                this.charG[i] += this.colors(this.fillchar);
            else if (i > Math.floor(this.height / 2)
                && j == this.widthG - 1) {
                this.charG[i] += this.colors(this.fillchar);
            }
            else if (i == this.height - 1
                && j < this.widthG)
                this.charG[i] += this.colors(this.fillchar);
            else
                this.charG[i] += this.spaceColor(this.charinSpace);
        }
        this.fullString += this.charG[i];
    }

    // Function to print the pattern of 'H'
    private printCharH(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((j == this.height - 1)
                || (i == Math.floor(this.height / 2)))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'I'
    private printCharI(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == 0 || i == this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else if (j == Math.floor(this.height / 2))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);

        }
    }

    // Function to print the pattern of 'J'
    private printCharJ(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == this.height - 1 && (j > 0
                && j < this.height - 1))
                this.fullString += this.colors(this.fillchar);
            else if ((j == this.height - 1
                && i != this.height - 1)
                || (i > Math.floor(this.height / 2) - 1
                    && j == 0 && i != this.height - 1))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'K'
    private printCharK(n: number, i: number, half: number) {
        if (typeof this.charK[i] == 'string') {
            this.fullString += this.charK[i];
            return;
        }
        this.charK[i] = this.spaceColor(this.charSpace);
        this.charK[i] += this.spaceColor(this.charSpace);
        this.charK[i] += this.colors(this.fillchar);
        for (let j = 0; j <= half; j++) {
            if (j == this.abs(this.dummyk))
                this.charK[i] += this.colors(this.fillchar);
            else
                this.charK[i] += this.spaceColor(this.charinSpace);
        }
        this.dummyk--;
        this.fullString += this.charK[i];
    }

    // Function to print the pattern of 'L'
    private printCharL(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (i == this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'M'
    private printCharM(n: number, i: number, half: number) {
        if (typeof this.charM[i] == 'string') {
            this.fullString += this.charM[i];
            return;
        }
        this.charM[i] = this.spaceColor(this.charSpace);
        this.charM[i] += this.spaceColor(this.charSpace);
        this.charM[i] += this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.height)
                this.charM[i] += this.colors(this.fillchar);
            else if (j == this.counterM
                || j == this.height - this.counterM - 1)
                this.charM[i] += this.colors(this.fillchar);
            else
                this.charM[i] += this.spaceColor(this.charinSpace);
        }
        if (this.counterM == Math.floor(this.height / 2)) {
            this.counterM = -99999;
        }
        else
            this.counterM++;
        this.fullString += this.charM[i];
    }

    // Function to print the pattern of 'N'
    private printCharN(n: number, i: number, half: number) {
        if (typeof this.charN[i] == 'string') {
            this.fullString += this.charN[i];
            return;
        }
        this.charN[i] = this.spaceColor(this.charSpace);
        this.charN[i] += this.spaceColor(this.charSpace);
        this.charN[i] += this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.height)
                this.charN[i] += this.colors(this.fillchar);
            else if (j == this.counterN)
                this.charN[i] += this.colors(this.fillchar);
            else
                this.charN[i] += this.spaceColor(this.charinSpace);
        }
        this.counterN++;
        this.fullString += this.charN[i];
    }


    // Function to print the pattern of 'O'
    private printCharO(n: number, i: number, half: number) {
        if (typeof this.charO[i] == 'string') {
            this.fullString += this.charO[i];
            return;
        }
        this.charO[i] = this.spaceColor(this.charSpace);
        this.charO[i] += this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.widthO; j++) {
            if (j == this.widthO - this.abs(this.spaceO)
                || j == this.abs(this.spaceO))
                this.charO[i] += this.colors(this.fillchar);
            else if ((i == 0
                || i == this.height - 1)
                && j > this.abs(this.spaceO)
                && j < this.widthO - this.abs(this.spaceO))
                this.charO[i] += this.colors(this.fillchar);
            else
                this.charO[i] += this.spaceColor(this.charinSpace);
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

        this.fullString += this.charO[i];
    }

    // Function to print the pattern of 'P'
    private printCharP(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 2))
                && j < this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else if (i < Math.floor(this.height / 2)
                && j == this.height - 1 && i != 0)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'Q'
    private printCharQ(n: number, i: number, half: number) {
        if (typeof this.charQ[i] == 'string') {
            this.fullString += this.charQ[i];
            return;
        }
        this.charQ[i] = this.spaceColor(this.charSpace);
        this.charQ[i] += this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.widthQ; j++) {
            if (j == this.widthQ - this.abs(this.spaceQ)
                || j == this.abs(this.spaceQ)) {
                this.charQ[i] += this.colors(this.fillchar);
            }
            else if ((i == 0
                || i == this.height - 1)
                && j > this.abs(this.spaceQ)
                && j < this.widthQ - this.abs(this.spaceQ)) {
                this.charQ[i] += this.colors(this.fillchar);
            }
            else
                this.charQ[i] += this.spaceColor(this.charinSpace);
        }
        if (this.line != n && this.spaceQ != 0
            && i < Math.floor(this.height / 2)) {
            this.spaceQ--;
            this.charQ[i] += this.spaceColor(this.charinSpace);
            this.line = n;
        }
        else if (this.line != n && i >= (Math.floor(this.height / 2) + Math.floor(this.height / 5))) {
            this.spaceQ--;
            this.charQ[i] += this.colors(this.fillchar);
            this.line = n;
        } else {
            this.charQ[i] += this.spaceColor(this.charinSpace);
        }
        this.charQ[i] += this.spaceColor(this.charinSpace);
        this.fullString += this.charQ[i];
    }

    // Function to print the pattern of 'R'
    private printCharR(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.colors(this.fillchar);
        for (let j = 0; j < this.width; j++) {
            if ((i == 0 || i == half)
                && j < (this.width - 2))
                this.fullString += this.colors(this.fillchar);
            else if (j == (this.width - 2)
                && !(i == 0 || i == half))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'S'
    private printCharS(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if ((i == 0 || i == Math.floor(this.height / 2)
                || i == this.height - 1))
                this.fullString += this.colors(this.fillchar);
            else if (i < Math.floor(this.height / 2)
                && j == 0)
                this.fullString += this.colors(this.fillchar);
            else if (i > Math.floor(this.height / 2)
                && j == this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }

    }

    // Function to print the pattern of 'T'
    private printCharT(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j < this.height; j++) {
            if (i == 0)
                this.fullString += this.colors(this.fillchar);
            else if (j == Math.floor(this.height / 2))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'U'
    private printCharU(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.spaceColor(this.charSpace);
        if (i != this.height - 1)
            this.fullString += this.colors(this.fillchar);
        else
            this.fullString += this.spaceColor(this.charinSpace);
        for (let j = 0; j < this.height; j++) {
            if (((i == this.height - 1)
                && j >= 0
                && j < this.height - 1))
                this.fullString += this.colors(this.fillchar);
            else if (j == this.height - 1 && i != this.height - 1)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
    }

    // Function to print the pattern of 'V'
    private printCharV(n: number, i: number, half: number) {
        if (typeof this.charV[i] == 'string') {
            this.fullString += this.charV[i];
            return;
        }
        this.charV[i] = this.spaceColor(this.charSpace);
        this.charV[i] += this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.width; j++) {
            if (j == this.counterV
                || j == this.width - this.counterV - 1)
                this.charV[i] += this.colors(this.fillchar);
            else
                this.charV[i] += this.spaceColor(this.charinSpace);
        }
        this.counterV++;
        this.fullString += this.charV[i]
    }

    // Function to print the pattern of 'W'

    private printCharW(n: number, i: number, half: number) {
        if (typeof this.charW[i] == 'string') {
            this.fullString += this.charW[i];
            return;
        }
        this.charW[i] = this.spaceColor(this.charSpace);
        this.charW[i] += this.spaceColor(this.charSpace);
        this.charW[i] += this.colors(this.fillchar);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.height)
                this.charW[i] += this.colors(this.fillchar);
            else if ((i >= Math.floor(this.height / 2))
                && (j == this.counterW
                    || j == this.height - this.counterW - 1))
                this.charW[i] += this.colors(this.fillchar);
            else
                this.charW[i] += this.spaceColor(this.charinSpace);
        }
        if (i >= Math.floor(this.height / 2)) {
            this.counterW++;
        }
        this.fullString += this.charW[i];
    }

    // Function to print the pattern of 'X'

    private printCharX(n: number, i: number, half: number) {
        if (typeof this.charX[i] == 'string') {
            this.fullString += this.charX[i];
            return;
        }
        this.charX[i] = this.spaceColor(this.charSpace);
        this.charX[i] += this.spaceColor(this.charSpace);

        for (let j = 0; j <= this.height; j++) {
            if (j == this.counterX
                || j == this.height - this.counterX)
                this.charX[i] += this.colors(this.fillchar);
            else
                this.charX[i] += this.spaceColor(this.charinSpace);
        }
        this.counterX++;
        this.fullString += this.charX[i];
    }

    // Function to print the pattern of 'Y'
    private printCharY(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace);
        this.fullString += this.spaceColor(this.charSpace);
        for (let j = 0; j <= this.height; j++) {
            if (j == this.counterY
                || j == this.height - this.counterY
                && i <= parseInt(half.toString()))
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
        if (i < parseInt(half.toString()))
            this.counterY++;
    }

    // Function to print the pattern of 'Z'
    private printCharZ(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);

        for (let j = 0; j < this.height; j++) {
            if (i == 0 || i == this.height - 1
                || j == this.counterZ)
                this.fullString += this.colors(this.fillchar);
            else
                this.fullString += this.spaceColor(this.charinSpace);
        }
        this.counterZ--;
    }

    private printSpace(n: number, i: number, half: number) {
        this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
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
                        this.printCharA(n, i, half);
                        break;
                    case 'B':
                        this.printCharB(n, i, half);
                        break;
                    case 'C':
                        this.printCharC(n, i, half);
                        break;
                    case 'D':
                        this.printCharD(n, i, half);
                        break;
                    case 'E':
                        this.printCharE(n, i, half);
                        break;
                    case 'F':
                        this.printCharF(n, i, half);
                        break;
                    case 'G':
                        this.printCharG(n, i, half);
                        break;
                    case 'H':
                        this.printCharH(n, i, half);
                        break;
                    case 'I':
                        this.printCharI(n, i, half);
                        break;
                    case 'J':
                        this.printCharJ(n, i, half);
                        break;
                    case 'K':
                        this.printCharK(n, i, half);
                        break;
                    case 'L':
                        this.printCharL(n, i, half);
                        break;
                    case 'M':
                        this.printCharM(n, i, half);
                        break;
                    case 'N':
                        this.printCharN(n, i, half);
                        break;
                    case 'O':
                        this.printCharO(n, i, half);
                        break;
                    case 'P':
                        this.printCharP(n, i, half);
                        break;
                    case 'Q':
                        this.printCharQ(n, i, half);
                        break;
                    case 'R':
                        this.printCharR(n, i, half);
                        break;
                    case 'S':
                        this.printCharS(n, i, half);
                        break;
                    case 'T':
                        this.printCharT(n, i, half);
                        break;
                    case 'U':
                        this.printCharU(n, i, half);
                        break;
                    case 'V':
                        this.printCharV(n, i, half);
                        break;
                    case 'W':
                        this.printCharW(n, i, half);
                        break;
                    case 'X':
                        this.printCharX(n, i, half);
                        break;
                    case 'Y':
                        this.printCharY(n, i, half);
                        break;
                    case 'Z':
                        this.printCharZ(n, i, half);
                        break;
                    case ' ':
                        this.printSpace(n, i, half);
                        break;
                }
            });
            this.fullString += this.spaceColor(this.charSpace); this.fullString += this.spaceColor(this.charSpace);
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