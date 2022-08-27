// Given a non-negative number represented as a list of digits, add 1 to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.

// Input:
// N = 3
// arr[] = {1, 2, 4}
// Output:
// 1 2 5
// Explanation:
// 124+1 = 125, and so the Output
// Example 2:

// Input:
// N = 3
// arr[] = {9,9,9}
// Output:
// 1 0 0 0
// Explanation:
// 999+1 = 1000, and so the output

function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += 1;

    if (arr[i] > 9) {
      arr[i] = 0;
    } else {
      return arr;
    }
  }
  arr.unshift(1);
  return arr;
}

let a = [1, 2, 3];
// a = [9, 9, 9];

console.log(plusOne(a));

// * js one-liner
// ! caveat - NOT passing all cases in leetcode(check later) 
// ! - each number in array will be of string type ...
console.log((Number(a.join('')) + 1).toString().split(''));
