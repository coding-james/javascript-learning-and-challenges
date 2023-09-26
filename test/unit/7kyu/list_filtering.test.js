const { assert } = require("chai");
const filter_list = require("../../../Codewars/7 kyu/list_filtering");

// CODEWARS: List Filtering
describe("List Filtering Tests", () => {
    const tests = [
        { arg: [1, 2, 'a', 'b'], expected: [1, 2] },
        { arg: [1, 'a', 'b', 0, 15], expected: [1, 0, 15] },
        { arg: [1, 2, 'aasf', '1', '123', 123], expected: [1, 2, 123] }
    ];

    tests.forEach(({ arg, expected }) => {
        const result = filter_list(arg);

        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(result);
        });

        it(`should return ${expected}`, () => {
            assert.deepEqual(result, expected);
        });
    });
});