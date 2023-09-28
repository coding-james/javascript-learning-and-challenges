import { expect, assert } from "chai";
import persistence from "../../../src/components/challenges/Codewars/5 kyu/persistent_bugger.js";

// CODEWARS: Persistent Bugger
describe("Persistent Bugger", () => {
    const tests = [
        { arg: 39, expected: 3 },
        { arg: 4, expected: 0 },
        { arg: 25, expected: 2 },
        { arg: 999, expected: 4 },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = persistence(arg);

        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});