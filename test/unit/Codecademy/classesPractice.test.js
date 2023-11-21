import { assert } from "chai";
import { Network, Player, balloonAttack, ShiftCipher } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/classesPractice.js";

describe("Network - Movie Time", () => {
    const tests = [
        { data: 50, users: 9, expected: false },
        { data: 50, users: 2, expected: true },
    ];

    tests.forEach(({ data, users, expected }) => {
        let example = new Network(data, users);
        it(`it should return ${expected}`, () => {
            assert.equal(example.movieTime(), expected);
        })
    });
});

describe("Player - Balloon Attack", () => {
    const tests = [
        { player1Name: "p1", player1HitsPerMinute: 5, player2Name: "p2", player2HitsPerMinute: 2, expected: "p1" },
        { player1Name: "Alan", player1HitsPerMinute: 5, player2Name: "Emma", player2HitsPerMinute: 5, expected: "Tie" },
        { player1Name: "Darth", player1HitsPerMinute: 3, player2Name: "Luke", player2HitsPerMinute: 5, expected: "Luke" },
    ];

    tests.forEach(({ player1Name, player1HitsPerMinute, player2Name, player2HitsPerMinute, expected }) => {
        let player1 = new Player(player1Name, player1HitsPerMinute);
        let player2 = new Player(player2Name, player2HitsPerMinute);
        it(`it should return ${expected}`, () => {
            assert.equal(balloonAttack(player1, player2), expected);
        })
    });
});

describe("ShiftCipher", () => {
    const tests = [
        { shift: 2, decrypted: "I love to code!", encrypted: "K NQXG VQ EQFG!" },
        { shift: 2, decrypted: "i <3 my puppy", encrypted: "K <3 OA RWRRA" },
        { shift: 1, decrypted: "z", encrypted: "a" },
        { shift: 5, decrypted: "hello!", encrypted: "MJQQT!" },
        { shift: 1, decrypted: "12345", encrypted: "12345" },
        { shift: 26, decrypted: "hello!", encrypted: "HELLO!" },
    ];

    describe("encrypt", () => {
        tests.forEach(({ shift, decrypted, encrypted }) => {
            let cipher = new ShiftCipher(shift);
            it(`it should return ${encrypted}`, () => {
                assert.equal(cipher.encrypt(decrypted), encrypted.toUpperCase());
            })
        });
    });

    describe("decrypt", () => {
        tests.forEach(({ shift, decrypted, encrypted }) => {
            let cipher = new ShiftCipher(shift);
            it(`it should return ${decrypted}`, () => {
                assert.equal(cipher.decrypt(encrypted), decrypted.toLowerCase());
            })
        });
    });
});