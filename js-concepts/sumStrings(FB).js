// sum of strings and return a string (see expected o/p below)

function sum(a, b) {
  let result = '',
    carry = false;
  // carry can be boolean, as we are only adding 2 numbers and max carry can be 1 (since 9 + 9 = 18)

  while (a.length || b.length) {
    // adding last chars of strings
    let num =
      parseInt(a[a.length - 1] || 0) + parseInt(b[b.length - 1] || 0) + +carry;

    carry = num >= 10;
    result = `${num.toString().split('')[1] || num}${result}`;
    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return carry ? `1${result}` : result;
}

console.log(sum('123', '456')); // 579
console.log(sum('999', '1')); // 1000
console.log(sum('2', '3')); // 5
console.log(sum('9999999999999999999', '9999999999999999999')); //19999999999999999998
console.log(sum('9999999999999999999', '1')); // 10000000000000000000
