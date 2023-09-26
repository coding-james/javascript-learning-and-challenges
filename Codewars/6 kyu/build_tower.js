// CODEWARS: Build Tower
function towerBuilder(nFloors) {
    let towerArray = [];
    let spaces = nFloors - 1;
    let star = "*";

    for (let floors = 0; floors < nFloors; floors++) {
        towerArray.push("".padStart(spaces) + star + "".padEnd(spaces));
        spaces--;
        star += "**";
    }

    return towerArray;
}

module.exports = towerBuilder;