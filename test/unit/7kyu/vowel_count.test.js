import { expect, assert } from "chai";
import getCount from "../../../src/components/challenges/Codewars/7 kyu/vowel_count.js";

// CODEWARS: Vowel Count
describe("Vowel Count Tests", () => {
    const tests = [
        { arg: "abracadabra", expected: 5 },
        { arg: "bbb", expected: 0 },
        { arg: "AaA", expected: 3 }
    ];

    tests.forEach(({ arg, expected }) => {
        const result = getCount(arg);

        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});