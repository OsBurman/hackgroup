//data structure where each element has a priority- elements with higher prioriteis are served before elements with lower priorities

//use a list to store all elements - iterate over the entire thing to find the highest priority item

//write a min binary heap- lower number means higher priority
//each node has a val and priority. use the prioirty to build the heap
//enqueue mehtod accepts a value and priority, makes a new node, and puts it in the right spot based on its priority
//dequeue method removes root element, returns it, and rearranges heap using priority


//O(log n) 2 to what power gives me 16- 

class PriorityQueue {
  constructor(){
    this.values = [];

  }
  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  } 
  
  bubbleUp(){
    let index = this.values.length -1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index -1)/2);
      let parent = this.values[parentIndex];
      if(element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
      }
    }
  dequeue(){
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
      if(leftChild.priority > element.priority){
        swap = leftChildIndex;
      }
    }
    if(rightChild < length){
      rightChild = this.values[rightChildeIndex];
      if(
        (swap === null && rightChild.priority > element.priority) ||
        (swap !== null && rightChild.priority > leftChild.priority)
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

class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority
  }
}


let hoohaa = new PriorityQueue();
hoohaa.enqueue('common cold', 1);
hoohaa.enqueue('gunshot wound', 5);
hoohaa.enqueue('high fever', 2);

console.log(hoohaa)
hoohaa.dequeue();
console.log(hoohaa)