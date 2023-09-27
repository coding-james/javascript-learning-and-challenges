// CODEWARS: Most frequently used words in a text
// Needed some guidance in the end - https://leetcode.com/problems/top-k-frequent-words/solutions/864478/easy-js-solution/
export default function topThreeWords(text) {
    let cleanText = text.toLowerCase().replace(/\s\s+/g, ' ').replace(/\b(')\b|['"`]/g, '$1').replace(/[^\w\s']/g, '');
    let words = cleanText.trim().split(" ");
    let wordFreq = new Map();

    words.forEach(word => wordFreq.set(word, wordFreq.get(word) + 1 || 1));
    let arr = Array.from(wordFreq.entries()).sort((a, b) => {
        return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];
    }).slice(0, 3).map(pair => pair[0]);

    if (arr[0] == "") {
        return [];
    } else if (arr[1] == "") {
        return arr.slice(0, 1);
    } else if (arr[2] == "") {
        return arr.slice(0, 2);
    } else {
        return arr;
    }
}