// CODEWARS - Unique in order
var uniqueInOrder = function (iterable) {
    let unique = [];
    if (iterable.length == 1 && (iterable.includes('') || iterable.includes(' ')) && iterable.constructor === Array) {
        return [''];
    } else if (iterable.constructor === String && iterable.length > 0) {
        unique = [iterable.charAt(0)];
        for (let char = 0; char < iterable.length; char++) {
            if (iterable.charAt(char) != unique[unique.length - 1]) {
                unique.push(iterable.charAt(char));
            }
        }
        return unique;
    } else if (iterable.constructor === Array && iterable.length > 0) {
        unique = [iterable[0]];
        for (let char = 0; char < iterable.length; char++) {
            if (iterable[char] != unique[unique.length - 1]) {
                unique.push(iterable[char]);
            }
        }
        return unique;
    } else {
        return unique;
    }
}

module.exports = uniqueInOrder;