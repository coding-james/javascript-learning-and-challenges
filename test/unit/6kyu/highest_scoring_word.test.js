import { assert } from "chai";
import high from "../../../src/components/challenges/Codewars/6 kyu/highest_scoring_word.js";

// CODEWARS: Highest Scoring Word
describe("Highest Scoring Word", () => {

    const tests = [
        { input: 'man i need a taxi up to ubud', expected: 'taxi' },
        { input: 'what time are we climbing up the volcano', expected: 'volcano' },
        { input: 'take me to semynak', expected: 'semynak' },
        { input: 'aa b', expected: 'aa' },
        { input: 'b aa', expected: 'b' },
        { input: 'bb d', expected: 'bb' },
        { input: 'd bb', expected: 'd' },
        { input: 'aaa b', expected: 'aaa' }
    ];

    tests.forEach(({ input, expected }) => {
        const result = high(input);

        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            assert.equal(result, expected);
        });
    });
});