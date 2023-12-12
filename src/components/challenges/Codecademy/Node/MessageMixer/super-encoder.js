// Import the encryptors functions here.
import { caesarCipher, symbolCipher, reverseCipher } from "./encryptors.js";

export const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let encrypted = caesarCipher(str, 6);
    encrypted = reverseCipher(encrypted);
    encrypted = symbolCipher(encrypted);
    return encrypted;
}

export const decodeMessage = (str) => {
    // Use the encryptor functions here.
    let decrypted = symbolCipher(str);
    decrypted = reverseCipher(decrypted);
    decrypted = caesarCipher(decrypted, 20);
    return decrypted;
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str);
    }

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);