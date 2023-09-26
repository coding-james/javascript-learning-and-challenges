// CODEWARS: Highest Scoring Word

function high(x) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let highestScoreWord = "";
    let highestScore = 0;

    // split string by space into an array
    let words = x.split(" ");

    // loop for each word, substring to find score and save
    for (let index = 0; index < words.length; index++) {
        let wordScore = 0;
        for (let letter = 0; letter < words[index].length; letter++) {
            wordScore += letters.indexOf(words[index].substr(letter, 1)) + 1;
        }

        // store highest word and score, only replace if higher
        if (wordScore > highestScore) {
            highestScore = wordScore;
            highestScoreWord = words[index];
        }
    }

    // return highest word
    return highestScoreWord;
}

module.exports = high;