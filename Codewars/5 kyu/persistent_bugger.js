// CODEWARS: Persistent Bugger
function persistence(num) {
    let numArray = Array.from(num.toString()).map(Number);
    let result = 1;
    let count = 0;

    if (numArray.length > 1) {
        while (numArray.length > 1) {
            for (i = 0; i < numArray.length; i++) {
                result *= numArray[i];
            }
            numArray = Array.from(result.toString()).map(Number);
            result = 1;
            count++;
        }
        return count;
    }
    else {
        return count;
    }
}

module.exports = persistence;