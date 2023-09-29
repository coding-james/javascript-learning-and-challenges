let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
export function generateTarget() {
    return Math.floor(Math.random() * 10);
};

export function compareGuesses(userGuess, computerGuess, secretTarget) {
    // works out who wins, either closer to the target or if equal user wins
    // return true if user wins, false if computer wins
    const userDiff = Math.abs(secretTarget - userGuess);
    const computerDiff = Math.abs(secretTarget - computerGuess);
    return userDiff <= computerDiff;
};

export function updateScore(winner) {
    if (winner == "human") {
        humanScore++;
    } else {
        computerScore++;
    }
};

export function advanceRound() {
    currentRoundNumber++;
};