const { assert } = require("chai");
const tenPinBowling = require("../../../Codewars/4 kyu/ten_pin_bowling");

// CODEWARS: Ten-Pin Bowling
describe("Ten-Pin Bowling", () => {
    const tests = [
        { arg: "11 11 11 11 11 11 11 11 11 11", expected: 20 },
        { arg: "X X X X X X X X X XXX", expected: 300 },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(tenPinBowling(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(tenPinBowling(arg), expected);
        });
    });
});

describe("Ten-Pin Bowling - SPARES", () => {
    const tests = [
        { arg: "02 11 X X 63 72 4/ 14 9/ XXX", expected: 133 },
        { arg: "X X 9/ 80 X X 90 8/ 7/ 44", expected: 171 },
        { arg: "00 5/ 4/ 53 33 22 4/ 5/ 45 XXX", expected: 115 },
        { arg: "5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 8/8", expected: 150 },
        { arg: "90 81 18 4/ 15 41 17 32 72 XX1", expected: 92 },
        { arg: "5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2", expected: 143 },
        { arg: "04 90 11 7/ 9/ 16 51 6/ 32 12", expected: 79 },
        { arg: "03 26 90 10 13 01 X 40 81 1/X", expected: 73 },
        { arg: "34 42 1/ 23 04 45 14 X 8/ 53", expected: 91 },
        { arg: "61 90 X 90 80 40 9/ 00 18 1/X", expected: 95 },
        { arg: "6/ 13 50 71 35 71 03 54 26 XXX", expected: 94 },
        { arg: "40 63 40 41 41 9/ X 54 6/ XXX", expected: 125 },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(tenPinBowling(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(tenPinBowling(arg), expected);
        });
    });
});