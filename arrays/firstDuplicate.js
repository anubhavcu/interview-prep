// Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.

// If no integer appears more than once, your function should return -1.

// Note that you're allowed to mutate the input array.

// Sample Input #1
// array = [2, 1, 5, 2, 3, 3, 4]
// Sample Output #1
// 2 // 2 is the first integer that appears more than once.
// 3 also appears more than once, but the second 3 appears after the second 2.
// Sample Input #2
// array = [2, 1, 5, 3, 3, 2, 4]
// Sample Output #2
// 3 // 3 is the first integer that appears more than once.
// 2 also appears more than once, but the second 2 appears after the second 3.

//* solutions

// O(n^2) time | O(1) space - where n is the length of the input array
// function firstDuplicateValue(array) {
//   let minimumSecondIndex = array.length;
//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       const valueToCompare = array[j];
//       if (value === valueToCompare) {
//         minimumSecondIndex = Math.min(minimumSecondIndex, j);
//       }
//     }
//   }

//   if (minimumSecondIndex === array.length) return -1;

//   return array[minimumSecondIndex];
// }

// O(n) time | O(n) space - where n is the length of the input array
// function firstDuplicateValue(array) {
//   const seen = new Set();
//   for (const value of array) {
//     if (seen.has(value)) return value;
//     seen.add(value);
//   }
//   return -1;
// }

// O(n) time | O(1) space - where n is the length of the input array
function firstDuplicateValue(array) {
  for (const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
}
