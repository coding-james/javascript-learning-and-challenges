import { assert } from "chai";
import uniqueInOrder from "../../../src/components/challenges/Codewars/6 kyu/unique_in_order.js";

// CODEWARS: Unique in order
describe("Unique in order", () => {
    const tests = [
        { arg: 'AAAABBBCCDAABBB', expected: ['A', 'B', 'C', 'D', 'A', 'B'] },
        { arg: 'ABBCcAD', expected: ['A', 'B', 'C', 'c', 'A', 'D'] },
        { arg: [1, 2, 2, 3, 3], expected: [1, 2, 3] },
        { arg: [], expected: [] },
        { arg: [""], expected: [''] },
        { arg: [''], expected: [''] },
        { arg: ['A'], expected: ['A'] },
        { arg: ['a'], expected: ['a'] },
        { arg: [' '], expected: [''] },
        { arg: "A", expected: ['A'] },
        { arg: [''], expected: [''] },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = uniqueInOrder(arg);

        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(result);
        });

        it(`should return ${expected}`, () => {
            assert.deepEqual(result, expected);
        });
    });
});