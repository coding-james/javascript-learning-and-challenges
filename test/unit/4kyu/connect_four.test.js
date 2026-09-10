import { assert } from "chai";
import { whoIsWinner, checks } from "../../../src/components/challenges/Codewars/4 kyu/connect_four.js";

describe("Connect Four", () => {

    it("Yellow wins", function () {
        assert.strictEqual(whoIsWinner(["C_Yellow",
            "E_Red",
            "G_Yellow",
            "B_Red",
            "D_Yellow",
            "B_Red",
            "B_Yellow",
            "G_Red",
            "C_Yellow",
            "C_Red",
            "D_Yellow",
            "F_Red",
            "E_Yellow",
            "A_Red",
            "A_Yellow",
            "G_Red",
            "A_Yellow",
            "F_Red",
            "F_Yellow",
            "D_Red",
            "B_Yellow",
            "E_Red",
            "D_Yellow",
            "A_Red",
            "G_Yellow",
            "D_Red",
            "D_Yellow",
            "C_Red"]), "Yellow");
    });

    it("Red wins", function () {
        assert.strictEqual(whoIsWinner(["A_Yellow",
            "B_Red",
            "B_Yellow",
            "C_Red",
            "G_Yellow",
            "C_Red",
            "C_Yellow",
            "D_Red",
            "G_Yellow",
            "D_Red",
            "G_Yellow",
            "D_Red",
            "F_Yellow",
            "E_Red",
            "D_Yellow"]), "Red");
    });

    it("Draw", function () {
        assert.strictEqual(whoIsWinner(["A_Red",
            "B_Yellow",
            "A_Red",
            "E_Yellow",
            "F_Red",
            "G_Yellow"]), "Draw");
    });
});