export function reverseArray(array) {
    let newArray = [];
    for (let index = array.length; index > 0; index--) {
        newArray.push(array[index - 1]);
    }

    return newArray;
};