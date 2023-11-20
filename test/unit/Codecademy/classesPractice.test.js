import { assert } from "chai";
import { Network, Player, balloonAttack } from "../../../src/components/challenges/Codecademy/JavaScriptFundamentals/classesPractice.js";

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