// function myMemo(fn) {
//   const res = {};
//   return function (...args) {
//     var key = JSON.stringify(args);
//     if (!res[key]) {
//       res[key] = fn(...args);
//     }
//     return res[key];
//   };
// }

// if optional context is required
function myMemo(fn, context) {
  const res = {};
  return function (...args) {
    var key = JSON.stringify(args);
    if (!res[key]) {
      res[key] = fn.call(context || this, ...args);
    }
    return res[key];
  };
}

const slowFunc = (num1, num2) => {
  for (let i = 1; i < 100000000; i++) {}

  return num1 * num2;
};

let slowFunc2 = myMemo(slowFunc);
console.time('first');
console.log(slowFunc2(100, 234));
console.timeEnd('first');

console.time('second');
console.log(slowFunc2(100, 234));
console.timeEnd('second');
