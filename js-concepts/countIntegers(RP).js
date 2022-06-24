/**
 * arr = [[[1, 3, 5]], 0, 1, ['hello'], [2, 3]] => 7
 */

// ! don't create global variable and also don't pass 2nd argument to function

function countNumbers(arr) {
  return arr.reduce((acc, item) => {
    if (typeof item === 'number') {
      acc += 1;
    }
    if (Array.isArray(item)) {
      acc += countNumbers(item);
    }
    return acc;
  }, 0);
}

let arr = [[[1, 3, 5]], 0, 1, ['hello'], [2, 3]];
console.log(countNumbers(arr));
