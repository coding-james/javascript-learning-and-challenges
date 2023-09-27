// CODEWARS: Binary to Text (ASCII) Conversion
export default function binaryToString(binary) {
    let binaryArr = [];
    let result = "";
    let sum = 0;
    let power = 0;

    //split into groups of 8
    for (let index = 0; index < binary.length; index += 8) {
        binaryArr.push(binary.substr(index, 8));
    }

    for (let index = 0; index < binaryArr.length; index++) {
        let tmpArr = binaryArr[index].split('');

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