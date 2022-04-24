// https://leetcode.com/problems/minimum-absolute-difference/
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// O(nlogn + n) ~ O(nlogn)

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = arr[1] - arr[0]; // elements are distinct
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    minDiff = Math.min(diff, minDiff);
  }
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === minDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};
