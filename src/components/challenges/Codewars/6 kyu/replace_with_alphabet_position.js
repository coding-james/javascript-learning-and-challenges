// CODEWARS - Replace with alphabet position
export default function alphabetPosition(text) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let textPos = "";
    let replaced = text.toLowerCase().replace(/[^a-z]/gi, "");
    // console.log(replaced);
    // console.log(replaced.length);
    for (let char = 0; char < replaced.length; char++) {
        textPos = textPos + (letters.indexOf(replaced.charAt(char)) + 1);

        if (char < (replaced.length - 1)) {
            textPos = textPos + " ";
        }
        // console.log(`${replaced.charAt(char)} = ${char}`);
    }
    return textPos;
}