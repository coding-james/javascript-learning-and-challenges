import { assert } from "chai";
import { formatDuration } from "../../../src/components/challenges/Codewars/4 kyu/human_readable.js";

// CODEWARS: Human readable duration format
describe("Human readable duration format", () => {
    const tests = [
        { arg: 1, expected: "1 second" },
        { arg: 62, expected: "1 minute and 2 seconds" },
        { arg: 120, expected: "2 minutes" },
        { arg: 3600, expected: "1 hour" },
        { arg: 3662, expected: "1 hour, 1 minute and 2 seconds" },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(formatDuration(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(formatDuration(arg), expected);
        });
    });
});