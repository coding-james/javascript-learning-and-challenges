import { assert } from "chai";
import toJadenCase from "../../../src/components/challenges/Codewars/7 kyu/jaden_casing_strings.js";

// CODEWARS: Jaden Casing Strings
describe("Jaden Casing Strings", () => {
    const tests = [
        { arg: "How can mirrors be real if our eyes aren't real", expected: "How Can Mirrors Be Real If Our Eyes Aren't Real" },
        { arg: "most Trees Are Blue", expected: "Most Trees Are Blue"}
    ];

    tests.forEach(({ arg, expected }) => {
        const result = arg.toJadenCase();

        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            assert.equal(result, expected);
        });
    });
});