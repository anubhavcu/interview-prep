// https://leetcode.com/problems/is-subsequence/
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function (s, t) {
  let seqIndex = 0,
    arrIndex = 0;
  while (arrIndex < t.length && seqIndex < s.length) {
    if (s[seqIndex] === t[arrIndex]) {
      seqIndex += 1;
    }
    arrIndex += 1;
  }
  return seqIndex === s.length;
};
