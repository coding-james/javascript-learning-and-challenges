// CODEWARS: Are they the "same"?
function comp(array1, array2) {
    let array1Sq = [];

    // Check if either array is null
    if (array1 == null || array2 == null) {
        return false;
    }

    // for each element in array 1, square and add to new array
    for (i = 0; i < array1.length; i++) {
        array1Sq.push(Math.pow(array1[i], 2));
    }

    // compare with array2 and remove from new array if found
    for (i2 = 0; i2 < array2.length; i2++) {
        if (array1Sq.includes(array2[i2])) {
            array1Sq.splice(array1Sq.indexOf(array2[i2]), 1);
        } else {
            return false;
        }
    }

    // if length of new array zero, then true
    return array1Sq.length == 0 ? true : false;
}

module.exports = comp;