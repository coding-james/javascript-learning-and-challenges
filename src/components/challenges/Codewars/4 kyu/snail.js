// CODEWARS: Snail Sort

export var snail = function (array) {
    let tmpArray = array;
    let digitCount = tmpArray.flat().length;
    let result = [];

    while (result.length < digitCount) {
        // first array cycle through
        for (let i = 0; i < tmpArray[0].length; i++) {
            result.push(tmpArray[0][i]); // In order, pushes digits from First nested array
        }
        tmpArray.shift(); // removes first nested array

        // then last digit of middle arrays
        if (tmpArray.length > 1) {
            for (let m = 0; m < tmpArray.length - 1; m++) {
                result.push(tmpArray[m][array[m].length - 1]); // pushes last digit of the current (m) array
                tmpArray[m].pop(); // removes the last digit from current array
            }
        }

        // then last array, end to start
        if (tmpArray.length > 0) {
            for (let e = tmpArray[tmpArray.length - 1].length - 1; e >= 0; e--) {
                result.push(tmpArray[tmpArray.length - 1][e]); // end to start pushes digits from last nested array 
            }
            tmpArray.pop(); // removes last nested array
        }

        // then first digit of middle arrays
        if (tmpArray.length > 1) {
            for (let m = tmpArray.length - 1; m > 0; m--) {
                result.push(tmpArray[m][0]); // returns first digit of the current (m) array
                tmpArray[m].shift(); // removes the first digit from current array
            }    
        }
    }
    return result;
}