import { assert } from "chai";
import { addKeyValuePair, updateValues, updateValuesNested, removeKeyPair, objectAppears, iterateThrough, listKeys } from "../../../src/components/challenges/freeCodeCamp/JavaScriptAlgorithmsAndDataStructures/basic-data-structures.js";

describe("Basic Data Structures: Add Key Pair", () => {
    const tests = [
        { sampleObject: { apples: 25, oranges: 32, plums: 28 }, addKeys: ['bananas', 'grapes', 'strawberries'], addValues: [13, 35, 27], expected: { apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 } },
        { sampleObject: { Ford: 55, Audi: 70, BMW: 63 }, addKeys: ['Volkswagen', 'Land Rover', 'Tesla'], addValues: [82, 23, 10], expected: { Ford: 55, Audi: 70, BMW: 63, Volkswagen: 82, 'Land Rover': 23, Tesla: 10 } },
    ];

    tests.forEach(({ sampleObject, addKeys, addValues, expected }) => {
        it(`should add keys: ${addKeys.toString()}`, () => {
            assert.deepEqual(addKeyValuePair(sampleObject, addKeys, addValues), expected);
        });
    });
});

describe("Basic Data Structures: Modify Value", () => {
    const tests = [
        { sampleObject: { apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }, modifyKeys: ['apples', 'grapes'], modifyValues: [50, 12], expected: { apples: 50, oranges: 32, plums: 28, bananas: 13, grapes: 12, strawberries: 27 } },
        { sampleObject: { Ford: 55, Audi: 70, BMW: 63, Volkswagen: 82, 'Land Rover': 23, Tesla: 10 }, modifyKeys: ['Land Rover', 'Ford'], modifyValues: [17, 10], expected: { Ford: 10, Audi: 70, BMW: 63, Volkswagen: 82, 'Land Rover': 17, Tesla: 10 } },
    ];

    tests.forEach(({ sampleObject, modifyKeys, modifyValues, expected }) => {
        it(`should modify keys: ${modifyKeys.toString()}`, () => {
            assert.deepEqual(updateValues(sampleObject, modifyKeys, modifyValues), expected);
        });
    });
});

describe("Basic Data Structures: Modify Value Nested", () => {
    const tests = [
        {
            sampleObject:
            {
                id: 28802695164,
                date: 'December 31, 2016',
                data:
                {
                    totalUsers: 99,
                    online: 80,
                    onlineStatus:
                    {
                        active: 67,
                        away: 13,
                        busy: 8
                    }
                }
            },
            modifyKeys: ['active', 'away'],
            modifyValues: [70, 10],
            expected:
            {
                id: 28802695164,
                date: 'December 31, 2016',
                data:
                {
                    totalUsers: 99,
                    online: 80,
                    onlineStatus:
                    {
                        active: 70,
                        away: 10,
                        busy: 8
                    }
                }
            },
        },
    ];

    tests.forEach(({ sampleObject, modifyKeys, modifyValues, expected }) => {
        it(`should modify keys: ${modifyKeys.toString()}`, () => {
            assert.deepEqual(updateValuesNested(sampleObject, modifyKeys, modifyValues), expected);
        });
    });
});

describe("Basic Data Structures: Remove Key Pair", () => {
    const tests = [
        { sampleObject: { apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }, removeKeys: ['oranges', 'plums', 'strawberries'], expected: { apples: 25, bananas: 13, grapes: 35 } },
        { sampleObject: { Ford: 55, Audi: 70, BMW: 63, Volkswagen: 82, 'Land Rover': 23, Tesla: 10 }, removeKeys: ['Volkswagen', 'Land Rover', 'Audi'], expected: { Ford: 55, BMW: 63, Tesla: 10 } },
    ];

    tests.forEach(({ sampleObject, removeKeys, expected }) => {
        it(`should remove keys: ${removeKeys.toString()}`, () => {
            assert.deepEqual(removeKeyPair(sampleObject, removeKeys), expected);
        });
    });
});

describe("Basic Data Structures: Object Appears", () => {
    const tests = [
        {
            sampleObject:
            {
                Alan:
                {
                    age: 27,
                    online: true
                },
                Jeff:
                {
                    age: 32,
                    online: true
                },
                Sarah:
                {
                    age: 48,
                    online: true
                },
                Ryan:
                {
                    age: 19,
                    online: true
                }
            },
            searchObjects: ['Alan', 'Sarah', 'Ryan', 'Jeff'],
            expected: true
        },
        {
            sampleObject:
            {
                Alan:
                {
                    age: 27,
                    online: true
                },
                Jeff:
                {
                    age: 32,
                    online: true
                },
                Sarah:
                {
                    age: 48,
                    online: true
                },
                Ryan:
                {
                    age: 19,
                    online: true
                }
            },
            searchObjects: ['Alan', 'Sara', 'Ryan', 'Jeff'], //Sara no h
            expected: false
        },
    ];

    tests.forEach(({ sampleObject, searchObjects, expected }) => {
        it(`should remove keys: ${searchObjects.toString()}`, () => {
            assert.equal(objectAppears(sampleObject, searchObjects), expected);
        });
    });
});

describe("Iterate Through the Keys of an Object with a for...in Statement", () => {
    const tests = [
        { sampleObject: { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }, expected: 1 },
        { sampleObject: { Alan: { online: true }, Jeff: { online: true }, Sarah: { online: false } }, expected: 2 },
        { sampleObject: { Alan: { online: true }, Jeff: { online: true }, Sarah: { online: true } }, expected: 3 },
        { sampleObject: { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }, expected: 0 },
    ];

    tests.forEach(({ sampleObject, expected }) => {
        it(`should return ${expected}`, () => {
            assert.equal(iterateThrough(sampleObject), expected);
        });
    });
});

describe("List Keys", () => {
    const tests = [
        { sampleObject: { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }, expected: ["Alan", "Jeff", "Sarah"] },
        { sampleObject: { Alan: { age: 27, online: false }, Jeff: { age: 32, online: true }, Sarah: { age: 48, online: false }, Ryan: { age: 19, online: true } }, expected: ["Alan", "Jeff", "Sarah", "Ryan"] },
    ];

    tests.forEach(({ sampleObject, expected }) => {
        it(`should return ${expected}`, () => {
            assert.deepEqual(listKeys(sampleObject), expected);
        });
    });
});