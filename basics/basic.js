/**
 * JavaScript properties that begin with a digit cannot be referenced with dot notation and must be accessed using bracket notation.
 * For example, if you had an object with a property named 3d, it can only be referenced using bracket notation.
 * eg: obj.3d - gives error ; instead obj['3d'] works fine
 * Similarly for arr -> a[2] === a['2']
 */

let arr = [1, 2, 3, 4, 5];
// console.log(arr.2);   // throw Error
// console.log(arr.'2');     // error

console.log(arr['2'] === arr[2]); // * we can use bracket notation (no need though !)

console.log(arr.toString()); // 1,2,3,4,5

// push, pop, concat, join , reverse, shift, unshift, slice, splice, indexOf , includes
/**
 * modifies the arr : push, pop, reverse, shift, unshift, splice
 * do NOT modify arr: concat, join, slice, indexOf, includes, toString
 * -------------------------------------------------------
 *
 * push- add item to end of arr, return new length
 * unshift - add item to begining of arr, return new length
 * pop - remove item from end - return removed item
 * shift - remove first item of arr - return removed item
 * reverse - returns modified arr
 * splice - returns deleted arr
 * sort - returns the modified arr
 * --------------------------------
 *
 * concat - return new arr
 * join - return new String
 * slice - returns a shallow copy portion of arr (from start to end - 1 index)
 * indexOf - returns the first Index at which given element is found or -1
 * includes - returns boolean value
 * toString - return a string
 */

console.log(arr.push(100));
console.log(arr.reverse());
console.log(arr.includes(3));

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// * More methods on arrays

// TODO : sorting arrays inside arrays
// // sort method takes in distinct values
// let newArr = [56, 43, 7, 32, 2, 4, 21, 9, 1, 3];
// console.log(newArr.sort()); // will sort assuming everything as string
// console.log(newArr.sort((a, b) => a - b));

// let newArr1 = [
//   [5, 3, 6, 2],
//   [32, 43, 25, 7, 9],
//   [34, 2, 44, 53, 26, 1],
// ];
// console.log(newArr1.sort()); // ! sorted arrays based on first element assuming strings(i.e 32 will come first than 5, and will not sort individual arrays itself)
// console.log(newArr1.sort((a, b) => a - b)); // ! same as above
// // * to sort individual arrays within the arrays :
// console.log(newArr1.sort((a, b) => a[0] - b[0]));
