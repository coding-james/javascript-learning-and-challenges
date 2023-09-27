import { assert } from "chai";
import { permutations } from "../../../src/components/challenges/Codewars/4 kyu/so_many_permutations.js";

// CODEWARS: So Many Permutations!
describe("So Many Permutations!", () => {
    const tests = [
        { arg: 'a', expected: ['a'] },
        { arg: 'ab', expected: ['ab', 'ba'] },
        { arg: 'aabb', expected: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] },
        { arg: 'abc', expected: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'] },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(permutations(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(permutations(arg), expected.sort());
        });
    });
});