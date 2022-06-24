// function add(a) {
//   return function (b) {
//     return function (c) {
//       return function () {
//         return a + b + c;
//       };
//     };
//   };
// }

// console.log(add(5)(2)(3)());

// * to implement above infinitely

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(2)(3)());
console.log(add(5)(2)(3)(4)(12)());
console.log(add(5)(2)(3)(1)(3)(6)(8)());
