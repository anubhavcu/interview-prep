// traversing the array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for...of => used for looping over iterable objects (array, strings, map, set)
let elements = ['a', 'b', 'c', 'd'];
for (item of elements) {
  console.log(item);
}

// array methods - for looping over an array
// forEach
// map, reduce, filter => returns a new array
// some, every => returns a boolean
// find => returns the first value which satisfies cb func condition or undefined
// findIndex = returns the index of first value which passes cb func or -1

// * forEach
// arr.forEach((item, idx) => console.log(item, 'at index', idx));

// * map
const newArr = arr.map((item, idx) => item * idx);
console.log(newArr);

// * filter
let even = arr.filter((item) => item % 2 === 0);
let odd = arr.filter((item) => item % 2 !== 0);
console.log(even);
console.log(odd);

// * reduce => if initial value is not passed, first element is set to initial
let sum = arr.reduce((res, item) => res + item);
let prod = arr.reduce((res, item) => res * item, 1);
console.log('sum of elements', sum);
console.log('product of elements', prod);

// * some - test whether some elements of the array passes the condition given in cb function
const hasEvenNumber = arr.some((item) => item % 2 === 0);
const hasNegativeNumber = arr.some((item) => item < 0);
console.log(hasEvenNumber);
console.log(hasNegativeNumber);

// * every => test whether all elements of the array passes the condition given in cb function
const allPositiveNumber = arr.every((item) => item > 0);
const allEvenNumber = arr.every((item) => item % 2 === 0);
console.log(allPositiveNumber);
console.log(allEvenNumber);

// * find => if not found we get undefined
const foundNegativeNumber = arr.find((item) => item < 0);
const foundEvenNumber = arr.find((item) => item % 2 === 0);
console.log(foundNegativeNumber);
console.log(foundEvenNumber); // returns first even value

// * findIndex = returns first index or -1
const fiveIndex = arr.findIndex((item) => item === 5);
const elevenIndex = arr.findIndex((item) => item === 11);
console.log(fiveIndex); // 4
console.log(elevenIndex); // -1
