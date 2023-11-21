// Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
export class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }

    // Insert code below
    movieTime() {
        return (this.data - (this.users * 5)) >= 10 ? true : false;
    }
}

/* Write a game function balloonAttack that takes two Player instances, 
calculates the balloons left for each player after 10 minutes 
(using the hitsPerMinute property) and returns the name of the winner. 
If the result is a tie, return the string 'Tie'. */
export class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
}

// Write function below
export function balloonAttack(player1, player2) {
    player1.balloonCount = player1.balloonCount - player2.hitsPerMinute * 10;
    player2.balloonCount = player2.balloonCount - player1.hitsPerMinute * 10;

    if (player1.balloonCount > player2.balloonCount) {
        return player1.name;
    } else if (player1.balloonCount < player2.balloonCount) {
        return player2.name;
    } else {
        return "Tie";
    }
}

/* 
Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:
    encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
    decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
    In both methods, any character outside the alphabet should remain the same.
    But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z. 
*/

// toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()
export class ShiftCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encrypt(string) {
        let arr = string.split("");
        let encryptedString = "";

        for (let i = 0; i < arr.length; i++) {
            let toBeEncrypted = false;
            let currentChar = string.charCodeAt(i);
            let encryptCharNo = currentChar + this.shift
            let encryptChar, max, min, caseShift;

            if (currentChar >= 97 && currentChar <= 122) {
                toBeEncrypted = true;
                max = 122;
                min = 96;
                caseShift = 32;
            } else if (currentChar >= 65 && currentChar <= 90) {
                toBeEncrypted = true;
                max = 90;
                min = 64;
                caseShift = 0;
            };

            if (toBeEncrypted) {
                if (encryptCharNo <= max) {
                    encryptChar = String.fromCharCode(encryptCharNo - caseShift);
                } else {
                    encryptCharNo -= (max - min);
                    encryptChar = String.fromCharCode(encryptCharNo - caseShift);
                }
                arr[i] = encryptChar;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            encryptedString += arr[i];
        }

        return encryptedString;
    }

    decrypt(string) {
        let arr = string.split("");
        let decryptedString = "";

        for (let i = 0; i < arr.length; i++) {
            let toBeDecrypted = false;
            let currentChar = string.charCodeAt(i);
            let decryptCharNo = currentChar - this.shift
            let decryptChar, max, min, caseShift;

            if (currentChar >= 97 && currentChar <= 122) {
                toBeDecrypted = true;
                max = 122;
                min = 96;
                caseShift = 0;
            } else if (currentChar >= 65 && currentChar <= 90) {
                toBeDecrypted = true;
                max = 90;
                min = 64;
                caseShift = 32;
            };

            if (toBeDecrypted) {
                if (decryptCharNo > min) {
                    decryptChar = String.fromCharCode(decryptCharNo + caseShift);
                } else {
                    decryptCharNo += (max - min);
                    decryptChar = String.fromCharCode(decryptCharNo + caseShift);
                }
                arr[i] = decryptChar;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            decryptedString += arr[i];
        }

        return decryptedString;
    }
}