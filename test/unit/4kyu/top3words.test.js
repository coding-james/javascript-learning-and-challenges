const { assert } = require("chai");
const topThreeWords = require("../../../Codewars/4 kyu/top3words");

// CODEWARS: Most frequently used words in a text
describe("Most frequently used words in a text", () => {
    const tests = [
        { arg: "a a a  b  c c  d d d d  e e e e e", expected: ['e', 'd', 'a'] },
        { arg: "a a c b b", expected: ['a', 'b', 'c'] },
        { arg: "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e", expected: ['e', 'ddd', 'aa'] },
        { arg: "  //wont won't won't ", expected: ["won't", "wont"] },
        { arg: "  , e   .. ", expected: ["e"] },
        { arg: "  ...  ", expected: [] },
        { arg: "  '  ", expected: [] },
        {
            arg: `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most
        nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`, expected: ['a', 'of', 'on']
        },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(topThreeWords(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(topThreeWords(arg), expected);
        });
    });
});