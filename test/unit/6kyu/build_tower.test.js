import { assert } from "chai";
import towerBuilder from "../../../src/components/challenges/Codewars/6 kyu/build_tower.js";

// CODEWARS: Build Tower
describe("Build Tower", () => {
    const tests = [
        { input: 1, expected: ["*"] },
        { input: 2, expected: [" * ", "***"] },
        { input: 3, expected: ["  *  ", " *** ", "*****"] }
    ];

    tests.forEach(({ input, expected }) => {
        const result = towerBuilder(input);

        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(result);
        });

        it(`should return ${expected}`, () => {
            assert.deepEqual(result, expected);
        });
    });
});