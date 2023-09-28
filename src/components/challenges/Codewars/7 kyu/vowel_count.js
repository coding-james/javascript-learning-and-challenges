// CODEWARS - Vowel Count

export default function getCount(str) {
    var vowelCount = str.match(/[aeiou]/gi);
    return vowelCount === null ? 0 : vowelCount.length;
}
