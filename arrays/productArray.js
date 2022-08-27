// Given an array nums[] of size n, construct a Product Array P (of same size n) such that P[i] is equal to the product of all the elements of nums except nums[i].

// * if division is allowed
function productExceptSelfWithDiv(arr) {
  let res = [];
  let total = arr.reduce((acc, item) => acc * (item !== 0 ? item : 1), 1);
  //   console.log('total ', total);

  // ! handling case when 0 is in array
  // ! make more elegant
  if (arr.includes(0)) {
    let idx = arr.indexOf(0);
    let ans = new Array(arr.length).fill(0);
    ans[idx] = total;
    return ans;
  }

  for (let i = 0; i < arr.length; i++) {
    res.push(total / arr[i]);
    // res.push(arr[i] !== 0 && arr.includes(0) ? total : total / arr[i]);
  }
  return res;
}

function productExceptSelf(arr) {
  let left = [],
    leftMul = 1;
  let right = [],
    rightMul = 1;

  for (let i = 0; i < arr.length; i++) {
    left[i] = leftMul;
    leftMul *= arr[i];
  }
  //   console.log('left ', left);

  for (let i = arr.length - 1; i >= 0; i--) {
    right[i] = rightMul;
    rightMul *= arr[i];
    right[i] *= left[i];
  }
  //   console.log('right ', right);

  return right;
}

// console.log(productExceptSelf([1, 2, 3]));
console.log(productExceptSelf([10, 3, 5, 6, 2]));
console.log(productExceptSelfWithDiv([10, 3, 5, 6, 2]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelfWithDiv([-1, 1, 0, -3, 3]));

// * left basically contains product of all elements left to current one(excluding current), and similarly right is product of all right elements (excluding current one)

// function productExceptSelfNew(nums) {
//   var output = [];
//   var left = 1;
//   var right = 1;
//   for (var i = nums.length - 1; i >= 0; i--) {
//     output[i] = right;
//     right *= nums[i];
//   }
//   for (var j = 0; j < nums.length; j++) {
//     output[j] *= left;
//     left *= nums[j];
//   }
//   return output;
// }

// console.log(productExceptSelfNew([10, 3, 5, 6, 2]));
