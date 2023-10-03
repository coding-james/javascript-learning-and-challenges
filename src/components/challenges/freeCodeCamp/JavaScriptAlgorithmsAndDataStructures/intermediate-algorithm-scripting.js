// Sum All Numbers in a Range
export function sumAll(arr) {
    let result = 0;

    // sort the arr
    let sortedArray = [].concat(arr).sort(function (a, b) { // concat original array onto a blank array
        return a === b ? 0 : a < b ? -1 : 1;;
    });

    // for loop start at first number, ending with second number
    for (let number = sortedArray[0]; number <= sortedArray[1]; number++) {
        result += number;
    }

    return result;
}

// Diff Two Arrays - Compare two arrays, return unique elements
export function diffArray(arr1, arr2) {
    function arrayCompare(array1, array2) {
        let compareArr = [];
        for (let index = 0; index < array1.length; index++) {
            if (array2.indexOf(array1[index]) < 0) {
                compareArr.push(array1[index]);
            }
        }
        return compareArr;
    };

    let arr1Unique = arrayCompare(arr1, arr2);
    let arr2Unique = arrayCompare(arr2, arr1);
    let newArr = arr1Unique.concat(arr2Unique);

    return newArr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;;
    });

    // more succient would be:
    // function diffArray(arr1, arr2) {
    //     return arr1
    //       .concat(arr2)
    //       .filter(item => !arr1.includes(item) || !arr2.includes(item));
    // };
};

// Seek and Destroy
export function destroyer(arr) {
    for (let index = 1; index < arguments.length; index++) {
        while (arr.indexOf(arguments[index]) >= 0) {
            arr.splice(arr.indexOf(arguments[index]), 1);
        }
    }
    return arr;
};

// Wherefore art thou - filter an array of objects by second object values
export function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter(obj => {
        for (let index = 0; index < sourceKeys.length; index++) {
            if (obj[sourceKeys[index]] !== source[sourceKeys[index]]) {
                return false;
            }
        }
        return true;
    });
};


// Spinal Tap Case
export function spinalCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1 $2") // replace Uppercase following lowercase with lowercase space Uppercase
        .split(/[^a-z]/i) // split by non alphabetic chars
        .join("-") //join with -
        .toLowerCase(); //change all to lowercase
};

// Pig Latin
export function translatePigLatin(str) {
    let vowels = /[aeiou]/i;
    let vowelsArray = ["a", "e", "i", "o", "u"];

    if (vowels.test(str[0])) { // if first letter is vowel, add WAY to end
        return str + "way";
    } else if (!vowels.test(str)) { // if no vowels, add AY to the end of the word
        return str + "ay";
    } else { // if word begins with consonant, take the first consonant or consonant cluster, move it to the end of the word, and add AY to it
        for (let index = 0; index < str.length; index++) {
            if (vowelsArray.indexOf(str[index]) != -1) {
                return str.substr(index) + str.substr(0, index) + "ay"
            }
        }
    };
};

// Search and Replace - replace word and preserve case of the first charatcter of word
export function myReplace(str, before, after) {
    let afterFormatted = before[0] == before[0].toUpperCase() ? after[0].toUpperCase() + after.substr(1).toLowerCase() : after[0].toLowerCase() + after.substr(1).toLowerCase();
    return str.replace(before, afterFormatted);
};

// DNA Pairing
export function pairElement(str) {
    let DNA = [];
    for (let index = 0; index < str.length; index++) {

        let tempArr = []

        switch (str[index]) {
            case "A":
                tempArr.push("A", "T");
                break;
            case "T":
                tempArr.push("T", "A");
                break;
            case "C":
                tempArr.push("C", "G");
                break;
            case "G":
                tempArr.push("G", "C");
                break;
            default:
                break;
        }

        DNA.push(tempArr);
    }
    return DNA;
};

// Missing letters
export function fearNotLetter(str) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let current = letters.indexOf(str[0]);

    for (let index = 0; index < str.length; index++) {
        if (letters[current] != str[index]) {
            return letters[current];
        } else {
            current++;
        }
    }

    return undefined;
};

// Sorted Union
export function uniteUnique(arr) {
    let results = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (!results.includes(arguments[i][j])) {
                results.push(arguments[i][j]);
            } else {
                continue;
            }
        };
    }
    return results;
};

// Convert HTML Entities
export function convertHTML(str) {

    let htmlEntities = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
};

// Sum All Odd Fibonacci Numbers
export function sumFibs(num) {
    let total = 0;
    let previous1 = 0;
    let previous2 = 0;

    for (let current = 1; current <= num; current = previous1 + previous2) {

        if (current % 2 != 0) {
            total += current;
        }
        previous1 = previous2;
        previous2 = current;
    }
    return total;
};

// Sum All Primes
export function sumPrimes(num) {
    // Prime Check 
    function isPrime(n) {
        const sqrt = Math.sqrt(n);
        for (let i = 2; i <= sqrt; i++) {
            if (n % i === 0)
                return false;
        }
        return true;
    };

    let total = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }

    return total;
};

// Smallest Common Multiple
export function smallestCommons(arr) {
    let result = 0;
    let num = Math.max(arr[0], arr[1]);
    let outcomes = [];

    while (result == 0) {
        for (let numInRange = Math.min(arr[0], arr[1]); numInRange <= Math.max(arr[0], arr[1]); numInRange++) {
            if (num % numInRange != 0) {
                break;
            } else {
                outcomes.push(num);
            };
        }

        if (outcomes.length == (Math.max(arr[0], arr[1]) - Math.min(arr[0], arr[1])) + 1) {
            result = num;
        } else {
            num++;
            outcomes.length = 0; //empty array
        }
    }

    return result;
};

// Drop it
export function dropElements(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            return arr.slice(index);
        };
    }

    return [];
};

// Steamroller - flatten nested arrays
export function steamrollArray(arr) {
    let resultArr = [];

    for (let index = 0; index < arr.length; index++) {

        if (arr[index].constructor == Array) {
            resultArr.push(...steamrollArray(arr[index]));
        } else {
            resultArr.push(arr[index]);
        }
    }
    return resultArr;
};

// Binary Agents - https://www.wikihow.com/Read-Binary
export function binaryAgent(str) {
    let binaryElements = str.split(" ");
    let result = "";
    let sum = 0;
    let power = 0;

    for (let index = 0; index < binaryElements.length; index++) {
        let tmpArr = binaryElements[index].split('');

        for (let j = tmpArr.length - 1; j >= 0; j--) {
            // iterate backwards, with each digit x 2 to power of
            // add to sum
            sum += parseInt(tmpArr[j]) * Math.pow(2, power);
            power++;
        }

        result += String.fromCharCode(sum); // use sum to find character

        // reset sum and power
        sum = 0;
        power = 0;
    }

    return result;
};

// Everything Be True
export function truthCheck(collection, pre) {
    return collection.every(item => item[pre]);
};

// Arguments Optional
export function addTogether() {
    const [arg1, arg2] = arguments;

    if (arguments.length == 2 && typeof arg1 == "number" && typeof arg2 == "number") {
        return arg1 + arg2;
    } else if (arguments.length == 1 && typeof arg1 == "number") {
        return (arg2) => addTogether(arg1, arg2);
    } else {
        return undefined;
    }
};

// Make a person
export const Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (first) {
        fullName = fullName.replace(fullName.split(" ")[0], first);
    };

    this.setLastName = function (last) {
        fullName = fullName.replace(fullName.split(" ")[1], last);
    };

    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
    };
};

// Map the Debris
export function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.map(p => {
        return {
            name: p.name,
            orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((p.avgAlt + earthRadius), 3) / GM))
        }
    })
};