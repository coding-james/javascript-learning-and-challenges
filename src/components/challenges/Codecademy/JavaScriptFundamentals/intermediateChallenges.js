export function reverseArray(array) {
    let newArray = [];
    for (let index = array.length; index > 0; index--) {
        newArray.push(array[index - 1]);
    }

    return newArray;
};

export function greetAliens(array) {
    let consoleArray = [];
    for (let index = 0; index < array.length; index++) {
        const message = `Oh powerful ${array[index]}, we humans offer our unconditional surrender!`;
        console.log(message);
        consoleArray.push(message);
    }
    return consoleArray;
};

export function convertToBaby(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = `baby ${array[index]}`;
    }
    return array;
};