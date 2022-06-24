/**
 * chain(['a', 'b', 'c', 'd'], 2)  => [['a', 'b'], ['c', 'd']]
 * chain(['a', 'b', 'c', 'd', 'e'], 3) => [['a', 'b', 'c'], ['d', 'e']]
 */

function chain(arr, size) {
  let res = [],
    current = 0;
  while (current < arr.length) {
    res.push(arr.slice(current, current + size));
    current += size;
  }

  return res;
}

console.log(chain(['a', 'b', 'c', 'd'], 2));
console.log(chain(['a', 'b', 'c', 'd', 'e'], 3));
console.log(chain(['a', 'b', 'c', 'd', 'e', 'f'], 2));
