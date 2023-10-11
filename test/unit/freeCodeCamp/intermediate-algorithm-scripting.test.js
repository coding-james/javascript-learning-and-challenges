import { assert } from "chai";
import { sumAll, diffArray, destroyer, whatIsInAName, spinalCase, translatePigLatin, myReplace, pairElement, fearNotLetter, uniteUnique, convertHTML, sumPrimes } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/intermediate-algorithm-scripting.js";
import { sumFibs, smallestCommons, dropElements, steamrollArray, binaryAgent, truthCheck, addTogether, Person, orbitalPeriod } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/intermediate-algorithm-scripting.js";
import { nonMutatingSort } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/functional-programming.js";

// Sum All Numbers in a Range
describe("Sum All Numbers in a Range", () => {

    const tests = [
        { inputString: [1, 4], expected: 10 },
        { inputString: [4, 1], expected: 10 },
        { inputString: [5, 10], expected: 45 },
        { inputString: [10, 5], expected: 45 },
    ];

    tests.forEach(({ inputString }) => {
        it(`DATATYPE: It should return a Number"`, () => {
            assert.isNumber(sumAll(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(sumAll(inputString), expected);
        });
    });
});

// Diff Two Arrays
describe("Compare two arrays, return unique elements", () => {

    const tests = [
        { inputArray1: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], inputArray2: ["diorite", "andesite", "grass", "dirt", "dead shrub"], expected: ["pink wool"] },
        { inputArray1: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], inputArray2: ["diorite", "andesite", "grass", "dirt", "dead shrub"], expected: ["diorite", "pink wool"] },
        { inputArray1: ["andesite", "grass", "dirt", "dead shrub"], inputArray2: ["andesite", "grass", "dirt", "dead shrub"], expected: [] },
        { inputArray1: [1, 2, 3, 5], inputArray2: [1, 2, 3, 4, 5], expected: [4] },
        { inputArray1: [1, "calf", 3, "piglet"], inputArray2: [1, "calf", 3, 4], expected: ["piglet", 4] },
        { inputArray1: [], inputArray2: ["snuffleupagus", "cookie monster", "elmo"], expected: ["snuffleupagus", "cookie monster", "elmo"] },
        { inputArray1: [1, "calf", 3, "piglet"], inputArray2: [7, "filly"], expected: [1, "calf", 3, "piglet", 7, "filly"] },
    ];

    tests.forEach(({ inputArray1, inputArray2 }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(diffArray(inputArray1, inputArray2));
        });
    });

    tests.forEach(({ inputArray1, inputArray2, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(diffArray(inputArray1, inputArray2), nonMutatingSort(expected));
        });
    });
});

// Seek and Destroy
describe("Seek and Destroy", () => {

    const tests = [
        { input1: destroyer([1, 2, 3, 1, 2, 3], 2, 3), expected: [1, 1] },
        { input1: destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), expected: [1, 5, 1] },
        { input1: destroyer([3, 5, 1, 2, 2], 2, 3, 5), expected: [1] },
        { input1: destroyer([2, 3, 2, 3], 2, 3), expected: [] },
        { input1: destroyer(["tree", "hamburger", 53], "tree", 53), expected: ["hamburger"] },
        { input1: destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), expected: [12, 92, 65] },
    ];

    tests.forEach(({ input1 }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(input1);
        });
    });

    tests.forEach(({ input1, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(input1, expected);
        });
    });
});

// Wherefore art thou - filter an array of objects by second object values
describe("Wherefore art thou", () => {

    const tests = [
        { inputArray: [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], inputFilter: { last: "Capulet" }, expected: [{ first: "Tybalt", last: "Capulet" }] },
        { inputArray: [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], inputFilter: { "apple": 1 }, expected: [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] },
        { inputArray: [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], inputFilter: { "apple": 1, "bat": 2 }, expected: [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] },
        { inputArray: [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], inputFilter: { "apple": 1, "cookie": 2 }, expected: [{ "apple": 1, "bat": 2, "cookie": 2 }] },
        { inputArray: [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], inputFilter: { "apple": 1, "bat": 2 }, expected: [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] },
        { inputArray: [{ "a": 1, "b": 2, "c": 3 }], inputFilter: { "a": 1, "b": 9999, "c": 3 }, expected: [] },
        { inputArray: [{ "a": 1, "b": 2, "c": 3, "d": 9999 }], inputFilter: { "a": 1, "b": 9999, "c": 3 }, expected: [] },
    ];

    tests.forEach(({ inputArray, inputFilter }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(whatIsInAName(inputArray, inputFilter));
        });
    });

    tests.forEach(({ inputArray, inputFilter, expected }) => {
        it(`${JSON.stringify(inputFilter)} should return ${JSON.stringify(expected)}`, () => {
            assert.deepEqual(whatIsInAName(inputArray, inputFilter), expected);
        });
    });
});

// Spinal Tap Case
describe("Spinal Tap Case", () => {

    const tests = [
        { inputString: "This Is Spinal Tap", expected: "this-is-spinal-tap" },
        { inputString: "thisIsSpinalTap", expected: "this-is-spinal-tap" },
        { inputString: "The_Andy_Griffith_Show", expected: "the-andy-griffith-show" },
        { inputString: "Teletubbies say Eh-oh", expected: "teletubbies-say-eh-oh" },
        { inputString: "AllThe-small Things", expected: "all-the-small-things" },
        { inputString: "all the small things", expected: "all-the-small-things" },
        { inputString: "all_the_small_things", expected: "all-the-small-things" },

    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isString(spinalCase(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(spinalCase(inputString), expected);
        });
    });
});

// Pig Latin
describe("Pig Latin", () => {

    const tests = [
        { inputString: "california", expected: "aliforniacay" },
        { inputString: "paragraphs", expected: "aragraphspay" },
        { inputString: "glove", expected: "oveglay" },
        { inputString: "algorithm", expected: "algorithmway" },
        { inputString: "eight", expected: "eightway" },
        { inputString: "schwartz", expected: "artzschway" },
        { inputString: "rhythm", expected: "rhythmay" },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(translatePigLatin(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(translatePigLatin(inputString), expected);
        });
    });
});

// Search and Replace
describe("Search and Replace", () => {

    const tests = [
        { inputString: "Let us go to the store", findWord: "store", replaceWith: "mall", expected: "Let us go to the mall" },
        { inputString: "He is Sleeping on the couch", findWord: "Sleeping", replaceWith: "sitting", expected: "He is Sitting on the couch" },
        { inputString: "I think we should look up there", findWord: "up", replaceWith: "Down", expected: "I think we should look down there" },
        { inputString: "This has a spellngi error", findWord: "spellngi", replaceWith: "spelling", expected: "This has a spelling error" },
        { inputString: "His name is Tom", findWord: "Tom", replaceWith: "john", expected: "His name is John" },
        { inputString: "Let us get back to more Coding", findWord: "Coding", replaceWith: "algorithms", expected: "Let us get back to more Algorithms" },
    ];

    tests.forEach(({ inputString, findWord, replaceWith }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(myReplace(inputString, findWord, replaceWith));
        });
    });

    tests.forEach(({ inputString, findWord, replaceWith, expected }) => {
        it(`it should find ${findWord} and replace with ${replaceWith}`, () => {
            assert.equal(myReplace(inputString, findWord, replaceWith), expected);
        });
    });
});

// DNA Pairing
describe("DNA Pairing", () => {

    const tests = [
        { inputString: "ATCGA", expected: [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]] },
        { inputString: "TTGAG", expected: [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]] },
        { inputString: "CTCTA", expected: [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]] },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(pairElement(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(pairElement(inputString), expected);
        });
    });
});

// Missing letters
describe("Missing letters", () => {

    const tests = [
        { inputString: "abce", expected: "d" },
        { inputString: "abcdefghjklmno", expected: "i" },
        { inputString: "stvwx", expected: "u" },
        { inputString: "bcdf", expected: "e" },
    ];

    const tests_noMissingLetter = [
        { inputString: "abcde", expected: undefined },
        { inputString: "abcdefghijklmnopqrstuvwxyz", expected: undefined },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(fearNotLetter(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(fearNotLetter(inputString), expected);
        });
    });

    tests_noMissingLetter.forEach(({ inputString }) => {
        it("DATATYPE: If no missing letter, it should return Undefined", () => {
            assert.isUndefined(fearNotLetter(inputString));
        });
    });

    tests_noMissingLetter.forEach(({ inputString, expected }) => {
        it(`If no missing letter, it should return ${expected}`, () => {
            assert.equal(fearNotLetter(inputString), expected);
        });
    });
});

// Sorted Union
describe("Sorted Union - return unique", () => {

    const tests = [
        { input: uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), expected: [1, 3, 2, 5, 4] },
        { input: uniteUnique([1, 2, 3], [5, 2, 1]), expected: [1, 2, 3, 5] },
        { input: uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), expected: [1, 2, 3, 5, 4, 6, 7, 8] },
        { input: uniteUnique([1, 3, 2], [5, 4], [5, 6]), expected: [1, 3, 2, 5, 4, 6] },
        { input: uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), expected: [1, 3, 2, 5, 4] },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray((input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual((input), expected);
        });
    });
});

// Convert HTML Entities
describe("Convert HTML Entities", () => {

    const tests = [
        { input: "Dolce & Gabbana", expected: "Dolce &amp; Gabbana" },
        { input: "Hamburgers < Pizza < Tacos", expected: "Hamburgers &lt; Pizza &lt; Tacos" },
        { input: "Sixty > twelve", expected: "Sixty &gt; twelve" },
        { input: 'Stuff in "quotation marks"', expected: "Stuff in &quot;quotation marks&quot;" },
        { input: "Schindler's List", expected: "Schindler&apos;s List" },
        { input: "<>", expected: "&lt;&gt;" },
        { input: "abc", expected: "abc" },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(convertHTML(input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(convertHTML(input), expected);
        });
    });
});

// Sum All Odd Fibonacci Numbers
describe("Sum All Odd Fibonacci Numbers", () => {

    const tests = [
        { input: 1000, expected: 1785 },
        { input: 4000000, expected: 4613732 },
        { input: 4, expected: 5 },
        { input: 75024, expected: 60696 },
        { input: 75025, expected: 135721 },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(sumFibs(input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(sumFibs(input), expected);
        });
    });
});

// Sum All Primes
describe("Sum All Primes", () => {

    const tests = [
        { input: 10, expected: 17 },
        { input: 977, expected: 73156 },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(sumPrimes(input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(sumPrimes(input), expected);
        });
    });
});

// Smallest Common Multiple
describe("Smallest Common Multiple", () => {

    const tests = [
        { input: [1, 5], expected: 60 },
        { input: [5, 1], expected: 60 },
        { input: [2, 10], expected: 2520 },
        { input: [1, 13], expected: 360360 },
        { input: [23, 18], expected: 6056820 },

    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(smallestCommons(input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(smallestCommons(input), expected);
        });
    });
});

// Drop it
describe("Drop it", () => {

    const tests = [
        { input: dropElements([1, 2, 3, 4], function (n) { return n >= 3; }), expected: [3, 4] },
        { input: dropElements([0, 1, 0, 1], function (n) { return n === 1; }), expected: [1, 0, 1] },
        { input: dropElements([1, 2, 3], function (n) { return n > 0; }), expected: [1, 2, 3] },
        { input: dropElements([1, 2, 3, 4], function (n) { return n > 5; }), expected: [] },
        { input: dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }), expected: [7, 4] },
        { input: dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }), expected: [3, 9, 2] },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray((input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual((input), expected);
        });
    });
});

// Steamroller - flatten nested arrays
describe("Steamroller", () => {

    const tests = [
        { input: [[["a"]], [["b"]]], expected: ["a", "b"] },
        { input: [1, [2], [3, [[4]]]], expected: [1, 2, 3, 4] },
        { input: [1, [], [3, [[4]]]], expected: [1, 3, 4] },
        { input: [1, {}, [3, [[4]]]], expected: [1, {}, 3, 4] },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(steamrollArray(input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(steamrollArray(input), expected);
        });
    });
});

// Binary Agents
describe("Binary Agents", () => {

    const tests = [
        { input: "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111", expected: "Aren't bonfires fun!?" },
        { input: "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001", expected: "I love FreeCodeCamp!" },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(binaryAgent(input));
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(binaryAgent(input), expected);
        });
    });
});

// Everything Be True
describe("Everything Be True", () => {

    const tests = [
        { input: [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], inputKey: "isBot", expected: false },
        { input: [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], inputKey: "name", expected: true },
        { input: [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], inputKey: "role", expected: false },
        { input: [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }], inputKey: "number", expected: true },
        { input: [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], inputKey: "caught", expected: false },
        { input: [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], inputKey: "number", expected: false },
        { input: [{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }], inputKey: "username", expected: false },
        { input: [{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], inputKey: "users", expected: true },
        { input: [{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], inputKey: "data", expected: true },
        { input: [{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], inputKey: "id", expected: false },
    ];

    tests.forEach(({ input, inputKey }) => {
        it("DATATYPE: It should return a Bool", () => {
            assert.isBoolean(truthCheck(input, inputKey));
        });
    });

    tests.forEach(({ input, inputKey, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(truthCheck(input, inputKey), expected);
        });
    });
});

// Arguments Optional
describe("Arguments Optional", () => {

    const tests = [
        { input: addTogether(2, 3), expected: 5 },
        { input: addTogether(23, 30), expected: 53 },
        { input: addTogether(5)(7), expected: 12 },
    ];

    const tests_invalid = [
        { input: addTogether("2", 3), expected: undefined },
        { input: addTogether(5, undefined), expected: undefined },
        { input: addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), expected: undefined },
        { input: addTogether(2)([3]), expected: undefined },
        { input: addTogether(2, "3"), expected: undefined },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return a Number, if arguments valid", () => {
            assert.isNumber(input);
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(input, expected);
        });
    });

    tests_invalid.forEach(({ input }) => {
        it("DATATYPE: It should return Undefined, if any arguments invalid", () => {
            assert.isUndefined(input);
        });
    });

    tests_invalid.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(input, expected);
        });
    });
});

// Make a person
describe("Make a person", () => {

    const bob = new Person("Bob Ross");

    it("No properties should be added, should always return 6", () => {
        assert.equal(Object.keys(bob).length, 6);
    });

    it("bob.firstName should equal undefined", () => {
        assert.isUndefined(bob.firstName);
    });

    it("bob.lastName should equal undefined", () => {
        assert.isUndefined(bob.lastName);
    });

    it("getFirstName() should return Bob", () => {
        assert.equal(bob.getFirstName(), "Bob");
    });

    it("getLastName() should return Ross", () => {
        assert.equal(bob.getLastName(), "Ross");
    });

    it("getFullName() should return Bob Ross", () => {
        assert.equal(bob.getFullName(), "Bob Ross");
    });

    it("setting a new firstName should return an updated fullName", () => {
        bob.setFirstName("Haskell");
        assert.equal(bob.getFullName(), "Haskell Ross");
    });

    it("setting a new lastName should return an updated fullName", () => {
        bob.setLastName("Curry");
        assert.equal(bob.getFullName(), "Haskell Curry");
    });

    it("setting a new fullName should return an updated fullName", () => {
        bob.setFullName("John Smith");
        assert.equal(bob.getFullName(), "John Smith");
    });

    it("setting a new fullName should return an updated firstName", () => {
        bob.setFullName("Haskell Curry");
        assert.equal(bob.getFirstName(), "Haskell");
    });

    it("setting a new fullName should return an updated lastName", () => {
        bob.setFullName("Haskell Curry");
        assert.equal(bob.getLastName(), "Curry");
    });
});

// Map the Debris
describe("Map the Debris", () => {

    const tests = [
        { input: orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]), expected: [{ name: "sputnik", orbitalPeriod: 86400 }] },
        { input: orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]), expected: [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }] },
    ];

    tests.forEach(({ input }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(input);
        });
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${JSON.stringify(expected)}`, () => {
            assert.deepEqual(input, expected);
        });
    });
});