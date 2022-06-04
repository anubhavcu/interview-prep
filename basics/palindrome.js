//* reversing a number in JS - palindrome check - also see - sumOfDoubleBasePalindrome problem
let a = 1234;
console.log(a);
console.log(a.toString()); // 1234 - string
console.log(a.toString().split('')); // ['1', '2', '3', '4']
console.log(a.toString().split('').reverse()); // ['4', '3', '2', '1']
console.log(a.toString().split('').reverse().join('')); // 4321 - string

function checkPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}

console.log(checkPalindrome(1234321));

// * toString - takes optional radix to convert numeric value to string in that base
// * parseInt - takes optional radix to specify the base of number represented by string- if not passed then decimal

let b = 12;
let c = b.toString();
let d = b.toString(2);
console.log(c); // 2
console.log(d); // 1100
console.log(parseInt(c));
console.log(parseInt(c, 2)); // 1 {which is incorrect as c is in base 10, but is solves it as base2}
console.log(parseInt(d)); // 1100
console.log(parseInt(d, 2)); // 12

// * IMP checking palindrome in base 10 as well as base 2

let num = 1991;
console.log(checkPalindrome(num)); // true

// now for num we check in base 2
let numBase2 = num.toString(2);
console.log(numBase2);
let revNumBase2 = num.toString(2).split('').reverse().join('');
console.log(revNumBase2);
console.log(numBase2 === revNumBase2); // * palindrome in base 10 but not in base 2
