function CheckBoard(frame) {

    let result = "No Winner";

    // check rows
    for (let row = 5; row >= 0; row--) {
        for (let col = 0; col < 4; col++) {
            result = checks(row, col, row, col + 1, row, col + 2, row, col + 3, frame);

            if (result != "No Winner") {
                return result;
            }
        }
    }

    // check columns
    for (let col = 0; col < 6; col++) {
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

    return result;
}

export function checks(row0, col0, row1, col1, row2, col2, row3, col3, frame) {
    const first = frame[row0][col0];
    if (first != "" && first == frame[row1][col1] && first == frame[row2][col2] && first == frame[row3][col3]) {
        return first;
    } else {
        return "No Winner";
    }
}

export default CheckBoard;