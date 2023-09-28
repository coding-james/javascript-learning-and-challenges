import { assert } from "chai";
import rot13 from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/caesar-cipher.js";

describe("Decode the Cipher", () => {
    it("DATATYPE: It should return a String", () => {
        assert.isString(rot13("SERR PBQR PNZC"));
    });
    
    const tests = [
        { arg: "SERR PBQR PNZC", expected: "FREE CODE CAMP" },
        { arg: "SERR CVMMN!", expected: "FREE PIZZA!" },
        { arg: "SERR YBIR?", expected: "FREE LOVE?" },
        { arg: "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", expected: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG." },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(rot13(arg), expected);
        });
    });
});