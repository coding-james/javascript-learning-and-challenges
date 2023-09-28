import { assert } from "chai";
import palindrome from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/palindrome-checker.js";

describe("Is it a palindrome?", () => {
    it("DATATYPE: It should return a Boolean", () => {
        assert.isBoolean(palindrome("eye"));
    });
    
    const tests = [
        { arg: "eye", expected: true },
        { arg: "Eye", expected: true },
        { arg: "tiger", expected: false },
        { arg: "_eye", expected: true },
        { arg: "race car", expected: true },
        { arg: "not a palindrome", expected: false },
        { arg: "A man, a plan, a canal. Panama", expected: true },
        { arg: "never odd or even", expected: true },
        { arg: "nope", expected: false },
        { arg: "almostomla", expected: false },
        { arg: "My age is 0, 0 si ega ym.", expected: true },
        { arg: "1 eye for of 1 eye.", expected: false },
        { arg: "0_0 (: /-\ :) 0-0", expected: true },

    ];

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(palindrome(arg), expected);
        });
    });
});