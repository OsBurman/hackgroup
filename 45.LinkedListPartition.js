

class LinkedList{
  
  constructor(){
    this.head = null;
  }

  addNode(val){
    if (this.head){
      let curr = this.head;
      while(curr.next){
       curr = curr.next;
      }
      curr.next = new Node(val);
    } else {
      this.head = new Node(val);
    }
  }
}

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const myLL = new LinkedList();
myLL.addNode(3);
myLL.addNode(5);
myLL.addNode(10);
myLL.addNode(9);
myLL.addNode(1);
console.log(myLL)

// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: the partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing the example below indicates the partition.)
// EXAMPLE
// Input 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output 3 -> 1 -> 2   ->  10 -> 5 -> 5 -> 8

function partition(ll, num){
  let left = [];
  let right = [];
  let current = ll.head;
  while(current){
    if(current.val > num){
      right.push(current.val)
    }
    else if(current.val < num) {
      left.push(current.val)
    }
    current = current.next;
  }
  console.log(left)
  let newLinkedList = new LinkedList();
  for(let i = 0; i < left.length; i++){
    newLinkedList.addNode(left[i]);
  };
  newLinkedList.addNode(num);
  for(let i = 0; i < right.length; i++){
    newLinkedList.addNode(right[i])
  }
  return newLinkedList
}

// function partition(linked, value) {
//   // creating two new Linked List, one for values above partition and one below
//   const lessThan = new LinkedList;
//   const greaterThan = new LinkedList;
//   // set curr to the head of the linkedlist
//   let curr = linked.head
//   while(curr) {
//       if (curr.val < value) {
//           lessThan.addNode(curr.val)
//           curr = curr.next
//       } else {
//           greaterThan.addNode(curr.val)
//           curr = curr.next
//       }
//   }
//   curr = lessThan.head
//   while (curr.next) {
//     curr = curr.next
//   } 
//   curr.next = greaterThan.head
//   console.log("This is lessThan", lessThan)
// }
// partition(myLL, 5)

console.log(partition(myLL, 5 ))