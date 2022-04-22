/** Problem Statement
 * Given an array of numbers, return the two numbers from the array such that they add upto specific target
 * You may assume that each input would have exactly one solution and you cannot use the same element twice
 * return -1 if no such pair is found
 * eg: [3, 5, -4 ,8 , 11, 1, -1, 6], targetSum = 10 ; ans=[-1, 11]
 */

/** Approach 1
 * naive approach - travel the loop twice and look for such pair of numbers which add upto targetSum
 * O(n^2) time | O(1) space
 */

// function twoNumberSum(arr, targetSum) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let currentSum = arr[i] + arr[j];
//       if (currentSum === targetSum) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return -1; // pair not found
// }

/** Approach 2
 * using hash tables to store the elements once visited
 * O(n) time | O(n) space
 */

// function twoNumberSum(arr, targetSum) {
//   let is_seen = {};
//   for (item of arr) {
//     if (targetSum - item in is_seen) {
//       return [targetSum - item, item];
//     } else {
//       is_seen[item] = true;
//     }
//   }
//   return -1;
// }

/** Approach 3 - two pointer approach
 * time: O(nlogn) ; {nlogn + n}
 * space: O(1)
 */

function twoNumberSum(arr, targetSum) {
  arr.sort(); // O(nlogn)
  var left = 0,
    right = arr.length - 1;
  // O(n)
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [arr[left], arr[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return -1;
}

console.log(twoNumberSum([4, 6, 1, -3], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], -5));
console.log(twoNumberSum([1, 2, 3, 4], 100));
