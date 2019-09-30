/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
  const sortedArr = arr.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] % num === 0) {
      return sortedArr[i];
    }
  }
  return null;
}

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };
