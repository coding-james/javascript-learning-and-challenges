// Convert Celsius to Fahrenheit
export function convertCtoF(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
};

// Reverse a String
export function reverseString(str) {
    let letters = [];

    for (let index = 0; index < str.length; index++) {
        letters.unshift(str[index]);
    }

    return letters.toString().replace(/,/g, "");
};

// Factorialize a Number
export function factorialize(num) {
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result *= index;
    }

    return result;
};

// Find the Longest Word in a String
export function findLongestWordLength(str) {
    let longestWordLength = 0;
    let words = str.split(" ");

    for (let index = 0; index < words.length; index++) {
        if (words[index].length > longestWordLength) {
            longestWordLength = words[index].length;
        }
    }
    return longestWordLength;
};

// Return Largest Numbers in Arrays
export function largestOfFour(arr) {
    let largestNum = [];

    for (let index = 0; index < arr.length; index++) {
        for (let indexNested = 0; indexNested < arr[index].length; indexNested++) {
            if (largestNum.length <= index) {
                largestNum.push(arr[index][indexNested]);
            } else if (arr[index][indexNested] > largestNum[index]) {
                largestNum[index] = arr[index][indexNested]
            }
        };
    }

    return largestNum;
};

// Confirm the Ending
export function confirmEnding(str, target) {
    //use substr, using target length to determine start point and length. If it matches target return true
    return str.substr((str.length - target.length), (target.length)) == target;
};

// Repeat a String Repeat a String
export function repeatStringNumTimes(str, num) {
    let result = "";
    for (let index = 0; index < num; index++) {
        result += str;
    }
    return result;
};

// Truncate a String
export function truncateString(str, num) {
    return str.length <= num ? str : `${str.substr(0, num)}...`;
};

// Finders Keepers
export function findElement(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            return arr[index];
        }
    }
    return undefined;
};

// Boo who
export function booWho(bool) {
    return bool === true || bool === false;
    // return typeof bool === "boolean"; // alternative test using type of
};

// Title Case a Sentence
export function titleCase(str) {
    let output = "";
    let strArray = str.toLowerCase().split(" ");
    for (let index = 0; index < strArray.length; index++) {
        output += `${strArray[index].substr(0, 1).toUpperCase()}${strArray[index].substr(1)}`;
        if (index != strArray.length - 1) {
            output += " ";
        }
    }
    return output;
};

// Slice and Splice
export function frankenSplice(arr1, arr2, n) {
    let output = arr1.slice();
    for (let index = 0; index < arr2.length; index++) {
        if (index == 0) {
            output.unshift(arr2[index]);
        } else if (index < n) {
            output.splice(index, 0, arr2[index]);
        } else {
            output.push(arr2[index]);
        }
    }

    return output;
};

// Falsy Bouncer
export function bouncer(arr) {
    return arr.filter(Boolean); //filters out falsy
};

// Where do I Belong
export function getIndexToIns(arr, num) {
    arr.sort(function (a, b) { return a - b }); // array.sort sorts a-z as string, for numbers need to add in this compare function
    for (let index = 0; index < arr.length; index++) {
        if (num <= arr[index]) {
            return index;
        } else if (index == arr.length - 1 && num >= arr[index]) {
            return index + 1;
        };
    }
    return 0;
};


// Mutations
export function mutation(arr) {
    for (let index = 0; index < arr[1].length; index++) {
        if (arr[0].toLowerCase().indexOf(arr[1][index].toLowerCase()) > -1) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// Chunky Monkey
export function chunkArrayInGroups(arr, size) {
    let output = [];
    let tmpArray = [];
    let modifiedIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if (modifiedIndex < size) {
            tmpArray.push(arr[index]);
            modifiedIndex++;
        } else if (modifiedIndex == size) {
            output.push(tmpArray.slice(0, modifiedIndex));
            tmpArray.length = 0; //empty array
            tmpArray.push(arr[index]);
            modifiedIndex = 1;
        } else {
            return "error";
        }
    }

    if (tmpArray.length > 0) {
        output.push(tmpArray.slice(0, modifiedIndex));
    }

    return output;
};