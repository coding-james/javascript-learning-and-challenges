// CODEWARS: Rail Fence Cipher: Encoding and Decoding

function encodeRailFenceCipher(string, numberRails) {
    if (string.length === 0) { return ""; }
    let segments = [];
    let direction = "backwards";
    let result = "";
    let pos = numberRails - 2;

    for (let i = 0; i < string.length; i++) {
        if (segments.length < numberRails) {
            segments.push(string[i]);
        } else if (direction == "forwards") {
            segments[pos] += string[i];
            if (pos < numberRails - 1) {
                pos++;
            } else {
                pos--;
                direction = "backwards";
            }
        } else {
            segments[pos] += string[i];
            if (pos > 0) {
                pos--;
            } else {
                pos++;
                direction = "forwards";
            }
        }
    }

    for (let j = 0; j < segments.length; j++) {
        result += segments[j];
    }

    return result;
}

function decodeRailFenceCipher(string, numberRails) {
    if (string.length === 0) { return ""; }
    let segments = [];
    let code = [];
    let direction = "backwards";
    let result = "";
    let pos = numberRails - 2;

    // Create rails
    for (let i = 0; i < string.length; i++) {
        if (code.length < numberRails) {
            code.push(i);
        } else if (direction == "forwards") {
            code.push(pos);
            if (pos < numberRails - 1) {
                pos++;
            } else {
                pos--;
                direction = "backwards";
            }
        } else {
            code.push(pos);
            if (pos > 0) {
                pos--;
            } else {
                pos++;
                direction = "forwards";
            }
        }
    }
    code.sort(function (a, b) { return a - b }); // sort() will sort as strings not numbers, use this instead.

    // Split into segments / rails
    let segmentIndex = -1;
    for (let i = 0; i < string.length; i++) {
        if (i == 0 || code[i] != code[i - 1]) {
            segments.push(string[i]);
            segmentIndex++;
        } else {
            segments[segmentIndex] += string[i];
        }
    }

    // Take letters from segments / rails
    segmentIndex = 0;
    direction = "forwards";
    while (result.length < string.length) {
        if (direction == "forwards") {
            result += segments[segmentIndex][0];
            segments[segmentIndex] = segments[segmentIndex].substring(1);
            if (segmentIndex < segments.length - 1) {
                segmentIndex++;
            } else {
                segmentIndex--;
                direction = "backwards";
            }
        } else {
            result += segments[segmentIndex][0];
            segments[segmentIndex] = segments[segmentIndex].substring(1);
            if (segmentIndex > 0) {
                segmentIndex--;
            } else {
                segmentIndex++;
                direction = "forwards";
            }
        }
    }
    return result;
}

module.exports = { encodeRailFenceCipher, decodeRailFenceCipher };