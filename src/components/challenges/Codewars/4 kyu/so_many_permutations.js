// CODEWARS: So Many Permutations!
export function permutations(string) {
    if (!string) return []; // if string empty, return empty array
    let letters = string.split("");
    let result = [];
    result.push(string);

    for (let index = 0; index < letters.length; index++) {
        result = shuffle(letters, result);
        letters.push(string.charAt(index));
        letters.shift();
    }
    return result.sort();
}

export function shuffle(array, result) {
    if (!result.includes(array.join(""))) result.push(array.join(""));
    for (let i = 0; i < array.length; i++) {
        for (let s = 0; s < array.length; s++) {
            if (i != s) {
                let tmpString = array.join("");
                let indexCh = tmpString.charAt(i);
                let switchCh = tmpString.charAt(s);
                tmpString = tmpString.substr(0, i) + switchCh + tmpString.substr(i + 1);
                tmpString = tmpString.substr(0, s) + indexCh + tmpString.substr(s + 1);

                if (!result.includes(tmpString)) result.push(tmpString);
            }
        }
    }
    return result.sort();
}