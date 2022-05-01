// it is a binary tree, which is completely or partially filled in last level, if last level is partially filled, it should be from left to right.
// for min-heap, every node's value should be smaller than its children nodes,
// similarly for max-heap, every node's value should be greater than its children nodes.
// * key imp.: root node value of heap is always min or max depending upon min-heap or max-heap. so getting value of min/max element is O(1).

/**
 * arr representation of heap
 * 					 8
 * 				  /    \
 * 				 12     23
 * 				/  \   /  \
 * 			  17   31  30  44
 * 			/  \
 * 		   102 18
 *
 * index of current node => i
 * index of childOne => 2 * i + 1
 * index of childTwo => 2 * i + 2
 * index of parent node => Math.floor((i - 1) / 2)
 *
 * arr => [8, 12, 23, 17, 31, 30 ,44, 102, 18]
 */
/**
 *  methods for heap
 * *- buildHeap
 * ! O(N) time using siftDown method
 * ! O(NlogN) time using siftDown method
 * 		- various ways to build it, we are using siftDown method on every parent node, and we start from the last parent node.
 * *- siftDown - used for deletion
 * ! O(logN)
 * 		- compare the element with its two children's and swap it with smallest/largest children (depending on type of heap, min or max), untill there is no child element left or we reach the correct position of element
 * *- siftUp - used for insertion
 * ! O(logN)
 * 		- basically compares the element to its parent node and swap it, if less/greater than (depending on type of heap, min or max), unless we reach the correct position or root of heap is reached
 * *- insert
 * ! O(logN)
 * 		- to insert, we place it in the end of the array, and use siftUp method to place the inserted element in its correct position to maintain heap property.
 * *- remove (we will be wanting to remove the root element, i.e min or max element, as that is the purpose of heap, to keep track of min/max element)
 * ! O(logN)
 * 		- to remove, swap the root element with the last element of the array, and pop off the last element. now use the siftDown method to the swapped root element to place it in its correct position to maintain heap property.
 */

/**
 * basically both in siftup and siftdown methods, we are essentially eliminating half of the tree by moving either side of the tree => O(logN) time
 * so insertion and deletion in a heap would take in O(logN) time
 * buildHeap on other hand, using siftDown method , would take in O(N) time, as we are not essentially doing siftDown on each element
 * * very good article about time complexity of buildHeap, and why siftDown approach is better,
 * ! https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity#:~:text=In%20summary%2C%20the%20work%20for,O(n%20log%20n).
 */

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  //   O(N) time
  buildHeap(array) {
    // siftDown on each parent node , starting from the last one, so we go to last element of array, and find its parent
    let firstParentNode = Math.floor((this.array.length - 2) / 2);
    for (let i = firstParentNode; i >= 0; i--) {
      this.siftDown(i, array.length, array);
    }
    return array;
  }

  // O(logN) time
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 < endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[currentIdx] > heap[idxToSwap]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  // O(logN) time
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let removedValue = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removedValue;
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
