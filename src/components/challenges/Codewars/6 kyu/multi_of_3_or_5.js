// CODEWARS - Multiples of 3 or 5
export default function solution(number) {
    let result = 0;
    for (let num = (number - 1); num > 0; num--) {
        if (num % 3 == 0 || num % 5 == 0) {
            result += num;
        }
    }
    return result;
}