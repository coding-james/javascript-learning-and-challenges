import prompt from 'prompt-sync';
// https://copyprogramming.com/howto/cannot-find-module-prompt-sync#convert-prompt-sync-require-into-import-method

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        for (let index = 0; index < this.field.length; index++) {
            console.log(this.field[index].join().replaceAll(",", ""));
        }
    }

    generateField(height, width, holePercentage) {
        // create array height (rows) + width (columns), make all fieldCharacter
        let fieldSetup = [];
        for (let i = 0; i < height; i++) {
            let tmpArry = [];
            for (let j = 0; j < width; j++) {
                tmpArry.push(fieldCharacter);
            };
            fieldSetup.push(tmpArry);
        }

        // randomise hat location
        fieldSetup[RandomNumber(0, height - 1)][RandomNumber(0, width - 1)] = hat;

        // if field[0][0] not fieldCharacter, change location of start to next fieldCharacter
        if (fieldSetup[0][0] == fieldCharacter) {
            fieldSetup[0][0] = pathCharacter;
        } else {
            fieldSetup[0][1] = pathCharacter;
        }

        // randomise hole(s) based on % coverage
        let holesToPlace = Math.min(Math.floor((height * width) * (holePercentage / 100)), (height * width) - 2);
        while (holesToPlace > 0) {
            let x = RandomNumber(0, height);
            let y = RandomNumber(0, width);

            // if field position == fieldCharacter, reduce holesToPlace // future add in likelihood
            if (fieldSetup[x][y] == fieldCharacter) {
                fieldSetup[x][y] = hole;
                holesToPlace--;
            }
        }

        this.field = fieldSetup;
    }
}

console.log("Which direction would you like to move?");
let game = new Field();
game.generateField(5, 5, 10);
game.print();
let currentPos = game.field[0][0] == pathCharacter ? [0, 0] : [0, 1];

let playGame = (userInput) => {
    let input = userInput.toString().trim();
    currentPosX = currentPos[0];
    currentPosY = currentPos[1];

    switch (input) {
        case "u":
            currentPos[0] = currentPosX + 1;
            break;
        case "d":
            currentPos[0] = currentPosX - 1;
            break;
        case "l":
            currentPos[1] = currentPosY - 1;
            break;
        case "r":
            currentPos[1] = currentPosY + 1;
            break;
        default:
            console.log("Invalid selection, try again");
            break;
    }
    // mark position
    // check if
    //      > found hat = win
    //      > land on hole = lose
    //      > attempts to move outside field
    // print map
    // next move (if not ended)
};

// Random Number Generator
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Check Outcome
function CheckOutcome(array) {

    switch (currentPos) {
        case hat:
            console.log("You Win!");
            break;
        case hole:
            console.log("You lose :(");
        case pathCharacter:
            console.log("Which direction would you like to move?");
        case fieldCharacter:
            // replace with pathCharacter
            console.log("Which direction would you like to move?");
        default:
            console.log("Invalid move, you must stay within the field");
            break;
    }
}

// game.print();

// for (let index = 0; index < 10; index++) {
//     console.log(`\nGame ${index + 1}`);
//     game.generateField(3,3,50);
//     game.print();
// }