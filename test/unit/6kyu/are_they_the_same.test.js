import { expect, assert } from "chai";
import comp from "../../../src/components/challenges/Codewars/6 kyu/are_they_the_same.js";

// CODEWARS: Are they the "same"?
describe("Are they the same?", () => {
    const tests = [
        { arg: [[121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]], expected: true },
        { arg: [[121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]], expected: true },
        { arg: [[121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]], expected: false },
        { arg: [[121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]], expected: false },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = comp(arg[0], arg[1]);

        it(`DATATYPE: It should return a Boolean`, () => {
            assert.isBoolean(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});