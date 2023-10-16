// Codecademy: Challenge Project: Credit Card Checker
// https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg.

export function validateCred(creditCardNumber) {
    // right to left
    // as you iterate left, every other digit is double (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
    // sum up all the digits in the number, if the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
    let sum = 0;
    let multiplier = 1;
    let checkNumber = creditCardNumber.slice();
    // console.log(`\n${creditCardNumber}`);
    for (let i = checkNumber.length - 1; i >= 0; i--) {
        let num = checkNumber[i] * multiplier;

        // console.log(`num: ${checkNumber[i]} multiplier: ${multiplier} numCalc: ${num}`);
        if (multiplier === 1) {
            sum += num;
            multiplier++;
        } else {
            if (num > 9) {
                num -= 9;
            }
            sum += num;
            multiplier--;
        }
        // console.log(`numCalc: ${num} total: ${sum}`);
    }
    // console.log(`${sum % 10 === 0}`);
    return sum % 10 === 0 ? "valid" : "invalid";
};

export function findInvalidCards(batch) {
    // Make an array of invalid credit card numbers
    let invalidCards = [];
    for (let i = 0; i < batch.length; i++) {
        if (validateCred(batch[i]) === "invalid") {
            invalidCards.push(batch[i]);
        }
    }
    return invalidCards;
};

export function idInvalidCardCompanies(array) {
    // return an array of companies which had a invalid card number, each should appear once only

    let companies = [];
    for (let i = 0; i < array.length; i++) {

        switch (array[i][0]) {
            case 3:
                !companies.includes("Amex (American Express)") ? companies.push("Amex (American Express)") : false;
                break;
            case 4:
                !companies.includes("Visa") ? companies.push("Visa") : false;
                break;
            case 5:
                !companies.includes("Mastercard") ? companies.push("Mastercard") : false;
                break;
            case 6:
                !companies.includes("Discover") ? companies.push("Discover") : false;
                break;
            default:
                !companies.includes("Company not found") ? companies.push("Company not found") : false;
                break;
        }
    }
    return companies;
};