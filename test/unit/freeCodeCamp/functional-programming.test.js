import { assert } from "chai";
import { incrementer, incrementer2, addBook, removeBook, filmRatings, filmFilterByRating, sliceArray, nonMutatingSplice } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/functional-programming.js";
import { nonMutatingConcat, nonMutatingPush, getRating, squareList, alphabeticalOrder, nonMutatingSort, splitify, sentensify, urlSlug, checkPositive, add } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/functional-programming.js";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const filmList = require('../../../src/assets/data/films.json');

// Incrementer
describe("Incrementer", () => {
    it("DATATYPE: It should return a Number", () => {
        assert.isNumber(incrementer());
    });

    it("It should return 5", () => {
        assert.equal(incrementer(), 5);
    });
});

describe("Incrementer2 - Pass Arguments", () => {
    const tests = [
        { arg: 4, expected: 5 },
        { arg: 5, expected: 6 },
        { arg: 10, expected: 11 },
        { arg: -1, expected: 0 },
        { arg: -12, expected: -11 },
    ];

    tests.forEach(({ arg }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(incrementer2(arg));
        });
    });

    tests.forEach(({ arg, expected }) => {
        it(`${arg} should return ${expected}`, () => {
            assert.equal(incrementer2(arg), expected);
        });
    });
});

// BookList Add
describe("BookList Add", () => {

    const tests = [
        { inputArray: ["Casino Royale", "Goldfinger"], inputNew: "Die Another Day", expected: ["Casino Royale", "Goldfinger", "Die Another Day"] },
        { inputArray: ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life the Universe and Everything"], inputNew: "So Long, and Thanks for All the Fish", expected: ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life the Universe and Everything", "So Long, and Thanks for All the Fish"] },
        { inputArray: ["The Eyre Affair", "Lost in a Good Book"], inputNew: "The Well of Lost Plots", expected: ["The Eyre Affair", "Lost in a Good Book", "The Well of Lost Plots"] },
    ];

    tests.forEach(({ inputArray, inputNew }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(addBook(inputArray, inputNew));
        });
    });

    tests.forEach(({ inputArray, inputNew, expected }) => {
        it(`${inputNew} should return ${expected}`, () => {
            assert.deepEqual(addBook(inputArray, inputNew), expected);
        });
    });
});

// BookList Remove
describe("BookList Remove", () => {

    const tests = [
        { inputArray: ["Casino Royale", "Goldfinger", "Die Another Day"], inputRemove: "Die Another Day", expected: ["Casino Royale", "Goldfinger"] },
        { inputArray: ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life the Universe and Everything", "So Long, and Thanks for All the Fish"], inputRemove: "So Long, and Thanks for All the Fish", expected: ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life the Universe and Everything"] },
        { inputArray: ["The Eyre Affair", "Lost in a Good Book", "The Great Samuel Pepys Fiasco"], inputRemove: "The Great Samuel Pepys Fiasco", expected: ["The Eyre Affair", "Lost in a Good Book"] },
    ];

    tests.forEach(({ inputArray, inputRemove }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(removeBook(inputArray, inputRemove));
        });
    });

    tests.forEach(({ inputArray, inputRemove, expected }) => {
        it(`${inputRemove} should return ${expected}`, () => {
            assert.deepEqual(removeBook(inputArray, inputRemove), expected);
        });
    });
});

// Map Films
describe("Map Films", () => {
    it("DATATYPE: It should return an Array", () => {
        assert.isArray(filmRatings(filmList));
    });

    it("It should return an Title and Rating for each film", () => {
        assert.deepEqual(filmRatings(filmList), [{ "title": "Inception", "rating": "8.8" }, { "title": "Interstellar", "rating": "8.6" }, { "title": "The Dark Knight", "rating": "9.0" }, { "title": "Batman Begins", "rating": "8.3" }, { "title": "Avatar", "rating": "7.9" }]);
    });
});

// Map & Filter Films
describe("Map & Filter Films", () => {
    it("DATATYPE: It should return an Array", () => {
        assert.isArray(filmFilterByRating(filmList, 8));
    });

    it("It should return an Title and Rating for each film over specified rating", () => {
        assert.deepEqual(filmFilterByRating(filmList, 8), [{ "title": "Inception", "rating": "8.8" }, { "title": "Interstellar", "rating": "8.6" }, { "title": "The Dark Knight", "rating": "9.0" }, { "title": "Batman Begins", "rating": "8.3" }]);
    });
});

// Return Part of an Array Using the slice Method
describe("Return Part of an Array Using the slice Method", () => {

    const animals = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

    const tests = [
        { inputBegin: 1, inputEnd: 3, expected: ["Dog", "Tiger"] },
        { inputBegin: 0, inputEnd: 1, expected: ["Cat"] },
        { inputBegin: 1, inputEnd: 4, expected: ["Dog", "Tiger", "Zebra"] },
    ];

    tests.forEach(({ inputBegin, inputEnd }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(sliceArray(animals, inputBegin, inputEnd));
        });
    });

    tests.forEach(({ inputBegin, inputEnd, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(sliceArray(animals, inputBegin, inputEnd), expected);
        });
    });
});

// Remove Elements from an Array Using slice Instead of splice
describe("Remove Elements from an Array Using slice Instead of splice", () => {

    const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

    it("DATATYPE: It should return an Array", () => {
        assert.isArray(nonMutatingSplice(cities));
    });

    it("It should return ['Chicago', 'Delhi', 'Islamabad']", () => {
        assert.deepEqual(nonMutatingSplice(cities), ["Chicago", "Delhi", "Islamabad"]);
    });
});

// Combine Two Arrays Using the concat Method
describe("Remove Elements from an Array Using slice Instead of splice", () => {

    const firstArray = [1, 2, 3];
    const arrayToJoin = [4, 5];

    it("DATATYPE: It should return an Array", () => {
        assert.isArray(nonMutatingConcat(firstArray, arrayToJoin));
    });

    it("It should return [1, 2, 3, 4, 5]", () => {
        assert.deepEqual(nonMutatingConcat(firstArray, arrayToJoin), [1, 2, 3, 4, 5]);
    });
});

// Add Elements to the End of an Array Using concat Instead of push
describe("Add Elements to the End of an Array Using concat Instead of push", () => {

    const firstArray = [1, 2, 3];
    const arrayToJoin = [4, 5];

    it("DATATYPE: It should return an Array", () => {
        assert.isArray(nonMutatingPush(firstArray, arrayToJoin));
    });

    it("It should return [1, 2, 3, 4, 5]", () => {
        assert.deepEqual(nonMutatingPush(firstArray, arrayToJoin), [1, 2, 3, 4, 5]);
    });
});

// Use the reduce Method to Analyze Data
describe("It should provide an average imdb rating for Christopher Nolan films", () => {

    it("DATATYPE: It should return a Number", () => {
        assert.isNumber(getRating(filmList));
    });

    it("It should return 8.675", () => {
        assert.equal(getRating(filmList), 8.675);
    });
});

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
describe("Square positive int(s) only", () => {

    const tests = [
        { inputArray: [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2], expected: [16, 1764, 36] },
        { inputArray: [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3], expected: [9, 100, 49] },
    ];

    tests.forEach(({ inputArray }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(squareList(inputArray));
        });
    });

    tests.forEach(({ inputArray, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(squareList(inputArray), expected);
        });
    });
});

// Sort an Array Alphabetically using the sort Method
describe("Sort an Array Alphabetically", () => {

    const tests = [
        { inputArray: ["a", "d", "c", "a", "z", "g"], expected: ["a", "a", "c", "d", "g", "z"] },
        { inputArray: ["x", "h", "a", "m", "n", "m"], expected: ["a", "h", "m", "m", "n", "x"] },
        { inputArray: ["a", "a", "a", "a", "x", "t"], expected: ["a", "a", "a", "a", "t", "x"] },
    ];

    tests.forEach(({ inputArray }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(alphabeticalOrder(inputArray));
        });
    });

    tests.forEach(({ inputArray, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(alphabeticalOrder(inputArray), expected);
        });
    });
});

// Return a Sorted Array Without Changing the Original Array
describe("Sort an Array Without Changing the Original Array", () => {

    const tests = [
        { inputArray: [5, 6, 3, 2, 9], expected: [2, 3, 5, 6, 9] },
        { inputArray: [1, 30, 4, 21, 100000], expected: [1, 4, 21, 30, 100000] },
        { inputArray: [140000, 104, 99], expected: [99, 104, 140000] },
    ];

    tests.forEach(({ inputArray }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(nonMutatingSort(inputArray));
        });
    });

    tests.forEach(({ inputArray, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(nonMutatingSort(inputArray), expected);
        });
    });
});

// Split a String into an Array Using the split Method
describe("Split a string by non-alphabet characters", () => {

    const tests = [
        { inputString: "Hello World,I-am code", expected: ["Hello", "World", "I", "am", "code"] },
        { inputString: "Earth-is-our home", expected: ["Earth", "is", "our", "home"] },
        { inputString: "This.is.a-sentence", expected: ["This", "is", "a", "sentence"] },
        { inputString: "How9are7you2today", expected: ["How", "are", "you", "today"] },
        { inputString: "How_are_you_today", expected: ["How", "are", "you", "today"] },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return an Array", () => {
            assert.isArray(splitify(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.deepEqual(splitify(inputString), expected);
        });
    });
});

// Combine an Array into a String Using the join Method
describe("Combine an a string by non-alphabet characters", () => {

    const tests = [
        { inputString: "May-the-force-be-with-you", expected: "May the force be with you" },
        { inputString: "The.force.is.strong.with.this.one", expected: "The force is strong with this one" },
        { inputString: "There,has,been,an,awakening", expected: "There has been an awakening" },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(sentensify(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(sentensify(inputString), expected);
        });
    });
});

// Apply Functional Programming to Convert Strings to URL Slugs
describe("Convert Strings to URL Slugs", () => {

    const tests = [
        { inputString: "May the force be with you", expected: "may-the-force-be-with-you" },
        { inputString: "Winter Is Coming", expected: "winter-is-coming" },
        { inputString: "A Mind Needs Books Like A Sword Needs A Whetstone", expected: "a-mind-needs-books-like-a-sword-needs-a-whetstone" },
        { inputString: "Hold The Door", expected: "hold-the-door" },
        { inputString: " Winter Is  Coming", expected: "winter-is-coming" },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return a String", () => {
            assert.isString(urlSlug(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(urlSlug(inputString), expected);
        });
    });
});

// Use the every Method to Check that Every Element in an Array Meets a Criteria
describe("Check every element meets criteria", () => {

    const tests = [
        { inputString: [1, 2, 3, 4, 5], expected: true },
        { inputString: [1, 2, 3, -4, 5], expected: false },
        { inputString: [1, -2, 3, -4, 5], expected: false },
    ];

    tests.forEach(({ inputString }) => {
        it("DATATYPE: It should return a Boolean", () => {
            assert.isBoolean(checkPositive(inputString));
        });
    });

    tests.forEach(({ inputString, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(checkPositive(inputString), expected);
        });
    });
});

// Introduction to Currying and Partial Application
describe("Currying and Partial Applications", () => {

    const tests = [
        { input1: 10, input2: 20, input3: 30, expected: 60 },
        { input1: 1, input2: 2, input3: 3, expected: 6 },
        { input1: 11, input2: 22, input3: 33, expected: 66 },
    ];

    tests.forEach(({ input1, input2, input3 }) => {
        it("DATATYPE: It should return a Number", () => {
            assert.isNumber(add(input1)(input2)(input3));
        });
    });

    tests.forEach(({ input1, input2, input3, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(add(input1)(input2)(input3), expected);
        });
    });
});