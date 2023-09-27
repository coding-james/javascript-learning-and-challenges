const { assert } = require("chai");
const { VigenèreCipher } = require("../../../Codewars/4 kyu/vigenere_cipher_helper");

// CODEWARS: Vigenère Cipher Helper
describe("Vigenère Cipher Helper: Encode", () => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const key = "password"
    const c = new VigenèreCipher(key, abc);

    const tests = [
        { arg: "codewars", expected: "rovwsoiv" },
        { arg: "waffles", expected: "laxxhsj" },
        { arg: "CODEWARS", expected: "CODEWARS" },
        { arg: "codewarswaffles", expected: "rovwsoivlaxxhsj" },
        { arg: "it's a shift cipher!", expected: "xt\'k o vwixl qzswej!" },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an String", () => {
            assert.isString(c.encode(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(c.encode(arg), expected);
        });
    });
});

describe("Vigenère Cipher Helper: Decode", () => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const key = "password"
    const c = new VigenèreCipher(key, abc);

    const tests = [
        { arg: "rovwsoiv", expected: "codewars" },
        { arg: "laxxhsj", expected: "waffles" },
        { arg: "CODEWARS", expected: "CODEWARS" },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an String", () => {
            assert.isString(c.decode(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(c.decode(arg), expected);
        });
    });
});

describe("Vigenère Cipher Helper: Encode pizza", () => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const key = "pizza"
    const c = new VigenèreCipher(key, abc);

    const tests = [
        { arg: "asodavwt", expected: "pancakes" },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an String", () => {
            assert.isString(c.encode(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(c.encode(arg), expected);
        });
    });
});

describe("Vigenère Cipher Helper: Encode katakana alphabet", () => {
    const abc = "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー";
    const key = "カタカナ"
    const c = new VigenèreCipher(key, abc);

    const tests = [
        { arg: "カタカナ", expected: "タモタワ" },
        { arg: "javascript", expected: "javascript" },
        { arg: "ドモアリガトゴザイマス", expected: "ドオカセガヨゴザキアニ" },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an String", () => {
            assert.isString(c.encode(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(c.encode(arg), expected);
        });
    });
});

describe("Vigenère Cipher Helper: Decode katakana alphabet", () => {
    const abc = "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー";
    const key = "カタカナ"
    const c = new VigenèreCipher(key, abc);

    const tests = [
        { arg: "タモタワ", expected: "カタカナ" },
        { arg: "javascript", expected: "javascript" },
        { arg: "ドオカセガヨゴザキアニ", expected: "ドモアリガトゴザイマス" },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an String", () => {
            assert.isString(c.decode(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(c.decode(arg), expected);
        });
    });
});