import { expect, assert } from "chai";
import disemvowel from "../../../src/components/challenges/Codewars/7 kyu/disemvowel_trolls.js";

// CODEWARS: Disemvowel Trolls
describe("Disemvowel Trolls Tests", () => {
    const tests = [
        { arg: "This website is for losers LOL!", expected: "Ths wbst s fr lsrs LL!" },
        { arg: "No offense but,\nYour writing is among the worst I've ever read", expected: "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd" },
        { arg: "What are you, a communist?", expected: "Wht r y,  cmmnst?" }
    ];

    tests.forEach(({ arg, expected }) => {
        const result = disemvowel(arg);
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});