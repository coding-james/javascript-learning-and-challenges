// CODEWARS: The Hashtag Generator
function generateHashtag(str) {
    if (str.trim().length < 1) {
        return false
    } else {
        let strArray = str.trim().toLowerCase().split(" ");
        let result = "#";
        for (i = 0; i < strArray.length; i++) {
            result += strArray[i].substr(0, 1).toUpperCase() + strArray[i].substr(1, strArray[i].length - 1);
        }

        if (result.length > 0 && result.length <= 140) {
            return result;
        } else {
            return false;
        }
    }
}
module.exports = generateHashtag;