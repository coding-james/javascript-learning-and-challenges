// import prompt from 'prompt-sync';
// https://copyprogramming.com/howto/cannot-find-module-prompt-sync#convert-prompt-sync-require-into-import-method

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let validMoves = ["u", "d", "l", "r"];
let currentPosX = 0;
let currentPosY = 0;
let requestInput = "Which direction would you like to move? u = up, d = down, l = left, r = right";

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

let game = new Field();
game.generateField(5, 5, 10);
game.print();
console.log(requestInput);

if (game.field[currentPosX][currentPosY] !== pathCharacter) {
    currentPosY++;
}

let playGame = (userInput) => {
    let input = userInput.toString().trim().toLowerCase();
    if (!validMoves.includes(input)) {
        process.stdout.write("Invalid selection, try again");
    } else {
        switch (input) {
            case "u":
                currentPosX -= 1;
                CheckOutcome(currentPosX, currentPosY);
                break;
            case "d":
                currentPosX += 1;
                CheckOutcome(currentPosX, currentPosY);
                break;
            case "l":
                currentPosY -= 1;
                CheckOutcome(currentPosX, currentPosY);
                break;
            case "r":
                currentPosY += 1;
                CheckOutcome(currentPosX, currentPosY);
                break;
            default:
                // TODO: Update to pick up if out of map
                console.log("Invalid selection, try again");
                break;
        }
    }
};

// Random Number Generator
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Check Outcome
function CheckOutcome(x, y) {
    let checkPos = game.field[x][y];
    switch (checkPos) {
        case hat:
            console.log("You Win!");
            process.exit();
        case hole:
            console.log("You lose :(");
            process.exit();
        case pathCharacter:
            console.clear();
            game.print();
            console.log(requestInput);
        case fieldCharacter:
            game.field[x][y] = pathCharacter;
            console.clear();
            game.print();
            console.log(requestInput);
            break;
        default:
            console.log("Invalid move, you must stay within the field");
            game.print();
            break;
    }
}

process.stdin.on('data', playGame);