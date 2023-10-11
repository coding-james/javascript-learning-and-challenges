import { assert } from "chai";
import { canIVote, agreeOrDisagree, lifePhase, finalGrade, reportingForDuty, calculateWeight, truthyOrFalsy, numImaginaryFriends, sillySentence, howOld, whatRelation, tipCalculator, toEmoticon, colorMessage, isEven, numberDigits } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/challenges.js";

describe("Can I Vote?", () => {
    const tests = [
        { age: 10, expected: false },
        { age: 17, expected: false },
        { age: 18, expected: true },
        { age: 54, expected: true },
        { age: 60, expected: true },
        { age: 140, expected: true },
    ];

    tests.forEach(({ age }) => {
        it(`DATATYPE: It should return a Boolean`, () => {
            assert.isBoolean(canIVote(age));
        })
    });

    tests.forEach(({ age, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(canIVote(age), expected);
        });
    });
});

describe("Agree or Disagree", () => {
    const tests = [
        { first: "yep", second: "yep", expected: "You agree!" },
        { first: "yep", second: "nope", expected: "You disagree!" },
        { first: "yep", second: "Yep", expected: "You disagree!" },
        { first: "yep", second: "YEP", expected: "You disagree!" },
    ];

    tests.forEach(({ first, second }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(agreeOrDisagree(first, second));
        })
    });

    tests.forEach(({ first, second, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(agreeOrDisagree(first, second), expected);
        });
    });
});


describe("Life Phase", () => {
    const tests = [
        { age: 0, expected: "baby" },
        { age: 1, expected: "baby" },
        { age: 3, expected: "baby" },
        { age: 4, expected: "child" },
        { age: 8, expected: "child" },
        { age: 12, expected: "child" },
        { age: 13, expected: "teen" },
        { age: 15, expected: "teen" },
        { age: 19, expected: "teen" },
        { age: 20, expected: "adult" },
        { age: 54, expected: "adult" },
        { age: 64, expected: "adult" },
        { age: 65, expected: "senior citizen" },
        { age: 101, expected: "senior citizen" },
        { age: 140, expected: "senior citizen" },
        { age: -1, expected: "This is not a valid age" },
        { age: 141, expected: "This is not a valid age" },
    ];

    tests.forEach(({ age }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(lifePhase(age));
        })
    });

    tests.forEach(({ age, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(lifePhase(age), expected);
        });
    });
});


describe("Final Grade", () => {
    const tests = [
        { grade1: 90, grade2: 92, grade3: 95, expected: "A" },
        { grade1: 90, grade2: 90, grade3: 89, expected: "B" },
        { grade1: 80, grade2: 80, grade3: 79, expected: "C" },
        { grade1: 70, grade2: 70, grade3: 69, expected: "D" },
        { grade1: 60, grade2: 60, grade3: 59, expected: "F" },
        { grade1: 102, grade2: 90, grade3: 90, expected: "You have entered an invalid grade." },
        { grade1: -1, grade2: 90, grade3: 90, expected: "You have entered an invalid grade." },
    ];

    tests.forEach(({ grade1, grade2, grade3 }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(finalGrade(grade1, grade2, grade3));
        })
    });

    tests.forEach(({ grade1, grade2, grade3, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(finalGrade(grade1, grade2, grade3), expected);
        });
    });
});


describe("Reporting For Duty", () => {
    const tests = [
        { rank: "Private", name: "Fido", expected: "Private Fido reporting for duty!" },
        { rank: "Sgt", name: "Thomas", expected: "Sgt Thomas reporting for duty!" },
        { rank: "General", name: "Emma", expected: "General Emma reporting for duty!" },
    ];

    tests.forEach(({ rank, name }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(reportingForDuty(rank, name));
        })
    });

    tests.forEach(({ rank, name, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(reportingForDuty(rank, name), expected);
        });
    });
});


describe("Calculate Planet Weight", () => {
    const earthWeight = 100;

    const tests = [
        { planet: "Mercury", expected: 37.8 },
        { planet: "Venus", expected: 90.7 },
        { planet: "Mars", expected: 37.7 },
        { planet: "Jupiter", expected: 236 },
        { planet: "Saturn", expected: 91.60000000000001 },
    ];

    tests.forEach(({ planet }) => {
        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(calculateWeight(earthWeight, planet));
        })
    });

    tests.forEach(({ planet, expected }) => {
        it(`${planet} should return ${expected}`, () => {
            assert.equal(calculateWeight(earthWeight, planet), expected);
        });
    });

    it(`DATATYPE: Invalid Planet - It should return a String`, () => {
        assert.isString(calculateWeight(earthWeight, "That's no moon"));
    });

    it(`Invalid Planet - It should return default`, () => {
        assert.equal(calculateWeight(earthWeight, "That's no moon"), "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.");
    });
});


describe("Truthy Or Falsy", () => {
    const tests = [
        { input: 0, expected: false },
        { input: false, expected: false },
        { input: true, expected: true },
        { input: "string", expected: true },
        { input: 60, expected: true },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return a Boolean`, () => {
            assert.isBoolean(truthyOrFalsy(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(truthyOrFalsy(input), expected);
        });
    });
});

describe("Imaginary Friends", () => {
    const tests = [
        { input: 20, expected: 5 },
        { input: 10, expected: 3 },
        { input: 0, expected: 0 },
        { input: -1, expected: 0 },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(numImaginaryFriends(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(numImaginaryFriends(input), expected);
        });
    });
});

describe("Silly Sentence", () => {
    const tests = [
        { adj: "excited", verb: "love", noun: "functions", expected: "I am so excited because I love coding! Time to write some more awesome functions!" },
        { adj: "skilled", verb: "practice", noun: "tests", expected: "I am so skilled because I practice coding! Time to write some more awesome tests!" },
        { adj: "WOOF!", verb: "BARK!", noun: "SNIFF!", expected: "I am so WOOF! because I BARK! coding! Time to write some more awesome SNIFF!!" },
    ];

    tests.forEach(({ adj, verb, noun }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(sillySentence(adj, verb, noun));
        })
    });

    tests.forEach(({ adj, verb, noun, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(sillySentence(adj, verb, noun), expected);
        });
    });
});

describe("How Old", () => {
    const tests = [
        { age: 20, year: 2023, expected: "It is 2023 and your age is 20" },
        { age: 20, year: 2004, expected: "You were 1 in the year 2004" },
        { age: 20, year: 2043, expected: "You will be 40 in the year 2043" },
        { age: 20, year: 2000, expected: "The year 2000 was 3 years before you were born" },
    ];

    tests.forEach(({ age, year }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(howOld(age, year));
        })
    });

    tests.forEach(({ age, year, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(howOld(age, year), expected);
        });
    });
});

describe("DNA Shared", () => {
    const tests = [
        { dnaMatch: 100, expected: "You are likely identical twins." },
        { dnaMatch: 35, expected: "You are likely parent and child or full siblings." },
        { dnaMatch: 50, expected: "You are likely parent and child or full siblings." },
        { dnaMatch: 99, expected: "You are likely parent and child or full siblings." },
        { dnaMatch: 14, expected: "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings." },
        { dnaMatch: 20, expected: "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings." },
        { dnaMatch: 34, expected: "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings." },
        { dnaMatch: 6, expected: "You are likely 1st cousins." },
        { dnaMatch: 10, expected: "You are likely 1st cousins." },
        { dnaMatch: 13, expected: "You are likely 1st cousins." },
        { dnaMatch: 3, expected: "You are likely 2nd cousins." },
        { dnaMatch: 4, expected: "You are likely 2nd cousins." },
        { dnaMatch: 5, expected: "You are likely 2nd cousins." },
        { dnaMatch: 1, expected: "You are likely 3rd cousins." },
        { dnaMatch: 2, expected: "You are likely 3rd cousins." },
        { dnaMatch: 0, expected: "You are likely not related." },
    ];

    tests.forEach(({ dnaMatch }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(whatRelation(dnaMatch));
        })
    });

    tests.forEach(({ dnaMatch, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(whatRelation(dnaMatch), expected);
        });
    });
});

describe("Tip Calculator", () => {
    const tests = [
        { quality: "excellent", total: 100, expected: 30 },
        { quality: "good", total: 100, expected: 20 },
        { quality: "ok", total: 200, expected: 30 },
        { quality: "bad", total: 200, expected: 10 },
        { quality: "some other text", total: 100, expected: 18 },
    ];

    tests.forEach(({ quality, total }) => {
        it(`DATATYPE: It should return a Number`, () => {
            assert.isNumber(tipCalculator(quality, total));
        })
    });

    tests.forEach(({ quality, total, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(tipCalculator(quality, total), expected);
        });
    });
});

describe("To Emoticon", () => {
    const tests = [
        { input: "shrug", expected: '|_{"}_|' },
        { input: "smiley face", expected: ":)" },
        { input: "frowny face", expected: ":(" },
        { input: "winky face", expected: ";)" },
        { input: "heart", expected: "<3" },
        { input: "something else", expected: "|_(* ~ *)_|" },
    ];

    tests.forEach(({ input }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(toEmoticon(input));
        })
    });

    tests.forEach(({ input, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(toEmoticon(input), expected);
        });
    });
});

describe("Color Message", () => {
    const tests = [
        { color1: "red", color2: "red", expected: "The shirt is your favorite color!" },
        { color1: "yellow", color2: "green", expected: "That is a nice color." },
        { color1: "some other color", color2: "some other color", expected: "The shirt is your favorite color!" },
        { color1: "some other color", color2: "red", expected: "That is a nice color." },
    ];

    tests.forEach(({ color1, color2 }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(colorMessage(color1, color2));
        })
    });

    tests.forEach(({ color1, color2, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(colorMessage(color1, color2), expected);
        });
    });
});

describe("Is Even", () => {
    const tests = [
        { number: 2, expected: true },
        { number: 10, expected: true },
        { number: 1, expected: false },
        { number: 3, expected: false },
    ];

    tests.forEach(({ number, color2 }) => {
        it(`DATATYPE: It should return a Boolean`, () => {
            assert.isBoolean(isEven(number));
        })
    });

    tests.forEach(({ number, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(isEven(number), expected);
        });
    });
});

describe("Is Even", () => {
    const tests = [
        { number: 5, expected: "One digit: 5" },
        { number: 10, expected: "Two digits: 10" },
        { number: 63, expected: "Two digits: 63" },
        { number: 100, expected: "The number is: 100" },
        { number: -2, expected: "The number is: -2" },
    ];

    tests.forEach(({ number, color2 }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(numberDigits(number));
        })
    });

    tests.forEach(({ number, expected }) => {
        it(`it should return ${expected}`, () => {
            assert.equal(numberDigits(number), expected);
        });
    });
});