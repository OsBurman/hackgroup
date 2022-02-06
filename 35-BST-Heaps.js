//in maxBinary heap, parents are always larger than the parent- minBinaryheap, vice versa

//maxBinaryheap- each parent has at most two child nodes
//values of each parent node is always greater than the child nodes
//in a max Binary heap the parent is great than the children, but there are no guarantees between sibling nodes
//all the children of each node are as full as they can be and left chidlren are filled out first

//Binary Heaps are used to implement priority queues which are very common data strucutres- Priority Queue- A queus where you can keep track of things and assing priorities - learn how to traverse a graph

//         41
//   39         33
// 18  27  |  12   


function BinaryHeap(){
  this.values = [];
}

//push the value inot the values property on the heap
//bubble up: create an index variable whic is hte lenght of the values property -1
//create a parentIndex vairable which is the floor of (index-1)/2
//loop as long as the values element at the parentIndex is less than the value element of the child index- swap the values of the values element at the parentIndex with the value of the element property at the child index
//set the index to be parentIndex, and start over
class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  } 
  
  bubbleUp(){
    let index = thi s.values.length -1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index -1)/2);
      let parent = this.values[parentIndex];
      if(element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
      }
    }
  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild,rightChild;
      let swap = null;
    
    if(leftChildIndex < length){
      leftChild = this.values[leftChildIndex];
      if(leftChild > element){
        swap = leftChildIndex;
      }
    }
    if(rightChild < length){
      rightChild = this.values[rightChildeIndex];
      if(
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
      ) {
        swap = rightChildIndex;
      }
    }
    if(swap === null) break;
    this.values[index] = this.values[swap];
    this.values[swap] = element;
    index = swap;
  }
  }
}




let hoohaa = new MaxBinaryHeap();
hoohaa.insert(41);
hoohaa.insert(39);
hoohaa.insert(33);
hoohaa.insert(18);
hoohaa.insert(27);
hoohaa.insert(12);
hoohaa.insert(3);
console.log(hoohaa)
console.log(hoohaa.extractMax())