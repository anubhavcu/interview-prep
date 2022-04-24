//  Given a binary array A and a number B, we need to find length of the longest subsegment of ‘1’s possible by changing at most B ‘0’s.
//  A = [1, 0, 0, 1, 1, 0, 1]
//  B = 1        o/p =  4
//  eg2 - A = [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
//  B = 2    o/p = 5
// idea is to keep track of largest window with k zeros

function longestOnes(arr, k) {
  let left = 0, // current windows starting index
    countZeros = 0,
    window = 0; // max no of 1's in window so far including k 0's

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      countZeros += 1;
    }

    // if number of zeros in the current window becomes greater than k
    while (countZeros > k) {
      if (arr[left] === 0) {
        countZeros -= 1;
      }
      left += 1;
    }

    // keeping track of largest window
    window = Math.max(window, right - left + 1);
  }
  return window;
}
console.log(longestOnes([1, 0, 0, 1, 1, 0, 1], 1)); // 4
console.log(longestOnes([1, 0, 0, 1, 0, 1, 0, 1, 0, 1], 2)); // 5
