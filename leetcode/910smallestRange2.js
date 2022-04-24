// https://leetcode.com/problems/smallest-range-ii/
// You are given an integer array nums and an integer k.

// For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after changing the values at each index.

// Example 1:

// Input: nums = [1], k = 0
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
// Example 2:

// Input: nums = [0,10], k = 2
// Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
// Example 3:

// Input: nums = [1,3,6], k = 3
// Output: 3
// Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.

var smallestRangeII = function (nums, k) {
  nums.sort((a, b) => a - b);

  let low = nums[0],
    high = nums[nums.length - 1];
  let res = high - low;

  for (let i = 0; i < nums.length - 1; i++) {
    let min = Math.min(low + k, nums[i + 1] - k);
    let max = Math.max(high - k, nums[i] + k);

    res = Math.min(max - min, res);
  }

  return res;
};
