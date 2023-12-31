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

export function shoutGreetings(arr) {
    return arr.map((element) => element.toUpperCase() + "!");
}

export function sortYears(arr) {
    return arr.sort().reverse();
}

export function justCoolStuff(arr1, arr2) {
    return arr2.filter(item => arr1.includes(item));
};

// Checks is every object in array matches criteria for specified field
export function isTheDinnerVegan(meal) {
    return meal.every((element) => element.source === "plant");
};

// Sorts an array in ascending order based on value of one of their properties
export function sortSpeciesByTeeth(array) {
    return array.sort((a, b) => a.numTeeth - b.numTeeth);
};

// Check if an item appears in an array and return index
export function findMyKeys(arr) {
    return arr.indexOf("keys");
};

// Return as object
export function dogFactory(name, breed, weight) {
    return {
        name: name,
        breed: breed,
        weight: weight
    }
}

//  takes a number as an argument and returns the factorial of the number. e.g. 6 becomes 6 * 5 * 4 * 3 * 2 * 1 = 720
export function factorial(num) {
    let result = 1;
    for (let index = num; index > 1; index--) {
        result *= index;
    }
    return result;
};

// returns the length between two characters in a string
export function subLength(word, letter) {
    let count = 0;
    let index1;
    let index2;

    for (let i = 0; i < word.length; i++) {
        if (count === 0 && word[i] === letter) {
            count++;
            index1 = i;
        } else if (count === 1 && word[i] === letter) {
            count++;
            index2 = i + 1;
        } else if (word[i] === letter) {
            count++;
        }
    }

    return count <= 1 || count > 2 ? 0 : index2 - index1;
};

// take a list and combine
export function groceries(list) {
    let result;
    let combinedList = list.map((element) => element.item);

    for (let i = 0; i < combinedList.length; i++) {
        if (i === 0) {
            result = combinedList[i];
        } else if (i === combinedList.length - 1) {
            result += ` and ${combinedList[i]}`;
        } else {
            result += `, ${combinedList[i]}`;
        }
    }
    return result;
};