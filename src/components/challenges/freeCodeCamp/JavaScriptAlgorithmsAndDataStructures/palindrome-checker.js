export default function palindrome(str) {
    let cleanText = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let index = 0; index < cleanText.length / 2; index++) {
        if (index % 2 == 0 && cleanText.substr(index, 1) == cleanText.substr(((cleanText.length - 1) - index), 1)) {
            continue;
        } else if (index % 2 == 0 && cleanText.substr(index, 1) != cleanText.substr(((cleanText.length - 1) - index), 1)) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}