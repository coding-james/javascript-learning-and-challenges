const { assert } = require("chai");
const { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = require("../../../Codewars/5 kyu/calculating_with_functions");

// CODEWARS: Calculating with Functions
describe("Calculating with Functions", () => {
    const tests = [
        { arg: [seven, times, five], expected: 35 },
        { arg: [four, plus, nine], expected: 13 },
        { arg: [eight, minus, three], expected: 5 },
        { arg: [six, dividedBy, two], expected: 3 },
        { arg: [six, dividedBy, five], expected: 1 },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = arg[0](arg[1](arg[2]()));

        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(result);
        });

        it(`should return ${expected}`, () => {
            assert.equal(result, expected);
        });
    });
});