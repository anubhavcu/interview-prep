// const input = {
//   a: {
//     b: {
//       b2: 2,
//     },
//     c: {
//       c2: 2,
//       c3: 3,
//     },
//   },
// };
// // output: { 'a.b.b2':2, 'a.c.c2':2, 'a.c.c3':3 }

// var result = {};
// function format(input, key) {
//   let currentKey = key;
//   console.log('current key', currentKey);
//   for (let item in input) {
//     currentKey += item;
//     if (typeof input[item] === 'object') {
//       format(input[item], currentKey + '.');
//     } else {
//       result[currentKey] = input[item];
//     }
//     currentKey = currentKey.slice(0, currentKey.length - item.length);
//   }
//   return result;
// }

// console.log(format(input, ''));
console.log('a');
setTimeout(() => console.log('set'), 0);
Promise.resolve(() => console.log('pro')).then((res) => res());
console.log('b');

// a
// b
// pro
// set

function add(a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
}

console.log(add(5)(2)());
// console.log(add(5)(2)(4)(5)())
