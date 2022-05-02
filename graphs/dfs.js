// * O(V + e) time | O(V) space
// iterative

// function dephtFirstPrint(graph, source) {
//   const stack = [source];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
// }

// recursive
function dephtFirstPrint(graph, source) {
  console.log(source);
  for (let neighbor of graph[source]) {
    dephtFirstPrint(graph, neighbor);
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

dephtFirstPrint(graph, 'a'); // a, b, d, f, c, e
