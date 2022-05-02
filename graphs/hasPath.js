/**
 * Write a function hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(src, dst).
 * Function should return a boolean indicating whether or nor there exists a directed path between the souce and destination nodes.
 *
 * const graph = {
 * 		f: ['g', 'i'],
 * 		g: ['h'],
 * 		h: [],
 * 		i: ['g', 'k'],
 * 		j: ['i'],
 * 		k: []
 * }
 *
 * hasPath(graph, 'f', 'k') // true
 */

// dfs solution
// function hasPath(graph, source, dest) {
//   if (source === dest) return true;

//   for (let neighbor of graph[source]) {
//     if (hasPath(graph, neighbor, dest)) {
//       return true;
//     }
//   }

//   return false;
// }

// bfs solution
function hasPath(graph, source, dest) {
  let queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dest) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

console.log(hasPath(graph, 'f', 'k')); // true
console.log(hasPath(graph, 'h', 'k')); // false
