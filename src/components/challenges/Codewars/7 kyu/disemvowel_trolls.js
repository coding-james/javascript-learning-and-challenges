// CODEWARS - Disemvowel Trolls

export default function disemvowel(str) {
  if (str.length > 0) {
    return str = str.replace(/a|e|i|o|u/gi, "");
  }
}