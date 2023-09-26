const { expect, assert } = require("chai");
const alphabetPosition = require("../../../Codewars/6 kyu/replace_with_alphabet_position");

// CODEWARS: Replace with alphabet position
describe("Replace with alphabet position", () => {
    const tests = [
        { arg: "The sunset sets at twelve o' clock.", expected: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" },
        { arg: "The narwhal bacons at midnight.", expected: "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20" },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = alphabetPosition(arg);
        
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});