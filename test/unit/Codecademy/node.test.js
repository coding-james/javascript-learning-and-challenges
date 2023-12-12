import { assert } from "chai";
// import {} from "../../../src/components/challenges/Codecademy/Node/MessageMixer/message-mixer.js";
import { caesarCipher, symbolCipher, reverseCipher } from "../../../src/components/challenges/Codecademy/Node/MessageMixer/encryptors.js";
import { encodeMessage, decodeMessage } from "../../../src/components/challenges/Codecademy/Node/MessageMixer/super-encoder.js";

describe("Message Mixer", () => {

    describe("Caesar Cipher", () => {
        const tests = [
            { encrypted: "lipps asvph", decrypted: "hello world", shift: 4 },
            { encrypted: "hello world", decrypted: "hello world", shift: 0 },
            { encrypted: "great job!", decrypted: "cnawp fkx!", shift: 4 }
        ];

        tests.forEach(({ decrypted, shift }) => {
            it(`DATATYPE: It should return a string`, () => {
                assert.isString(caesarCipher(decrypted, shift));
            })
        });

        tests.forEach(({ decrypted, encrypted, shift }) => {
            it(`it should return ${encrypted}`, () => {
                assert.equal(caesarCipher(decrypted, shift), encrypted);
            });
        });
    });

    describe("Reverse Cipher", () => {
        const tests = [
            { encrypted: "olleh dlrow", decrypted: "hello world" },
            { encrypted: "god", decrypted: "dog" },
            { encrypted: "taerg !boj", decrypted: "great job!" }
        ];

        tests.forEach(({ decrypted }) => {
            it(`DATATYPE: It should return a string`, () => {
                assert.isString(reverseCipher(decrypted));
            })
        });

        tests.forEach(({ decrypted, encrypted }) => {
            it(`it should return ${encrypted}`, () => {
                assert.equal(reverseCipher(decrypted), encrypted);
            });
        });
    });

    describe("Symbol Cipher", () => {
        const tests = [
            { encrypted: "h3110 w0r1d", decrypted: "hello world" },
            { encrypted: "@pp13 $@uc3", decrypted: "apple sauce" },
            { encrypted: "gr3@t j06i", decrypted: "great job!" }
        ];

        tests.forEach(({ decrypted }) => {
            it(`DATATYPE: It should return a string`, () => {
                assert.isString(symbolCipher(decrypted));
            })
        });

        tests.forEach(({ decrypted, encrypted }) => {
            it(`it should return ${encrypted}`, () => {
                assert.equal(symbolCipher(decrypted), encrypted);
            });
        });
    });

    describe("Super Encoder", () => {
        describe("Encode", () => {
            const tests = [
                { encrypted: "urrkn jrxuc", decrypted: "hello world" }
            ];

            tests.forEach(({ decrypted }) => {
                it(`DATATYPE: It should return a string`, () => {
                    assert.isString(encodeMessage(decrypted));
                })
            });

            tests.forEach(({ decrypted, encrypted }) => {
                it(`it should return ${encrypted}`, () => {
                    assert.equal(encodeMessage(decrypted), encrypted);
                });
            });
        });

        describe("Decode", () => {
            const tests = [
                { encrypted: "urrkn jrxuc", decrypted: "hello world" }
            ];

            tests.forEach(({ encrypted }) => {
                it(`DATATYPE: It should return a string`, () => {
                    assert.isString(decodeMessage(encrypted));
                })
            });

            tests.forEach(({ decrypted, encrypted }) => {
                it(`it should return ${encrypted}`, () => {
                    assert.equal(decodeMessage(encrypted), decrypted);
                });
            });
        });
    });
});