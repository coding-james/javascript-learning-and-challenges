import { assert } from "chai";
import { reverseArray, greetAliens, convertToBaby, declineEverything, acceptEverything, squareNums } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/intermediateChallenges.js";

describe("Reverse Array", () => {
    const tests = [
        { input: ["A", "B", "C"], expected: ["C", "B", "A"] },
        { input: ["C", "B", "A"], expected: ["A", "B", "C"] },
        { input: [1, 2, 3, 4, 5, 6], expected: [6, 5, 4, 3, 2, 1] },
        { input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { input: [true, false, false], expected: [false, false, true] },
        { input: ['sense.', 'make', 'all', 'will', 'This'], expected: ['This', 'will', 'all', 'make', 'sense.'] },
        { input: [], expected: [] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(reverseArray(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(reverseArray(input), expected);
        });
    });
});

describe("Greet Aliens", () => {
    const tests = [
        { input: ["Blorgous", "Glamyx", "Wegord", "SpaceKing"], expected: ["Oh powerful Blorgous, we humans offer our unconditional surrender!", "Oh powerful Glamyx, we humans offer our unconditional surrender!", "Oh powerful Wegord, we humans offer our unconditional surrender!", "Oh powerful SpaceKing, we humans offer our unconditional surrender!"] },
        { input: ["overlords"], expected: ["Oh powerful overlords, we humans offer our unconditional surrender!"] },
        { input: [1, 2], expected: ["Oh powerful 1, we humans offer our unconditional surrender!", "Oh powerful 2, we humans offer our unconditional surrender!"] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(greetAliens(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(greetAliens(input), expected);
        });
    });
});

describe("Convert to baby", () => {
    const tests = [
        { input: ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'], expected: ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'] },
        { input: ["shark"], expected: ["baby shark"] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(convertToBaby(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(convertToBaby(input), expected);
        });
    });
});

describe("Decline Everything", () => {
    const tests = [
        { input: ["broccoli", "spinach", "cauliflower", "broccoflower"], expected: ["No broccoli please. I will have pizza with extra cheese.", "No spinach please. I will have pizza with extra cheese.", "No cauliflower please. I will have pizza with extra cheese.", "No broccoflower please. I will have pizza with extra cheese."] },
        { input: ["pepperoni", "pineapple"], expected: ["No pepperoni please. I will have pizza with extra cheese.", "No pineapple please. I will have pizza with extra cheese."] },
        { input: ["hammer", "tyre"], expected: ["No hammer please. I will have pizza with extra cheese.", "No tyre please. I will have pizza with extra cheese."] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(declineEverything(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(declineEverything(input), expected);
        });
    });
});

describe("Accept Everything", () => {
    const tests = [
        { input: ["broccoli", "spinach", "cauliflower", "broccoflower"], expected: ["Ok, I guess I will eat some broccoli.", "Ok, I guess I will eat some spinach.", "Ok, I guess I will eat some cauliflower.", "Ok, I guess I will eat some broccoflower."] },
        { input: ["pepperoni", "pineapple"], expected: ["Ok, I guess I will eat some pepperoni.", "Ok, I guess I will eat some pineapple."] },
        { input: ["hammer", "tyre"], expected: ["Ok, I guess I will eat some hammer.", "Ok, I guess I will eat some tyre."] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(acceptEverything(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(acceptEverything(input), expected);
        });
    });
});

describe("Square each number", () => {
    const tests = [
        { input: [2, 7, 9, 171, 52, 33, 14], expected: [4, 49, 81, 29241, 2704, 1089, 196] },
        { input: [], expected: [] },
        { input: [1, 2, 3], expected: [1, 4, 9] },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return an Array`, () => {
            assert.isArray(squareNums(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(squareNums(input), expected);
        });
    });
});