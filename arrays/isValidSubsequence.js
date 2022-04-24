/**
 * subsequence - a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements
 * [5, 1, 22, 25, 6, -1, 8, 10] ; subseq = [1, 6, -1, 10] ; o/p=> true
 */

// O(n) time | O(1) space
function isValidSubsequence(arr, seq) {
  let arrIndex = 0,
    seqIndex = 0;

  while (arrIndex < arr.length && seqIndex < seq.length) {
    if (arr[arrIndex] === seq[seqIndex]) {
      seqIndex += 1;
    }
    arrIndex += 1;
  }
  return seqIndex === seq.length;
}

// same as above using for loop

// function isValidSubsequence(arr, seq) {
//   let seqIndex = 0;
//   for (let i in arr) {
//     if (seqIndex === seq.length) break;

//     if (arr[i] === seq[seqIndex]) {
//       seqIndex += 1;
//     }
//   }
//   return seqIndex === seq.length;
// }

let arr = [5, 1, 22, 25, 6, -1, 8, 10],
  seq = [1, 6, -1, 10];
console.log(isValidSubsequence(arr, seq));
console.log(isValidSubsequence('ahbgdc', 'abc'));
