// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

var longestOnes = function (nums, k) {
  let left = 0,
    countZeros = 0,
    window = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      countZeros += 1;
    }

    while (countZeros > k) {
      if (nums[left] === 0) {
        countZeros -= 1;
      }
      left += 1;
    }
    window = Math.max(window, right - left + 1);
  }
  return window;
};
