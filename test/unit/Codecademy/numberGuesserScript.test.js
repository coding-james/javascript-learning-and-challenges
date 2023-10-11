import { assert, expect } from "chai";
import { generateTarget, compareGuesses } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/numberGuesserScript.js";

describe("generateTarget() returns Random Number between 0 and 9", () => {
    const results = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let resultCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let resultCountTotal = 0;
    let resultCountMax = 0;
    let countZero = 0;

    // Run 10 times and check a Number is returned
    for (let index = 0; index < 10; index++) {
        const result = generateTarget();

        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(result);
        });
    };

    // Run 10 times and check a number between 0 - 9 is returned
    for (let index = 0; index < 10; index++) {
        const result = generateTarget();

        it(`it should return a number between 0 - 9, num = ${result}`, () => {
            expect(result).to.be.greaterThanOrEqual(0).and.to.be.lessThanOrEqual(9);
        });
    };

    // Run 1000 times, check if more than 1 number returned 50% of time and count numbers returned.
    for (let index = 0; index < 1000; index++) {
        const result = generateTarget();

        if (result >= 0 && result <= 9) {
            resultCount[results.indexOf(result)] += 1;
        }
    };

    for (let index = 0; index < resultCount.length; index++) {
        resultCountTotal += resultCount[index];

        if (resultCount[index] > resultCountMax) {
            resultCountMax = resultCount[index];
        }

        if (resultCount[index] == 0) {
            countZero += 1;
        }
    };

    it(`Running 1000 times should return a number between 0 - 9 each time - count: ${resultCountTotal}`, () => {
        expect(resultCountTotal).to.equal(1000);
    });

    it(`Running 1000 times should not return a number more than 500 times - max: ${resultCountMax}`, () => {
        expect(resultCountMax).to.not.greaterThan(500);
    });

    it("Running 1000 times should not return a number 0 times", () => {
        expect(resultCountMax).to.not.equal(0);
    });

});

describe("Determine the Winner: compareGuesses()", () => {
    const tests = [
        { userGuess: 10, computerGuess: 0, target: 10, expected: true },
        { userGuess: 0, computerGuess: 10, target: 10, expected: false },
        { userGuess: 10, computerGuess: 10, target: 10, expected: true },
        { userGuess: 9, computerGuess: 1, target: 5, expected: true },
        { userGuess: 7, computerGuess: 1, target: 5, expected: true },
        { userGuess: 1, computerGuess: 7, target: 5, expected: false },
    ];

    tests.forEach(({ userGuess, computerGuess, target }) => {
        it(`DATATYPE: It should return a Boolean`, () => {
            assert.isBoolean(compareGuesses(userGuess, computerGuess, target));
        })
    });

    tests.forEach(({ userGuess, computerGuess, target, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(compareGuesses(userGuess, computerGuess, target), expected);
        });
    });
});

