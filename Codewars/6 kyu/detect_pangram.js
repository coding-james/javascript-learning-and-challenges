// CODEWARS: Detect Pangram
function isPangram(string) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let count = 0;
    for (let char = 0; char < letters.length; char++) {
        if (string.toLowerCase().includes(letters[char]) == true) {
            count++;
        }
    }

    if (count == 26) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPangram;