import { assert } from "chai";
import { validateCred, findInvalidCards, idInvalidCardCompanies } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/creditCardChecker.js";

describe("Credit Card Checker", () => {
    // All valid credit card numbers
    const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
    const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
    const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
    const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

    // All invalid credit card numbers
    const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
    const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
    const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
    const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
    const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

    // Can be either valid or invalid
    const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
    const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
    const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
    const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
    const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

    // An array of all the arrays above
    const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


    describe("validateCred", () => {
        const tests = [
            // Valid
            { input: [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8], expected: "valid" },
            { input: valid1, expected: "valid" },
            { input: valid2, expected: "valid" },
            { input: valid3, expected: "valid" },
            { input: valid4, expected: "valid" },
            { input: valid5, expected: "valid" },

            // Invalid
            { input: invalid1, expected: "invalid" },
            { input: invalid2, expected: "invalid" },
            { input: invalid3, expected: "invalid" },
            { input: invalid4, expected: "invalid" },
            { input: invalid5, expected: "invalid" },

            // Mystery
            { input: mystery1, expected: "invalid" },
            { input: mystery2, expected: "valid" },
            { input: mystery3, expected: "invalid" },
            { input: mystery4, expected: "invalid" },
            { input: mystery5, expected: "valid" },
        ];

        tests.forEach(({ input }) => {
            it(`DATATYPE: It should return a String`, () => {
                assert.isString(validateCred(input));
            })
        });

        tests.forEach(({ input, expected }) => {
            it(`it should return ${expected}`, () => {
                assert.equal(validateCred(input), expected);
            });
        });
    });

    describe("validateCred", () => {
        const tests = [
            { input: batch, expected: [invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery3, mystery4] },
            { input: [invalid1, valid3, invalid2, valid1, valid5, invalid3, mystery1], expected: [invalid1, invalid2, invalid3, mystery1], }

        ];

        tests.forEach(({ input }) => {
            it(`DATATYPE: It should return an Array`, () => {
                assert.isArray(findInvalidCards(input));
            })
        });

        tests.forEach(({ input, expected }) => {
            it(`it should return ${expected}`, () => {
                assert.deepEqual(findInvalidCards(input), expected);
            });
        });
    });

    describe("idInvalidCardCompanies", () => {
        const tests = [
            { input: [invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery3, mystery4], expected: ["Visa", "Mastercard", "Amex (American Express)", "Discover"] },
            { input: [invalid1, mystery4], expected: ["Visa"] },
            { input: [invalid2, invalid5], expected: ["Mastercard"] },
            { input: [invalid3, mystery1], expected: ["Amex (American Express)"] },
            { input: [invalid4, mystery3], expected: ["Discover"] },
            { input: [[7, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5], mystery3], expected: ["Company not found", "Discover"] },
            { input: [invalid2, mystery1], expected: ["Mastercard", "Amex (American Express)"] },
        ];

        tests.forEach(({ input }) => {
            it(`DATATYPE: It should return an Array`, () => {
                assert.isArray(idInvalidCardCompanies(input));
            })
        });

        tests.forEach(({ input, expected }) => {
            it(`it should return ${expected}`, () => {
                assert.deepEqual(idInvalidCardCompanies(input), expected);
            });
        });
    });
});