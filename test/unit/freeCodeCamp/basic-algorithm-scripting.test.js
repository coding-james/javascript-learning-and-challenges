import { assert } from "chai";
import { convertCtoF, reverseString, factorialize, findLongestWordLength, largestOfFour, confirmEnding } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/basic-algorithm-scripting.js";
import { repeatStringNumTimes, truncateString, findElement, booWho, titleCase, frankenSplice, bouncer, getIndexToIns, mutation, chunkArrayInGroups } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/basic-algorithm-scripting.js";

// Convert Celsius to Fahrenheit
describe("Convert Celsius to Fahrenheit", () => {
    it("DATATYPE: It should return a Number", () => {
        assert.isNumber(convertCtoF(-30));
    });
    
    const tests = [
        { arg: -30, expected: -22 },
        { arg: -10, expected: 14 },
        { arg: 0, expected: 32 },
        { arg: 20, expected: 68 },
        { arg: 30, expected: 86 },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(convertCtoF(arg), expected);
        });
    });
});

// Reverse a String
describe("Reverse a String", () => {
    it("DATATYPE: It should return a String", () => {
        assert.isString(reverseString("hello"));
    });
    
    const tests = [
        { arg: "hello", expected: "olleh" },
        { arg: "Howdy", expected: "ydwoH" },
        { arg: "Greetings from Earth", expected: "htraE morf sgniteerG" },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(reverseString(arg), expected);
        });
    });
});

// Factorialize a Number
describe("Factorialize a Number", () => {
    it("DATATYPE: It should return a Number", () => {
        assert.isNumber(factorialize(5));
    });
    
    const tests = [
        { arg: 5, expected: 120 },
        { arg: 10, expected: 3628800 },
        { arg: 20, expected: 2432902008176640000 },
        { arg: 0, expected: 1 },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(factorialize(arg), expected);
        });
    });
});

// Find the Longest Word in a String
describe("Find the Longest Word Length in a String", () => {
    it("DATATYPE: It should return a Number", () => {
        assert.isNumber(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    });
    
    const tests = [
        { arg: "The quick brown fox jumped over the lazy dog", expected: 6 },
        { arg: "May the force be with you", expected: 5 },
        { arg: "Google do a barrel roll", expected: 6 },
        { arg: "What is the average airspeed velocity of an unladen swallow", expected: 8 },
        { arg: "What if we try a super-long word such as otorhinolaryngology", expected: 19 },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(findLongestWordLength(arg), expected);
        });
    });
});

// Return Largest Numbers in Arrays
describe("Return Largest Numbers in Arrays", () => {
    it("DATATYPE: It should return a Array", () => {
        assert.isArray(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
    });
    
    const tests = [
        { arg: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]], expected: [27, 5, 39, 1001] },
        { arg: [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]], expected: [9, 35, 97, 1000000] },
        { arg: [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]], expected: [25, 48, 21, -3] },
    ];

    tests.forEach(({ arg, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(largestOfFour(arg), expected);
        });
    });
});

// Confirm the Ending
describe("Confirm the Ending", () => {
    it("DATATYPE: It should return a Boolean", () => {
        assert.isBoolean(confirmEnding("Bastian", "n"));
    });
    
    const tests = [
        { inputStr: "Bastian", inputTarget: "n", expected: true },
        { inputStr: "Congratulation", inputTarget: "on", expected: true },
        { inputStr: "Connor", inputTarget: "n", expected: false },
        { inputStr: "Walking on water and developing software from a specification are easy if both are frozen", inputTarget: "specification", expected: false },
        { inputStr: "He has to give me a new name", inputTarget: "name", expected: true },
        { inputStr: "Open sesame", inputTarget: "same", expected: true },
        { inputStr: "Open sesame", inputTarget: "sage", expected: false },
        { inputStr: "Open sesame", inputTarget: "game", expected: false },
        { inputStr: "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", inputTarget: "sage", expected: false },
        { inputStr: "Abstraction", inputTarget: "action", expected: true },
    ];

    tests.forEach(({ inputStr, inputTarget, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(confirmEnding(inputStr, inputTarget), expected);
        });
    });
});

// Repeat a String Repeat a String
describe("Repeat a String Repeat a String", () => {
    it("DATATYPE: It should return a String", () => {
        assert.isString(repeatStringNumTimes("word", 3));
    });
    
    const tests = [
        { inputStr: "*", inputRepeat: 3, expected: "***" },
        { inputStr: "abc", inputRepeat: 3, expected: "abcabcabc" },
        { inputStr: "abc", inputRepeat: 4, expected: "abcabcabcabc" },
        { inputStr: "abc", inputRepeat: 1, expected: "abc" },
        { inputStr: "*", inputRepeat: 8, expected: "********" },
        { inputStr: "abc", inputRepeat: -2, expected: "" },
        { inputStr: "abc", inputRepeat: 0, expected: "" },
    ];

    tests.forEach(({ inputStr, inputRepeat, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(repeatStringNumTimes(inputStr, inputRepeat), expected);
        });
    });
});

// Truncate a String
describe("Truncate a String", () => {
    it("DATATYPE: It should return a String", () => {
        assert.isString(truncateString("Absolutely Longer", 2));
    });
    
    const tests = [
        { inputStr: "A-tisket a-tasket A green and yellow basket", inputTrimLength: 8, expected: "A-tisket..." },
        { inputStr: "Peter Piper picked a peck of pickled peppers", inputTrimLength: 11, expected: "Peter Piper..." },
        { inputStr: "A-tisket a-tasket A green and yellow basket", inputTrimLength: "A-tisket a-tasket A green and yellow basket".length, expected: "A-tisket a-tasket A green and yellow basket" },
        { inputStr: "A-tisket a-tasket A green and yellow basket", inputTrimLength: "A-tisket a-tasket A green and yellow basket".length + 2, expected: "A-tisket a-tasket A green and yellow basket" },
        { inputStr: "A-", inputTrimLength: 1, expected: "A..." },
        { inputStr: "Absolutely Longer", inputTrimLength: 2, expected: "Ab..." },
    ];

    tests.forEach(({ inputStr, inputTrimLength, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(truncateString(inputStr, inputTrimLength), expected);
        });
    });
});

// Finders Keepers
describe("Finders Keepers", () => {
    it("Finders Keepers - return 8", () => {
        assert.equal(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0), 8);
    });
});

describe("Finders Keepers", () => {
    it("Finders Keepers - return 8", () => {
        assert.equal(findElement([1, 3, 5, 9], num => num % 2 === 0), undefined);
    });
});

// Boo who
describe("Boo who", () => {
    it("DATATYPE: It should return a Boolean", () => {
        assert.isBoolean(booWho("TEXT"));
    });
    
    const tests = [
        { input: true, expected: true },
        { input: false, expected: true },
        { input: [1, 2, 3], expected: false },
        { input: { "a": 1 }, expected: false },
        { input: 1, expected: false },
        { input: NaN, expected: false },
        { input: "true", expected: false },
        { input: "false", expected: false },
    ];

    tests.forEach(({ input, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(booWho(input), expected);
        });
    });
});

// Title Case a Sentence
describe("Title Case a Sentence", () => {
    it("DATATYPE: It should return a String", () => {
        assert.isString(titleCase("I'm a little tea pot"));
    });
    
    const tests = [
        { input: "I'm a little tea pot", expected: "I'm A Little Tea Pot" },
        { input: "sHoRt AnD sToUt", expected: "Short And Stout" },
        { input: "HERE IS MY HANDLE HERE IS MY SPOUT", expected: "Here Is My Handle Here Is My Spout" },
    ];

    tests.forEach(({ input, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(titleCase(input), expected);
        });
    });
});

// Slice and Splice
describe("Slice and Splice", () => {
    it("DATATYPE: It should return a Array", () => {
        assert.isArray(frankenSplice([1, 2, 3], [4, 5, 6], 1));
    });
    
    const tests = [
        { inputArr1: [1, 2, 3], inputArr2: [4, 5], inputIndex: 1, expected: [4, 1, 2, 3, 5] },
        { inputArr1: [1, 2], inputArr2: ["a", "b"], inputIndex: 1, expected: ["a", 1, 2, "b"] },
        { inputArr1: ["claw", "tentacle"], inputArr2: ["head", "shoulders", "knees", "toes"], inputIndex: 2, expected: ["head", "shoulders", "claw", "tentacle", "knees", "toes"] },
        { inputArr1: [1, 2, 3, 4], inputArr2: [], inputIndex: 0, expected: [1, 2, 3, 4] },
    ];

    tests.forEach(({ inputArr1, inputArr2, inputIndex, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(frankenSplice(inputArr1, inputArr2, inputIndex), expected);
        });
    });
});

// Falsy Bouncer
describe("Falsy Bouncer", () => {
    it("DATATYPE: It should return a Array", () => {
        assert.isArray(bouncer([7, "ate", "", false, 9]));
    });
    
    const tests = [
        { input: [7, "ate", "", false, 9], expected: [7, "ate", 9] },
        { input: ["a", "b", "c"], expected: ["a", "b", "c"] },
        { input: [false, null, 0, NaN, undefined, ""], expected: [] },
        { input: [null, NaN, 1, 2, undefined], expected: [1, 2] },
    ];

    tests.forEach(({ input, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(bouncer(input), expected);
        });
    });
});

// Where do I Belong
describe("Where do I Belong", () => {
    it("DATATYPE: It should return a Number", () => {
        assert.isNumber(getIndexToIns([10, 20, 30, 40, 50], 35));
    });
    
    const tests = [
        { inputArray: [10, 20, 30, 40, 50], inputNumber: 35, expected: 3 },
        { inputArray: [10, 20, 30, 40, 50], inputNumber: 30, expected: 2 },
        { inputArray: [40, 60], inputNumber: 50, expected: 1 },
        { inputArray: [3, 10, 5], inputNumber: 3, expected: 0 },
        { inputArray: [5, 3, 20, 3], inputNumber: 5, expected: 2 },
        { inputArray: [2, 20, 10], inputNumber: 19, expected: 2 },
        { inputArray: [2, 5, 10], inputNumber: 15, expected: 3 },
        { inputArray: [], inputNumber: 1, expected: 0 },
    ];

    tests.forEach(({ inputArray, inputNumber, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(getIndexToIns(inputArray, inputNumber), expected);
        });
    });
});

// Mutations
describe("Mutations", () => {
    it("DATATYPE: It should return a Boolean", () => {
        assert.isBoolean(mutation(["hello", "hey"]));
    });
    
    const tests = [
        { inputArray: ["hello", "hey"], expected: false },
        { inputArray: ["hello", "Hello"], expected: true },
        { inputArray: ["zyxwvutsrqponmlkjihgfedcba", "qrstu"], expected: true },
        { inputArray: ["Mary", "Army"], expected: true },
        { inputArray: ["Mary", "Aarmy"], expected: true },
        { inputArray: ["Alien", "line"], expected: true },
        { inputArray: ["floor", "for"], expected: true },
        { inputArray: ["hello", "neo"], expected: false },
        { inputArray: ["voodoo", "no"], expected: false },
        { inputArray: ["ate", "date"], expected: false },
        { inputArray: ["Tiger", "Zebra"], expected: false },
        { inputArray: ["Noel", "Ole"], expected: true },
    ];

    tests.forEach(({ inputArray, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(mutation(inputArray), expected);
        });
    });
});

// Chunky Monkey
describe("Chunky Monkey", () => {
    it("DATATYPE: It should return a Array", () => {
        assert.isArray(chunkArrayInGroups(["a", "b", "c", "d"], 2));
    });
    
    const tests = [
        { inputArray: ["a", "b", "c", "d"], inputNumber: 2, expected: [["a", "b"], ["c", "d"]] },
        { inputArray: [0, 1, 2, 3, 4, 5], inputNumber: 3, expected: [[0, 1, 2], [3, 4, 5]] },
        { inputArray: [0, 1, 2, 3, 4, 5], inputNumber: 2, expected: [[0, 1], [2, 3], [4, 5]] },
        { inputArray: [0, 1, 2, 3, 4, 5], inputNumber: 4, expected: [[0, 1, 2, 3], [4, 5]] },
        { inputArray: [0, 1, 2, 3, 4, 5, 6], inputNumber: 3, expected: [[0, 1, 2], [3, 4, 5], [6]] },
        { inputArray: [0, 1, 2, 3, 4, 5, 6, 7, 8], inputNumber: 4, expected: [[0, 1, 2, 3], [4, 5, 6, 7], [8]] },
        { inputArray: [0, 1, 2, 3, 4, 5, 6, 7, 8], inputNumber: 2, expected: [[0, 1], [2, 3], [4, 5], [6, 7], [8]] },
    ];

    tests.forEach(({ inputArray, inputNumber, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(chunkArrayInGroups(inputArray, inputNumber), expected);
        });
    });
});