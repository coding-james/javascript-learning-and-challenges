const { assert } = require("chai");
const wave = require("../../../Codewars/6 kyu/mexican_wave");

// CODEWARS: Mexican Wave
describe("Mexican Wave", () => {
    const tests = [
        { arg: "hello", expected: ["Hello", "hEllo", "heLlo", "helLo", "hellO"] },
        { arg: "codewars", expected: ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"] },
        { arg: "", expected: [] },
        { arg: "two words", expected: ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"] },
        { arg: " gap ", expected: [" Gap ", " gAp ", " gaP "] },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = wave(arg);

        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(result);
        });

        it(`should return ${expected}`, () => {
            assert.deepEqual(result, expected);
        });
    });
});