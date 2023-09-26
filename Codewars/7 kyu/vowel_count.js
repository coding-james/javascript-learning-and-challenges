// CODEWARS - Vowel Count

function getCount(str) {
    var vowelCount = str.match(/[aeiou]/gi);
    return vowelCount === null ? 0 : vowelCount.length;
}

module.exports = getCount;