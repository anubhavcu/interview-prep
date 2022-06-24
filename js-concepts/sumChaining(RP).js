/**
 * value = sum(1,2,3,4)
 * value = sum(1,2)(3)(4)
 * value = sum(1)(2)(3)(4)
 * value = sum(1,2,3)(4)
 */

function sum(...args) {
  let res = 0;
  if (args.length === 4) {
    res += args[0] + args[1] + args[2] + args[3];
  } else {
    return function (...params) {
      return sum(...[...args, ...params]);
    };
  }
  return res;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2)(3)(4));
console.log(sum(1)(2)(3)(4));
console.log(sum(1, 2, 3)(4));
