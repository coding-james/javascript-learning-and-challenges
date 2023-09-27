// CODEWARS: Mexican Wave
export default function wave(str) {
  let result = [];

  // of string empty, return empty array
  if (!str) return [];

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != " ") {
      let start = str.substr(0, i);
      let end = str.substr(i + 1);
      result.push(start + str.charAt(i).toUpperCase() + end);
    }
  }
  return result;
}