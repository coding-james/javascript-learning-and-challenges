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

// declineEverything() and acceptEverything()
const politelyDecline = (veg) => {
    // console.log(`No ${veg} please. I will have pizza with extra cheese.`);
    return `No ${veg} please. I will have pizza with extra cheese.`;
}

export const declineEverything = arr => {
    let result = [];
    result.push(arr.forEach(politelyDecline));
    return result;
}

export function acceptEverything(arr) {
    let result = [];
    arr.forEach(element => {
        result.push(`Ok, I guess I will eat some ${element}.`);
    });
    return result;
};