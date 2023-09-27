// CODEWARS: Next smaller number with the same digits

export default function nextSmaller(n) {
    let nStr = n.toString();
    let digits = [];
    let subsection = [];
    let result = "";

    //take each digit and add to digits
    for (let index = 0; index < nStr.length; index++) {
        digits.push(parseInt(nStr.charAt(index)));
    }

    // from right to left, check for a higher digit, add to subList until a higher digit found then replace
    for (let index = digits.length - 1; index > 0; index--) {
        if (digits[index] < digits[index - 1]) {
            subsection.push(digits[index]);
            subsection.push(digits[index - 1]);
            subsection.sort().reverse();

            //  if digits[i] is larger than subsection digit, then replace and remove from list
            // then replace remaining digits nums with subsection nums
            for (let iSub = 0; iSub < subsection.length; iSub++) {
                if (digits[index - 1] > subsection[iSub]) {
                    digits[index - 1] = subsection[iSub];
                    subsection.splice(iSub, 1);

                    subsection.forEach(element => {
                        digits[index] = element;
                        index++;
                    });

                    digits.forEach(element => {
                        result += element.toString();
                    });
                    return result.charAt(0) != 0 ? parseInt(result) : -1;
                } else {
                    continue;
                }
            }
        } else {
            subsection.push(digits[index]);
        }
    }
    return -1;
}