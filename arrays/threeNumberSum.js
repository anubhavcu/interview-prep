// Write a function that takes in a non-empty array of **distinct** integers and an integer representing a targetSum. The function should find all triplets in the array that sum up to the target sum and return a 2-d array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the targetSum, return an empty array.

function threeNumberSum(arr, targetSum) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let leftIdx = i + 1,
      rightIdx = arr.length - 1;
    while (leftIdx < rightIdx) {
      let currentSum = arr[i] + arr[leftIdx] + arr[rightIdx];
      if (currentSum === targetSum) {
        triplets.push([arr[i], arr[leftIdx], arr[rightIdx]]);
        leftIdx += 1;
        rightIdx -= 1;
      } else if (currentSum < targetSum) {
        leftIdx += 1;
      } else if (currentSum > targetSum) {
        rightIdx -= 1;
      }
    }
  }

  return triplets;
}

let arr = [12, 3, 1, 2, -6, 5, -8, 6],
  targetSum = 0;
console.log(threeNumberSum(arr, targetSum));

// console.log(arr.sort((a, b) => a - b));
// ! this is imp, as sort func would convert elems in string and then compare, which in case of negative numbers might lead to wrong results, eg : '-6' > '-8' would be false .

// function threeNumberSum(arr, targetSum) {
//   arr.sort((a, b) => a - b);
//   const triplets = new Set();
//   for (let i = 0; i < arr.length - 2; i++) {
//     let leftIdx = i + 1,
//       rightIdx = arr.length - 1;
//     while (leftIdx < rightIdx) {
//       let currentSum = arr[i] + arr[leftIdx] + arr[rightIdx];
//       if (currentSum === targetSum) {
//         triplets.add([arr[i], arr[leftIdx], arr[rightIdx]]);
//         leftIdx += 1;
//         rightIdx -= 1;
//       } else if (currentSum < targetSum) {
//         leftIdx += 1;
//       } else if (currentSum > targetSum) {
//         rightIdx -= 1;
//       }
//     }
//   }

//   return [...triplets];
// }
