// CODEWARS - Disemvowel Trolls

function disemvowel(str) {
  if (str.length > 0) {
    return str = str.replace(/a|e|i|o|u/gi, "");
  }
}

module.exports = disemvowel;