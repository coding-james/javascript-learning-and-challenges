// CODEWARS: Highest and Lowest

export default function highAndLow(numbers) {
  const numArray = numbers.split(" ");
  for (let i = 0; i < numArray.length; i++) {
    numArray.splice(i, 1, parseInt(numArray[i]));
  }
  return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
}