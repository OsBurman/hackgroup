// In many problems, we are given a set of elements such that we can divide them into two parts. To solve the problem, we are interested in knowing the smallest element in one part and the biggest element in the other part. This pattern is an efficient approach to solve such problems.

// This pattern uses two heaps; A Min Heap to find the smallest element and a Max Heap to find the biggest element. The pattern works by storing the first half of numbers in a Max Heap, this is because you want to find the largest number in the first half. You then store the second half of numbers in a Min Heap, as you want to find the smallest number in the second half. At any time, the median of the current list of numbers can be calculated from the top element of the two heaps.

// Ways to identify the Two Heaps pattern:

// Useful in situations like Priority Queue, Scheduling
// If the problem states that you need to find the smallest/largest/median elements of a set
// Sometimes, useful in problems featuring a binary tree data structure
// Problems featuring

// Find the Median of a Number Stream (medium)


// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0


class Heap {
  constructor(comparator) {
      this.data = [];
      this.comparator = comparator || ((parent, child) => parent - child);
  }

  get size() {
      return this.data.length;
  }

  bubbleUp(c) {
      if (c === 0) return;
      const p = Math.floor((c + 1) / 2) - 1;
      if (this.comparator(this.data[p], this.data[c]) > 0) {
          [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
      }
      this.bubbleUp(p);
  }

  bubbleDown(p) {
      const c = 2 * (p + 1) - 1;
      if (c >= this.data.length) return;

      const leftDelta = this.comparator(this.data[p], this.data[c]);
      const rightDelta = c + 1 >= this.data.length ? 0 : this.comparator(this.data[p], this.data[c + 1]);
      if (leftDelta <= 0 && rightDelta <= 0) return;

      const swapChildIndex = c + (leftDelta <= rightDelta);
      [this.data[p], this.data[swapChildIndex]] = [this.data[swapChildIndex], this.data[p]];
      this.bubbleDown(swapChildIndex);
  }

  add(val) {
      this.data.push(val);
      this.bubbleUp(this.data.length - 1);
  }

  poll() {
      if (this.size < 2) return this.data.pop();
      [this.data[0], this.data[this.size - 1]] = [this.data[this.size - 1], this.data[0]];
      const val = this.data.pop();
      this.bubbleDown(0);
      return val;
  }

  peek() {
      return this.data[0];
  }
}

var MedianFinder = function() {
  this.firstHalf = new Heap(((parent, child) => child - parent));
  this.secondHalf = new Heap();
};

// 7,4,3,1,9,2

// secondHalf[7]
// firstHalf[4]


/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  this.secondHalf.add(num);
  this.firstHalf.add(this.secondHalf.poll());
  if(this.secondHalf.size < this.firstHalf.size) {
      this.secondHalf.add(this.firstHalf.poll());
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  let median = null;
  if(!this.secondHalf.size && !this.firstHalf.size) {
      return median;
  }
  
  if(this.secondHalf.size > this.firstHalf.size) {
      median = this.secondHalf.peek();
  } else {
      const secondHalfMin = this.secondHalf.peek();
      const firstHalfMax = this.firstHalf.peek();
      median = (secondHalfMin+firstHalfMax)/2
  }
  return median;
};

// NUMBER 2

class MaxHeap {
  constructor(array) {
      this.heap = [];
      this.length = 0;
  }

  siftDown(currentNodeIdx, endIdx, heap) {
  let leftChildIdx = (currentNodeIdx * 2) + 1;
    while(leftChildIdx <= endIdx){
      let rightChildIdx = (currentNodeIdx * 2) + 2 <= endIdx ? (currentNodeIdx * 2) + 2 : -1;
      let idxToSwap;
      if(rightChildIdx !== -1 && heap[rightChildIdx] > heap[leftChildIdx]){
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }

      if(heap[idxToSwap] > heap[currentNodeIdx]){
        this.swap(currentNodeIdx, idxToSwap, heap);
        currentNodeIdx = idxToSwap;
        leftChildIdx = (currentNodeIdx * 2) + 1
      } else {
        return;
      }
    }
  }

siftUp(currentNodeIdx, heap) {
  let parentIdx = Math.floor((currentNodeIdx - 1) / 2)
  while(currentNodeIdx > 0 && heap[currentNodeIdx] > heap[parentIdx]) {
    this.swap(currentNodeIdx, parentIdx, heap)
    currentNodeIdx = parentIdx;
    parentIdx = Math.floor((currentNodeIdx - 1) / 2)
  }
}

peek() {
  return this.heap[0];
}

remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    let valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap)
    this.length--;
    return valueToRemove;   
  }

insert(value) {
  this.heap.push(value);
  this.siftUp(this.heap.length - 1, this.heap);
      this.length++;
}

swap(i,j, heap){
  let temp = heap[j]
  heap[j] = heap[i]
  heap[i] = temp;
}
}


class MinHeap {
constructor(array) {
  this.heap = [];
  this.length = this.heap.length;
}

siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = (currentIdx * 2) + 1;
  while(childOneIdx <= endIdx){
    let childTwoIdx = (currentIdx * 2) + 2 <= endIdx ? (currentIdx * 2) + 2 : -1;
    let idxToSwap;
    if(childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]){
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    if(heap[idxToSwap] < heap[currentIdx]){
      this.swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      childOneIdx = (currentIdx * 2) + 1
    } else {
      return;
    }
  }
}

siftUp(currentIdx, heap) {
  let parentIdx = Math.floor((currentIdx - 1) / 2)
  while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
    this.swap(currentIdx, parentIdx, heap)
    currentIdx = parentIdx;
    parentIdx = Math.floor((currentIdx - 1) / 2)
  }
}

peek() {
  return this.heap[0];
}

remove() {
  this.swap(0, this.heap.length - 1, this.heap)
  let valueToRemove = this.heap.pop();
  this.siftDown(0, this.heap.length - 1, this.heap)
      this.length--;
  return valueToRemove;
}

insert(value) {
  this.heap.push(value);
  this.siftUp(this.heap.length - 1, this.heap);
      this.length++;
}

swap(i,j, heap){
  let temp = heap[j]
  heap[j] = heap[i]
  heap[i] = temp;
}
}



class MedianFinder {
  constructor(){
      this.maxHeap = new MaxHeap;
      this.minHeap = new MinHeap;
  }
  
  addNum(num){
      if(this.maxHeap.length === 0 || this.maxHeap.peek() >= num){
          this.maxHeap.insert(num);
      } else {
          this.minHeap.insert(num);
      }
      
      if(this.maxHeap.length > this.minHeap.length + 1){
          this.minHeap.insert(this.maxHeap.remove());
      }
      if(this.maxHeap.length < this.minHeap.length){
          this.maxHeap.insert(this.minHeap.remove());
      }
  }
  
  findMedian(){
      if(this.maxHeap.length === this.minHeap.length){
          return (this.maxHeap.peek() / 2) + (this.minHeap.peek() / 2);
      }
      return this.maxHeap.peek();
  }

};