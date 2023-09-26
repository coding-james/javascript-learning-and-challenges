const { expect } = require("chai");
const isPangram = require("../../../Codewars/6 kyu/detect_pangram");

// CODEWARS: Detect Pangram
describe("Detect Pangram", () => {
    const tests = [
        { arg: "The quick brown fox jumps over the lazy dog.", expected: true },
        { arg: "This is not a pangram.", expected: false },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            expect(isPangram(arg)).to.equal(expected);
        });
    });
});