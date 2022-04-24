// https://leetcode.com/problems/max-consecutive-ones/
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// O(N) time | O(1) space
var findMaxConsecutiveOnes = function (nums) {
  let res = 0,
    count = 0;
  for (let item of nums) {
    if (item === 1) {
      count += 1;
    } else {
      res = Math.max(count, res);
      count = 0;
    }
  }
  return Math.max(count, res);
};
