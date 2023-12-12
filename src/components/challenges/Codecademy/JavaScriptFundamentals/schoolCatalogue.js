class School {
    constructor(name, level, numberOfStudents, schoolOverview) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        // this._averageTestScores = [];
        this._schoolOverview = schoolOverview;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        if (typeof value == "number") {
            this._numberOfStudents = value;
        } else {
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }
    }

    quickFacts() {
        return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`;
    }

    pickSubstituteTeacher(substituteTeachers) {
        const selectedSubTeacher = Math.floor(
            substituteTeachers.length * Math.random()
        );
        return substituteTeachers[selectedSubTeacher];
    }

    calcAverageTestScore(testScores) {
        let sum = testScores.reduce(
            (currentSum, testScore) => currentSum + testScore,
            0
        );
        return (sum / testScores.length).toFixed(2);
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "middle", numberOfStudents);
    }
}

// Example PrimarySchool
const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
console.log(`\nSchool: ${lorraineHansbury.name} Type:  ${lorraineHansbury.level} Pick Up Policy: ${lorraineHansbury.pickupPolicy}`);
let subTeachersArr = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log(`Substitiute Teacher: ${lorraineHansbury.pickSubstituteTeacher(subTeachersArr)}`);


// Example HighSchool
const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(`\nSchool: ${alSmith.name} Type:  ${alSmith.level} Sport Teams: ${alSmith.sportsTeams}`);
let resultsArr = [90, 88, 89, 88];
console.log(`Average Test Result: ${alSmith.calcAverageTestScore(resultsArr)}`);