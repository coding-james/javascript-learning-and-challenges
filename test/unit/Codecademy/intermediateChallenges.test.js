import { assert } from "chai";
import { reverseArray } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/intermediateChallenges.js";

describe("Reverse Array", () => {
    const tests = [
        { input: ["A", "B", "C"], expected: ["C", "B", "A"] },
        { input: ["C", "B", "A"], expected: ["A", "B", "C"] },
        { input: [1, 2, 3, 4, 5, 6], expected: [6, 5, 4, 3, 2, 1] },
        { input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { input: [true, false, false], expected: [false, false, true] },
        { input: ['sense.','make', 'all', 'will', 'This'], expected: ['This', 'will', 'all', 'make', 'sense.'] },
        { input: [], expected: [] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(reverseArray(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(reverseArray(input), expected);
        });
    });
});