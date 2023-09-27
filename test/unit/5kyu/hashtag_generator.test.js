const { expect, assert } = require("chai");
const generateHashtag = require("../../../Codewars/5 kyu/hashtag_generator");

// CODEWARS: The Hashtag Generator
describe("The Hashtag Generator", () => {
    const tests_valid = [
        { arg: " Hello there thanks for trying my Kata", expected: "#HelloThereThanksForTryingMyKata" },
        { arg: "    Hello     World   ", expected: "#HelloWorld" },
        { arg: "Do We have A Hashtag", expected: "#DoWeHaveAHashtag" },
        { arg: "Codewars", expected: "#Codewars" },
        { arg: "Codewars is nice", expected: "#CodewarsIsNice" },
        { arg: "Codewars Is Nice", expected: "#CodewarsIsNice" },
        { arg: "code" + " ".repeat(140) + "wars", expected: "#CodeWars" },
        { arg: "a".repeat(139), expected: "#A" + "a".repeat(138) },
    ];

    const tests_invalid = [
        { arg: "", expected: false },
        { arg: " ".repeat(200), expected: false },
        { arg: "a".repeat(140), expected: false },
        { arg: "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat", expected: false },
    ];

    tests_valid.forEach(({ arg, expected }) => {
        const result = generateHashtag(arg);

        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            expect(generateHashtag(arg)).to.equal(expected);
        });
    });

    tests_invalid.forEach(({ arg, expected }) => {
        const result = generateHashtag(arg);

        it(`DATATYPE: It should return a Boolean`, () => {
            assert.isBoolean(result);
        });

        it(`should return ${expected}`, () => {
            expect(generateHashtag(arg)).to.equal(expected);
        });
    });
});