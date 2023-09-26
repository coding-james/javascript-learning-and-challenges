const { expect, assert } = require("chai");
const highAndLow = require("../../../Codewars/7 kyu/highest_and_lowest");

// CODEWARS: Highest and Lowest
describe("Highest and Lowest Tests", () => {
    const tests = [
        { arg: "1 2 3 4 5", expected: "5 1" },
        { arg: "1 2 -3 4 5", expected: "5 -3" },
        { arg: "1 9 3 4 -5", expected: "9 -5" }
    ];

    tests.forEach(({ arg, expected }) => {
        const result = highAndLow(arg);

        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});