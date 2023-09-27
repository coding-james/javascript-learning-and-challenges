const { assert } = require("chai");
const nextSmaller = require("../../../Codewars/4 kyu/next_smaller_number");

// CODEWARS: Next smaller number with the same digits
describe("Next smaller number with the same digits", () => {
    const tests = [
        { arg: 21, expected: 12 },
        { arg: 907, expected: 790 },
        { arg: 531, expected: 513 },
        { arg: 135, expected: -1 },
        { arg: 2071, expected: 2017 },
        { arg: 1027, expected: -1 },
        { arg: 414, expected: 144 },

        { arg: 123456798, expected: 123456789 },
        { arg: 123456789, expected: -1 },
        { arg: 1234567908, expected: 1234567890 },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(nextSmaller(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(nextSmaller(arg), expected);
        });
    });
});