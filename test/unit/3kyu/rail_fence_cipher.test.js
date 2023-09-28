import { assert } from "chai";
import {encodeRailFenceCipher, decodeRailFenceCipher} from "../../../src/components/challenges/Codewars/3 kyu/rail_fence_cipher.js";

// CODEWARS: Rail Fence Cipher: Encoding and Decoding
describe("Rail Fence Cipher: Encode", () => {
    const tests = [
        { arg: ["WEAREDISCOVEREDFLEEATONCE", 3], expected: "WECRLTEERDSOEEFEAOCAIVDEN" },
        { arg: ["Hello, World!", 3], expected: "Hoo!el,Wrdl l" },
        { arg: ["Hello, World!", 4], expected: "H !e,Wdloollr" },
        { arg: ["", 3], expected: "" },
        { arg: ["ABC", 3], expected: "ABC" },
        { arg: ["AB", 2], expected: "AB" },
        { arg: ["Today is gonna be the day that they're gonna throw it back to you And by now, you should've somehow realised what you gotta do I don't believe that anybody feels the way I do about you now", 15], expected: "Tacotvyohtakhua eea dt b slhyi wIa t t dwolt  yyhtou' uehed aei ovd bahoidy yyeeg tt s 'wo  sot  a erou,sit'asbgher woltnnlowot hAomaaoyeuon gtnnee dbetnneo d hrd of  abna yo oId yu nbw yo" },
        { arg: ["Todayisgonnabethedaythatthey'regonnathrowitbacktoyouAndbynow,youshould'vesomehowrealisedwhatyougottadoIdon'tbelievethatanybodyfeelsthewayIdoaboutyounow", 15], expected: "T'yieaoyrbnlsivobdeedoaeledoahgnwedetIuytoA,rwbhytitnuywhtaaysanoooa'twoghayuhtnaeuottoseyonhnnyhthmodytonarkoouIbswadocusgoolbewaleoddeehibdvtayett'tf" },
    ];

    tests.forEach(({ arg }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(encodeRailFenceCipher(arg[0], arg[1]));
        })
    });

    tests.forEach(({ arg, expected }) => {
        it(`${arg[0]} (${arg[1]}) should return ${expected}`, () => {
            assert.equal(encodeRailFenceCipher(arg[0], arg[1]), expected);
        });
    });
});

describe("Rail Fence Cipher: Decode", () => {
    const tests = [
        { arg: ["WECRLTEERDSOEEFEAOCAIVDEN", 3], expected: "WEAREDISCOVEREDFLEEATONCE" },
        { arg: ["Hoo!el,Wrdl l", 3], expected: "Hello, World!" },
        { arg: ["H !e,Wdloollr", 4], expected: "Hello, World!" },
        { arg: ["", 3], expected: "" },
        { arg: ["ABC", 3], expected: "ABC" },
        { arg: ["AB", 2], expected: "AB" },
        { arg: ["Tacotvyohtakhua eea dt b slhyi wIa t t dwolt  yyhtou' uehed aei ovd bahoidy yyeeg tt s 'wo  sot  a erou,sit'asbgher woltnnlowot hAomaaoyeuon gtnnee dbetnneo d hrd of  abna yo oId yu nbw yo", 15], expected: "Today is gonna be the day that they're gonna throw it back to you And by now, you should've somehow realised what you gotta do I don't believe that anybody feels the way I do about you now" },
        { arg: ["T'yieaoyrbnlsivobdeedoaeledoahgnwedetIuytoA,rwbhytitnuywhtaaysanoooa'twoghayuhtnaeuottoseyonhnnyhthmodytonarkoouIbswadocusgoolbewaleoddeehibdvtayett'tf", 15], expected: "Todayisgonnabethedaythatthey'regonnathrowitbacktoyouAndbynow,youshould'vesomehowrealisedwhatyougottadoIdon'tbelievethatanybodyfeelsthewayIdoaboutyounow" },
    ];

    tests.forEach(({ arg }) => {
        it(`DATATYPE: It should return a String`, () => {
            assert.isString(decodeRailFenceCipher(arg[0], arg[1]));
        })
    });

    tests.forEach(({ arg, expected }) => {
        it(`${arg[0]} (${arg[1]}) should return ${expected}`, () => {
            assert.equal(decodeRailFenceCipher(arg[0], arg[1]), expected);
        });
    });
});