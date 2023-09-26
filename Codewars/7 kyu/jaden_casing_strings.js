// CODEWARS: Jaden Casing Strings

String.prototype.toJadenCase = function () {
    let newStr = this;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.charAt(i - 1) === " " || i == 0) {
            const replacement = newStr.charAt(i).toUpperCase();
            // console.log(`${newStr.charAt(i)} at position ${i} replace with ${replacement}`);
            newStr = newStr.substring(0, i) + replacement + newStr.substring(i + 1);
        }
    }
    return newStr;
};

// replace elements of a string - https://bobbyhadz.com/blog/javascript-string-replace-character-at-index