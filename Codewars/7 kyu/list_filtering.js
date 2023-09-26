// CODEWARS: List Filtering
function filter_list(l) {
    // Return a new array with the strings filtered out
    let filtered = [];
    for (let i = 0; i <= l.length; i++) {
        if (typeof l[i] === "number") {
            filtered.push(l[i]);
        }
    }
    return filtered;
}

module.exports = filter_list;