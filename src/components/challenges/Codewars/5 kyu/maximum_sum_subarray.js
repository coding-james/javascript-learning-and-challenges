// CODEWARS: Maximum subarray sum
export default function maxSequence(arr) {
    let subLength = arr.length; //9
    let subLoops = 1;
    let start = 0;
    let result = 0;
    let resultTmp = 0;

    while (subLength > 0) {
        for (let loop = 1; loop <= subLoops; loop++) {

            for (let i = start; i < (subLength + start); i++) {
                resultTmp += arr[i];
            }

            // check result
            if (resultTmp > result) {
                result = resultTmp;
                resultTmp = 0;
            } else {
                resultTmp = 0;
            }
            start++;
        }
        subLoops++;
        subLength--;
        start = 0;
    }
    return result <= 0 ? 0 : result;
}