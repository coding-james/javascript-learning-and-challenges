// CODEWARS: Human readable duration format

export function formatDuration(seconds) {
    let durList = [];
    let dayInSec = 86400;
    let yearInSec = dayInSec * 365;
    let hourInSec = 3600;
    let minInSec = 60;

    //years
    let years = parseInt(Math.floor(seconds / (yearInSec)));
    let remainder = parseFloat((seconds - (years * (yearInSec))) % (yearInSec));

    //days
    let days = parseInt(Math.floor(remainder) / dayInSec);
    remainder = parseFloat(remainder % dayInSec);

    //hours
    let hours = parseInt(Math.floor(remainder) / hourInSec);
    remainder = parseFloat(remainder % hourInSec);

    //mins
    let mins = parseInt(Math.floor(remainder) / minInSec);
    remainder = parseFloat(remainder % minInSec);

    //secs
    let sec = parseInt(remainder % minInSec);

    if (seconds == 0) {
        return "now";
    } else {
        durList.push(ConvertTime(years, "year"));
        durList.push(ConvertTime(days, "day"));
        durList.push(ConvertTime(hours, "hour"));
        durList.push(ConvertTime(mins, "minute"));
        durList.push(ConvertTime(sec, "second"));
        durList = durList.filter(e => e !== "remove"); // remove any elements which say "remove"
    }

    let result = "";
    for (let index = 0; index < durList.length; index++) {
        if (index <= durList.length - 3) {
            result += `${durList[index]}, `;
        } else if (index == durList.length - 1 && durList.length != 1) {
            result += ` and ${durList[index]}`;
        } else {
            result += `${durList[index]}`;
        }
    }

    return result;
}

export function ConvertTime(time, type) {
    if (time > 0 && time <= 1) {
        return `${time} ${type}`;
    } else if (time > 1) {
        return `${time} ${type}s`;
    } else {
        return "remove";
    }
}