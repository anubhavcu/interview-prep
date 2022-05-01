// O(NlogN) time | O(1) space
function heapSort(array) {
  buldMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx >= 1; endIdx--) {
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

function buldMaxHeap(array) {
  let lastParentIdx = Math.floor((array.length - 2) / 2);
  for (let i = lastParentIdx; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }

  return array;
}

function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childOneIdx] < heap[childTwoIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(idxToSwap, currentIdx, heap);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
