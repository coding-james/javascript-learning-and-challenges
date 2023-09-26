const { assert } = require("chai");
const binaryToString = require("../../../Codewars/6 kyu/binary_to_text");

// CODEWARS: Binary to Text (ASCII) Conversion
describe("Binary to Text (ASCII) Conversion", () => {

    it("DATATYPE: It should return a String", () => {
        assert.isString(binaryToString("01100001"));
    });

    const tests = [
        { input: "01100001", expected: "a" },
        { input: "01001011010101000100100001011000010000100101100101000101", expected: "KTHXBYE" },
        { input: "00110001001100000011000100110001", expected: "1011" },
        { input: "001111000011101000101001", expected: "<:)" },
    ];

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(binaryToString(input), expected);
        });
    });
});