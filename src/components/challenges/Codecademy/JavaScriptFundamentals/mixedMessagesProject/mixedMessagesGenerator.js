import topMovieQuote from "./topMovieQuotes.json" assert { type: "json" };
import weather from "./weather.json" assert { type: "json" };
import dinners from "./dinners.json" assert { type: "json" };

// For this project, you will build a message generator program. 
// Every time a user runs a program, they should get a new, randomized output.
// To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.

export function MessageGen() {
    return `Movie Quote of the Day: ${SelectItem(topMovieQuote)}\nWeather Forecast: ${WeatherReport(SelectItem(weather))}\nDinner Suggestion: ${SelectItem(dinners)}`;
}

// Random Number Generator
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Select random line from selected list
function SelectItem(list) {
    return list[RandomNumber(0, list.length)];
};

// Weather Report Generator
function WeatherReport(weatherType) {
    let windspeedArr = ["calm", "light air", "a light breeze", "a gentle breeze", "a moderate breeze", "a fresh breeze", "a strong breeze", "near gales", "gales", "strong gales", "a storm", "violent storms", "a hurricane"];
    let directionArr = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];
    let windspeed = SelectItem(windspeedArr);
    let direction = windspeed == "calm" ? "" : ` from the ${SelectItem(directionArr)}`;
    let min;
    let max;

    if (weather.indexOf(weatherType) <= 8) {
        min = RandomNumber(-10, 5);
    } else if (weather.indexOf(weatherType) >= 21) {
        min = RandomNumber(15, 18);
    } else {
        min = RandomNumber(4, 15);
    }
    max = RandomNumber(min + 3, min + 10);

    return `Today's weather will be ${weatherType}, ${windspeed}${direction}, temperature: a min of ${min}°C and max of ${max}°C`;
}

console.log(MessageGen());