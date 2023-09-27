// CODEWARS - Roman Numerals Encoder
// convert the number to a roman numeral
// https://en.wikipedia.org/wiki/Roman_numerals

export default function RomanNumerals(number) {
    const numberStr = number.toString();
    let result = "";

    for (let i = 0; i <= numberStr.length; i++) {
        let digit = numberStr.charAt(i);

        if (numberStr.length == 4 && i == 0) {
            switch (digit) {
                case "1":
                    result += "M";
                    break;
                case "2":
                    result += "MM";
                    break;
                case "3":
                    result += "MMM";
                    break;
                default:
                    break;
            }
        } else if (numberStr.length >= 3 && numberStr.length - i == 3) {
            switch (digit) {
                case "1":
                    result += "C";
                    break;
                case "2":
                    result += "CC";
                    break;
                case "3":
                    result += "CCC";
                    break;
                case "4":
                    result += "CD";
                    break;
                case "5":
                    result += "D";
                    break;
                case "6":
                    result += "DC";
                    break;
                case "7":
                    result += "DCC";
                    break;
                case "8":
                    result += "DCCC";
                    break;
                case "9":
                    result += "CM";
                    break;
                default:
                    break;
            }
        } else if (numberStr.length >= 2 && numberStr.length - i == 2) {
            switch (digit) {
                case "1":
                    result += "X";
                    break;
                case "2":
                    result += "XX";
                    break;
                case "3":
                    result += "XXX";
                    break;
                case "4":
                    result += "XL";
                    break;
                case "5":
                    result += "L";
                    break;
                case "6":
                    result += "LX";
                    break;
                case "7":
                    result += "LXX";
                    break;
                case "8":
                    result += "LXXX";
                    break;
                case "9":
                    result += "XC";
                    break;
                default:
                    break;
            }
        } else if (numberStr.length >= 1 && numberStr.length - i == 1) {
            switch (digit) {
                case "1":
                    result += "I";
                    break;
                case "2":
                    result += "II";
                    break;
                case "3":
                    result += "III";
                    break;
                case "4":
                    result += "IV";
                    break;
                case "5":
                    result += "V";
                    break;
                case "6":
                    result += "VI";
                    break;
                case "7":
                    result += "VII";
                    break;
                case "8":
                    result += "VIII";
                    break;
                case "9":
                    result += "IX";
                    break;
                default:
                    break;
            }
        } else {
            result += "";
        }
    }
    return result;
    // return `Digits = ${numberStr.length} - ${number} becomes ${result}`;
}