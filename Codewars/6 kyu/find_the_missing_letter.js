// CODEWARS: Find the missing letter

function findMissingLetter(array) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let start = letters.indexOf(array[0].toLowerCase());
    let current = start;

    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        if (letters[current] != array[arrayIndex].toLowerCase()) {
            return array[0] == letters[start] ? letters[current] : letters[current].toUpperCase();
        } else {
            current++;
        }
    }

    return "error";
}

module.exports = findMissingLetter;