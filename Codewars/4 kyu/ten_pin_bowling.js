// CODEWARS: Ten-Pin Bowling
function bowlingScore(frames) {
    let plays = frames.replace("XXX", "X X X").replace(" XX", " X X ").split(" ");  // Split string out and replace
    let scores = [];
    let score = 0;

    // Scenario of spare in play 10
    if (plays[plays.length - 1].length == 3) {
        let index = plays.length - 1;
        if (plays[index].substr(2, 1) == "/") {
            plays[index] == plays[index].substr(0, 1); // if / at end, split into 1 then 2
            plays.push(plays[index].substr(1, 2));
        } else {
            plays[index] == plays[index].substr(0, 2); // if / in middle, split 2 then 1
            plays.push(plays[index].substr(2, 1));
        }
    }

    for (let index = 0; index < plays.length; index++) {
        if (plays[index].includes("X") || plays[index].includes("/")) {
            scores.push(10);
        } else {
            scores.push((plays[index].substr(0, 1) * 1) + (plays[index].substr(1, 1) * 1)); // Split out play again for each ball
        }
    }

    for (let index = 0; index < scores.length; index++) {
        if (index < 9 && plays[index] == "X" && plays[index + 1] == "X" && plays[index + 2] == "X") {
            score += (scores[index] + scores[index + 1] + scores[index + 2]); // add strike score + bonuses (10 + next two STRIKE balls)
        } else if (index < 9 && plays[index] == "X" && plays[index + 1] == "X") {
            score += (scores[index] + scores[index + 1] + plays[index + 2].substr(0, 1) * 1); // add strike score + bonuses (10 + next two balls - first is a STRIKE)
        } else if (index < 9 && plays[index] == "X") {
            score += (scores[index] + scores[index + 1]); // add strike score + bonuses (10 + next two balls)
        } else if (index < 9 && plays[index].includes("/") && plays[index + 1] == "X") {
            score += (scores[index] + scores[index + 1]); // add spare score + bonus (10 + next one ball STRIKE)
        } else if (index < 9 && plays[index].includes("/")) {
            score += (scores[index] + (plays[index + 1].substr(0, 1) * 1)); // add spare score + bonus (10 + next one ball)
        } else {
            score += scores[index];
        }
    }
    // console.log(`FRAMES: ${frames}. SCORE: ${score}`);
    return score;
}
module.exports = bowlingScore;