const { expect, assert } = require("chai");
const maxSequence = require("../../../Codewars/5 kyu/maximum_sum_subarray");

// CODEWARS: Maximum subarray sum
describe("Maximum subarray sum", () => {
    const tests = [
        { arg: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
        { arg: [-2, -3, -1, -5], expected: 0 },
        { arg: [], expected: 0 },
        { arg: [-1, 4, 3, 2, 1, -1], expected: 10 },
        { arg: [-1, 4, 3, 2, 1, -12, 12], expected: 12 },
        { arg: [-1, 4, 3, 2, 1, -1, 12], expected: 21 },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = maxSequence(arg);

        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});