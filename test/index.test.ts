import {
	color,
	progressBar, logPrint
} from '../src';

describe('placeholder Suite', () => {
	//0. Sample Test Case
	test('underline test', () => {
		console.log(color.underline("underline"));
		console.log(color.bold("bold"));
		console.log(color.italic("italic"));
		console.log(color.underline(color.bold(color.italic("bold italic"))));
		console.log(color.underline(" underline"));
		console.log(color.inverse(color.red('textRed') + color.green('green text')));
		console.log(color.red('textRed') + color.green('green text'));
		logPrint("Completed");
		expect(1 + 1).toEqual(2)
	});
	
})

