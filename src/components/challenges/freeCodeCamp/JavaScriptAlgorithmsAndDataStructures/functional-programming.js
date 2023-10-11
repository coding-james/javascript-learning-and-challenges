import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const filmList = require('../../../../assets/data/films.json');

// import filmList from './films.json' with { type: "json" };
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file

// incrementer should return fixedValue increased by 1, but not modify fixedValue
let fixedValue = 4; // The global variable

export function incrementer() {
    return fixedValue + 1;
}

// Pass Arguments to Avoid External Dependence in a Function - Principle always declare your dependencies explicitly
let fixedValue2 = 4; // The global variable

export function incrementer2(fixedValue2) {
    return fixedValue2 + 1;
}

// Refactor Global Variables Out of Functions - Principe: Don't alter a variable or object - create new variables and objects and return them if need be from a function.
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// function add(bookName) {
export function addBook(bookList, bookName) {
    let newBookList = [...bookList];
    // bookList.push(bookName);
    newBookList.push(bookName);
    // return bookList;
    return newBookList;
}

// function remove(bookName) {
export function removeBook(bookList, bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
        let newBookList = [...bookList];
        // bookList.splice(book_index, 1);
        newBookList.splice(book_index, 1);
        // return bookList;
        return newBookList;
    }
}


// Use the map Method to Extract Data from an Array
// OLD for loop
// const ratingsOLD = [];
// for (let i = 0; i < filmList.length; i++) {
//     ratingsOLD.push({ title: filmList[i]["Title"], rating: filmList[i]["imdbRating"] });
// }

// NEW map
const ratings = filmList.map(item => ({ title: item["Title"], rating: item["imdbRating"] }));
console.log(JSON.stringify(ratings));

export function filmRatings(inputList) {
    const ratings = inputList.map(item => ({ title: item["Title"], rating: item["imdbRating"] }));
    return ratings;
}


// Implement map on a Prototype
Array.prototype.myMap = function (callback) {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
};

// [23, 65, 98, 5, 13].myMap(item => item * 2) should equal [46, 130, 196, 10, 26]
// ["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()) should return ["NAOMI", "QUINCY", "CAMPERBOT"]
// [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) should return [1, 2, 5, 2, 1]


// Use the filter Method to Extract Data from an Array
// map the titles and ratings of the filmList and filter to show only films with a rating of 8 or more
export function filmFilterByRating(inputList, inputRating) {
    const filteredList = inputList.map(item => ({ title: item["Title"], rating: item["imdbRating"] })).filter(item => item.rating >= inputRating);
    return filteredList;
};


// Implement the filter Method on a Prototype
Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this) == true) {
            newArray.push(this[index]);
        }
    }
    return newArray;
};

// [23, 65, 98, 5, 13].myFilter(item => item % 2) should equal [23, 65, 5, 13]
// ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi") should return ["naomi"]
// [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) should return [1, 2, 5]


// Return Part of an Array Using the slice Method
export function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}


// Remove Elements from an Array Using slice Instead of splice
export function nonMutatingSplice(cities) {
    // return cities.splice(3);
    return cities.slice(0, 3);
}

// Combine Two Arrays Using the concat Method
export function nonMutatingConcat(original, attach) {
    return original.concat(attach);
};


// Add Elements to the End of an Array Using concat Instead of push
export function nonMutatingPush(original, newItem) {
    // return original.push(newItem);
    return original.concat(newItem);
};


// Use the reduce Method to Analyze Data
export function getRating(watchList) {
    const filteredList = watchList.map(item => ({ title: item["Title"], director: item["Director"], imdbRating: item["imdbRating"] })).filter(item => item.director == "Christopher Nolan");
    let sum = filteredList.reduce((sum, item) => sum + parseFloat(item.imdbRating), 0);
    return sum / filteredList.length; // averageRating
};


// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
export const squareList = arr => {
    return arr
        .filter(num => num > 0 && num % 1 == 0) // remove negative and float numbers
        .map(num => (num * num)); // do square calc
};


// Sort an Array Alphabetically using the sort Method - mutates original array
export function alphabeticalOrder(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;;
    });
};


// Return a Sorted Array Without Changing the Original Array
export function nonMutatingSort(arr) {
    return [].concat(arr).sort(function (a, b) { // concat original array onto a blank array
        return a === b ? 0 : a < b ? -1 : 1;;
    });
};


// Split a String into an Array Using the split Method
export function splitify(str) {
    return str.split(/[^a-z]/gi);
    return str.split(/\W/); // \W == /[^A-Za-z0-9_]/ non-word character. This includes spaces and punctuation, but not underscores or digits
};


// Combine an Array into a String Using the join Method
export function sentensify(str) {
    return str
        .split(/[^a-z]/gi)
        .join(" ");
};


// Apply Functional Programming to Convert Strings to URL Slugs
export function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
};


// Use the every Method to Check that Every Element in an Array Meets a Criteria
export function checkPositive(arr) {
    // return arr.every(function(currentValue) {
    //         return currentValue > 0; 
    //     });

    return arr.every(val => val > 0); //more succient way. you can also use SOME instead of EVERY to test if some elements meet the criteria
};


// Introduction to Currying and Partial Application
export function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
};