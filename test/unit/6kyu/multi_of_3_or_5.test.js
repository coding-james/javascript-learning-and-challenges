const { assert } = require("chai");
const solution = require("../../../Codewars/6 kyu/multi_of_3_or_5");

// CODEWARS: Multiples of 3 or 5
describe("Multiples of 3 or 5", () => {
    const tests = [
        { arg: 10, expected: 23 },
        { arg: 3, expected: 0 },
        { arg: 0, expected: 0 },
        { arg: -3, expected: 0 },
        { arg: 9, expected: 14 },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = solution(arg);

        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(result);
        });

        it(`should return ${expected}`, () => {
            assert.equal(result, expected);
        });
    });
});