"use strict";

function VigenèreCipher(key, abc) {

    this.encode = function (str) {
        let abcArray = createArray(abc);
        let keyArray = createKeyArray(key, str.length);
        let tmpArray = createArray(str);

        for (let index = 0; index < tmpArray.length; index++) {
            if (abc.includes(tmpArray[index])) {
                let indexOfDecode = abcArray.indexOf(tmpArray[index]) + abcArray.indexOf(keyArray[index]);
                tmpArray[index] = indexOfDecode >= abcArray.length ? abcArray[indexOfDecode - abcArray.length] : abcArray[indexOfDecode];
            } else {
                continue;
            }
        }
        // console.log(`key: ${key}, abc: ${abc}, str: ${str}, encode: ${tmpArray.toString().replace(/,/g, "")}`);
        return tmpArray.toString().replace(/,/g, "");
    };

    this.decode = function (str) {
        let abcArray = createArray(abc);
        let keyArray = createKeyArray(key, str.length);
        let tmpArray = createArray(str);

        for (let index = 0; index < tmpArray.length; index++) {
            if (abc.includes(tmpArray[index])) {
                let indexOfDecode = abcArray.indexOf(tmpArray[index]) - abcArray.indexOf(keyArray[index]);
                tmpArray[index] = indexOfDecode < 0 ? abcArray[abcArray.length - (0 - indexOfDecode)] : abcArray[indexOfDecode];
            } else {
                continue;
            }
        }
        // console.log(`key: ${key}, abc: ${abc}, str: ${str}, decode: ${tmpArray.toString().replace(/,/g, "")}`);
        return tmpArray.toString().replace(/,/g, "");
    };
}

function createArray(input) {
    let outputArray = [];
    for (let index = 0; index < input.length; index++) {
        outputArray.push(input.substr(index, 1));
    }

    return outputArray;
}

function createKeyArray(key, requiredLength) {
    let keyArray = [];
    for (let index = 0; index < requiredLength; index++) {

        if (index < key.length) {
            keyArray.push(key.substr(index, 1));
        } else {
            keyArray.push(key.substr(index - (key.length * Math.floor((index + 1) / key.length)), 1));
        }
    }

    return keyArray;
}

module.exports = { VigenèreCipher };