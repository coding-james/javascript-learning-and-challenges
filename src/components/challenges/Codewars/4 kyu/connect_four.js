export function whoIsWinner(piecesPositionList) {
    let frame = [["empty", "empty", "empty", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "empty"]];

    const columns = ["A", "B", "C", "D", "E", "F", "G"];
    let columnsPlayed = [];
    let rowPlayed = 5;

    for (let index = 0; index < piecesPositionList.length; index++) {
        const column = columns.indexOf(piecesPositionList[index].substr(0, 1));
        const colour = piecesPositionList[index].substr(2, 1) == "R" ? "Red" : "Yellow";


        // add to column
        for (let row = 5; row >= 0; row--) {
            if (frame[row][column] == "empty") {
                frame[row][column] = colour;
                rowPlayed = Math.min(row, rowPlayed);
                if (columnsPlayed.indexOf(column) == -1) {
                    columnsPlayed.push(column);
                }
                break;
            }
        }

        // starting from 4th play, start checking for four in a sequence
        if (index >= 3) {
            let result = "No Winner";

            // check rows
            for (let row = 5; row >= rowPlayed; row--) {
                for (let col = 0; col < 4; col++) {
                    result = checks(row, col, row, col + 1, row, col + 2, row, col + 3, frame);

                    if (result != "No Winner") {
                        return result;
                    }
                }
            }

            // check columns
            for (let index = 0; index < columnsPlayed.length; index++) {
                let col = columnsPlayed[index];
                for (let row = 5; row >= 3; row--) {
                    result = checks(row, col, row - 1, col, row - 2, col, row - 3, col, frame);

                    if (result != "No Winner") {
                        return result;
                    }
                }
            }

            // check diagonal Down L to R
            for (let col = 0; col < 4; col++) {
                for (let row = 0; row < 3; row++) {
                    result = checks(row, col, row + 1, col + 1, row + 2, col + 2, row + 3, col + 3, frame);

                    if (result != "No Winner") {
                        return result;
                    }
                }
            }

            // check diagonal Up L to R
            for (let row = 3; row < 6; row++) {
                for (let col = 0; col < 4; col++) {
                    result = checks(row, col, row - 1, col + 1, row - 2, col + 2, row - 3, col + 3, frame);

                    if (result != "No Winner") {
                        return result;
                    }
                }
            }
        }
    }
    return "Draw";
}

export function checks(row0, col0, row1, col1, row2, col2, row3, col3, frame) {
    const first = frame[row0][col0];
    if (first != "" && first == frame[row1][col1] && first == frame[row2][col2] && first == frame[row3][col3]) {
        return first;
    } else {
        return "No Winner";
    }
}