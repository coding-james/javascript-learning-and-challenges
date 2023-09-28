export function canIVote(age) {
    return age >= 18 ? true : false;
};

export function agreeOrDisagree(string1, string2) {
    return string1 === string2 ? "You agree!" : "You disagree!";
};

export function lifePhase(age) {
    if (age < 0 || age > 140) {
        return "This is not a valid age";
    } else if (age >= 0 && age <= 3) {
        return "baby";
    } else if (age <= 12) {
        return "child";
    } else if (age <= 19) {
        return "teen";
    } else if (age <= 64) {
        return "adult";
    } else {
        return "senior citizen";
    }
};

export function finalGrade(score1, score2, score3) {
    if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100 || score3 < 0 || score3 > 100) {
        return "You have entered an invalid grade.";
    }

    let avgScore = (score1 + score2 + score3) / 3;

    if (avgScore >= 90) {
        return "A";
    } else if (avgScore >= 80) {
        return "B";
    } else if (avgScore >= 70) {
        return "C";
    } else if (avgScore >= 60) {
        return "D";
    } else {
        return "F";
    }
};

export function reportingForDuty(rank, name) {
    return `${rank} ${name} reporting for duty!`;
};

export function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case "Mercury":
            return earthWeight * 0.378;
        case "Venus":
            return earthWeight * 0.907;
        case "Mars":
            return earthWeight * 0.377;
        case "Jupiter":
            return earthWeight * 2.36;
        case "Saturn":
            return earthWeight * 0.916;
        default:
            return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    }
};

export function truthyOrFalsy(arg) {
    return arg ? true : false;
};

export function numImaginaryFriends(num) {
    return num > 0 ? Math.ceil(num / 4) : 0;
};

export function sillySentence(adj, verb, noun) {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};

export function howOld(age, year) {
    const currentYear = 2023
    if (year > currentYear) {
        return `You will be ${age + (year - currentYear)} in the year ${year}`;
    } else if (year < currentYear && currentYear - age > year) {
        return `The year ${year} was ${(currentYear - age) - year} years before you were born`;
    } else if (year < currentYear && currentYear - age < year) {
        return `You were ${year - (currentYear - age)} in the year ${year}`;
    } else {
        return `It is ${year} and your age is ${age}`;
    }
};

export const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    } else if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.';
    } else if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    } else if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.';
    } else if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.';
    } else if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins.';
    } else {
        return 'You are likely not related.';
    }
};

export function tipCalculator(quality, cost) {
    switch (quality) {
        case "excellent":
            return cost * 0.3;
        case "good":
            return cost * 0.2;
        case "ok":
            return cost * 0.15;
        case "bad":
            return cost * 0.05;
        default:
            return cost * 0.18;
    };
};

export function toEmoticon(string) {
    switch (string) {
        case "shrug":
            return '|_{"}_|';
        case "smiley face":
            return ":)";
        case "frowny face":
            return ":(";
        case "winky face":
            return ";)";
        case "heart":
            return "<3";
        default:
            return "|_(* ~ *)_|";
    };
};

export function colorMessage(color1, color2) {
    return color1 === color2 ? "The shirt is your favorite color!" : "That is a nice color.";
};

export function isEven(number) {
    return number % 2 == 0 ? true : false;
};

export function numberDigits(num) {
    if (num >= 0 && num <= 9) {
        return `One digit: ${num}`;
    } else if (num >= 10 && num <= 99) {
        return `Two digits: ${num}`;
    } else {
        return `The number is: ${num}`;
    }
};