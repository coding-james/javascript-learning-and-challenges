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
    let output = array.slice();
    for (let index = 0; index < output.length; index++) {
        output[index] = `baby ${output[index]}`;
    }
    return output;
};

// declineEverything() and acceptEverything()
const politelyDecline = (veg) => {
    // console.log(`No ${veg} please. I will have pizza with extra cheese.`);
    return `No ${veg} please. I will have pizza with extra cheese.`;
}

export const declineEverything = arr => {
    // arr.forEach(result.push(politelyDecline));
    let result = [];
    arr.forEach(element => {
        result.push(politelyDecline(element));
    });
    return result;
}

export function acceptEverything(arr) {
    let result = [];
    arr.forEach(element => {
        result.push(`Ok, I guess I will eat some ${element}.`);
    });
    return result;
};

export function squareNums(arr) {
    return arr.map((element) => element * element);
}