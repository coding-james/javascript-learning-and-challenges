export default function rot13(str) {
    let lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let decodeArray = [];

    for (let index = 0; index < str.length; index++) {
        decodeArray.push(str.substr(index, 1));
    }

    for (let index = 0; index < decodeArray.length; index++) {
        if (lettersUpper.includes(decodeArray[index])) {
            let indexOfDecode = lettersUpper.indexOf(decodeArray[index]) - 13;
            decodeArray[index] = indexOfDecode < 0 ? lettersUpper[26 - (0 - indexOfDecode)] : lettersUpper[indexOfDecode];
        } else {
            continue;
        }
    }

    return decodeArray.toString().replace(/,/g, "");
}