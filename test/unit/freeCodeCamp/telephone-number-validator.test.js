import { assert } from "chai";
import telephoneCheck from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/telephone-number-validator.js";

describe("Telephone Number Validator", () => {
    it("DATATYPE: should return a Bool", () => {
        assert.isBoolean(telephoneCheck("1 555-555-5555"));
    });
    
    const tests = [
        { arg: "1 555-555-5555", expected: true },
        { arg: "1 (555) 555-5555", expected: true },
        { arg: "5555555555", expected: true },
        { arg: "555-555-5555", expected: true },
        { arg: "(555)555-5555", expected: true },
        { arg: "1(555)555-5555", expected: true },
        { arg: "555-5555", expected: false },
        { arg: "5555555", expected: false },
        { arg: "1 555)555-5555", expected: false }, // needs a opening (
        { arg: "1 555 555 5555", expected: true },
        { arg: "1(555)555-5555", expected: true },
        { arg: "1 456 789 4444", expected: true },
        { arg: "123**&!!asdf#", expected: false },
        { arg: "55555555", expected: false },
        { arg: "(6054756961)", expected: false }, // whole number in ()
        { arg: "2 (757) 622-7382", expected: false },
        { arg: "0 (757) 622-7382", expected: false },
        { arg: "-1 (757) 622-7382", expected: false }, // starts with -
        { arg: "2 757 622-7382", expected: false },
        { arg: "10 (757) 622-7382", expected: false },
        { arg: "27576227382", expected: false },
        { arg: "(275)76227382", expected: false },
        { arg: "2(757)6227382", expected: false },
        { arg: "2(757)622-7382", expected: false },
        { arg: "555)-555-5555", expected: false }, // no opening (
        { arg: "(555-555-5555", expected: false }, // no closing )
        { arg: "(555)5(55?)-5555", expected: false }, // contains a question mark
        { arg: "55 55-55-555-5", expected: false }, // should be 3, 3, 4 or 1,3,3,4
        { arg: "11 555-555-5555", expected: false }
    ];

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(telephoneCheck(arg), expected);
        });
    });
});