
// In a lot of problems, you may be asked to reverse the links between a set of nodes of a linked list. Often, the constraint is that you need to do this in-place, i.e., using the existing node objects and without using extra memory. This is where the above mentioned pattern is useful.





// This pattern reverses one node at a time starting with one variable (current) pointing to the head of the linked list, and one variable (previous) will point to the previous node that you have processed. In a lock-step manner, you will reverse the current node by pointing it to the previous before moving on to the next node. Also, you will update the variable “previous” to always point to the previous node that you have processed.

function LinkedList(){
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

//push
//create a new node using the value
//if there is no head property, set the head and tail to be hte newnode
//else set the next property on the tail to be the newnode and set the tail on teh list to be the newly created node
//increment the length

LinkedList.prototype.push = function(value){
  let newNode = new Node(value);
  if(!this.head){
    this.head = newNode
  }
  else {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode
    
  
  }
}


let myList = new LinkedList();
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
console.log(myList)


LinkedList.prototype.pop = function(){
  if(!this.head.next){
    delete this.head;
  }
  let current = this.head;
  let prev = this.head;
  while(current.next){
    prev = current;
    current = current.next;
  }
  prev.next = null;
  }


LinkedList.prototype.shift = function(){
  if(!this.head.next){
    return null
  }
  this.head = this.head.next;
  
}


LinkedList.prototype.unshift = function(value){
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
}

LinkedList.prototype.get = function(index){
let count = 0;
let current = this.head;
if(index === 0)return this.head.value;
while(current.next){
  count++;
  current = current.next;
  if(count === index) return current.value;
}
return false
}
LinkedList.prototype.set = function(value, index){
  if(index === 0){this.head.value = value};
  let count = 0;
  let current = this.head;
  while(current.next){
    count++;
    current = current.next;
    if(count === index){
      current.value = value;
      return 'value changed'
    }
  }
  return 'index doesn\'t exist'
}

LinkedList.prototype.insert = function(value, index){
  let newNode = new Node(value);
if(index === 0){
  let addedNode = this.head;
  this.head = newNode;
  newNode.next = addedNode;
}
else{
  let current = this.head;
  let count = 0;
  while(current.next){
    count++;
    let previous = current;
    current = current.next;
    if(count === index){
      previous.next = newNode;
      newNode.next = current;
      return 'inserted'
    }
  }
}
return 'not available'
}

LinkedList.prototype.remove = function(index){
  if(index === 0){
    this.head = this.head.next;
  }
  let count = 0;
  let current = this.head;
  let prev;
  while(current.next){
    count++;
    prev = current;
    current = current.next;
    if(count === index){
      prev.next = current.next;
      return 'its all good'
  	
    }
  }
  
}


LinkedList.prototype.reverse = function(){
  let newList = new LinkedList();
  let current = this.head;
  while(current.next){
    current = current.next;
    if(!current.next){
      newList.push(current.value);
      this.pop(current.value);
      current = this.head;
    }
    if(!current.next){
      current = this.head;
      newList.push(this.head.value)
    }
    
  }return newList
}

myList.pop();
myList.shift();
myList.unshift(6)
// console.log(myList)
myList.set(5, 2)
// console.log(myList.set(5,2))
console.log(myList)
console.log(myList.insert(3, 1))
console.log(myList)
myList.remove(1)
console.log(myList)
console.log(myList.reverse())




///////////
// function LinkedList(){
//   this.head = null;
// }

// function Node(value){
//   this.value = value;
//   this.next = null;
// }

// //push
// //create a new node using the value
// //if there is no head property, set the head and tail to be hte newnode
// //else set the next property on the tail to be the newnode and set the tail on teh list to be the newly created node
// //increment the length

// LinkedList.prototype.push = function(value){
//   let newNode = new Node(value);
//   if(!this.head){
//     this.head = newNode;
//   }
//   else{
//   let current = this.head;
//   while(current.next){
//     current = current.next;
//   }
//   current.next = newNode};
// }

// let myList = new LinkedList();
// myList.push(1);
// myList.push(2);
// myList.push(3);
// myList.push(4);
// myList.push(5);
// console.log(myList)


// LinkedList.prototype.pop = function(){
//   if(!this.head.next){
//     delete this.head;
//   }
//   let current = this.head;
//   let prev = this.head;
//   while(current.next){
//     prev = current;
//     current = current.next;
//   }
//   prev.next = null;
 
  
// }

// myList.pop();
// console.log(myList)

// // LinkedList.prototype.pop = function(Value){
// //   if(!this.head) return 'no head';
// //   let current = this.head;
// //   let newTail = current;
// //   while(current.next){
// //     newTail = current;
// //     current = current.next;
// //   }
// //   this.tail = newTail;
// //   this.tail.next = null;
// //   this.length--;
// //   if(this.length === 0){
// //     this.head = null;
// //     this.tail = null
// //   }
// //   return current;
// // }

// //store the current head property in a variable
// //set the head property to be the current head's next property
// //decrement length by one
// //return the value of the nod of the removed

// LinkedList.prototype.shift = function(){
//   if(!this.head.next){
//     return null
//   }
//   this.head = this.head.next;
  
// }

// myList.shift();


// // LinkedList.prototype.shift = function(){
// //   if(!this.head)return 'no';
// // let currentHead = this.head;
// // this.head = currentHead.next;
// // this.length--;
// // return currentHead;
// // }

// //create no newNode- check if there is a head or not
// //set teh newcly creat node's next proerty to be the current head on the list
// //set the head proeprty on the list to be that newly created node

// LinkedList.prototype.unshift = function(value){
//   let newNode = new Node(value);
//   newNode.next = this.head;
//   this.head = newNode;
// }

// myList.unshift(6);
// console.log(myList)








// // LinkedList.prototype.unshift = function(value){
// // let newNode = new Node(value);
// // if(!this.head){
// //   this.head = newNode;
// //   this.tail = newNode;
// // }
// // newNode.next = this.head;
// // this.head = newNode;
// // this.length++
// //other way of doing it
// // let currentHead = this.head;
// // this.head = newNode;
// // this.head.next = currentHead;
// // }

// //if index i s negative or great than or equal to list- return null
// //loop through the list until you reach teh index and return the node at that specific index


// LinkedList.prototype.get = function(index){
// let count = 0;
// let current = this.head;
// if(index === 0)return this.head.value;
// while(current.next){
//   count++;
//   current = current.next;
//   if(count === index) return current.value;
// }
// return false
// }





// // LinkedList.prototype.get = function(index){
// //   if(index < 0 || index > this.length)return null;
// //   let counter = 0;
// //   let current = this.head;
// //   while(counter !== index){
// //     current = current.next;
// //     counter++;
// //   }
// //   return current
// // }

// //change the value o fthe node based on its position in the LinkedList

// LinkedList.prototype.set = function(value, index){
//   if(index === 0){this.head.value = value};
//   let count = 0;
//   let current = this.head;
//   while(current.next){
//     count++;
//     current = current.next;
//     if(count === index){
//       current.value = value;
//       return 'value changed'
//     }
//   }
//   return 'index doesn\'t exist'
// }



// // LinkedList.prototype.set = function(value, index){
// //   let foundNode = this.get(index);
// //   if(foundNode){
// //     foundNode.value = value
// //     return true;
// //   }
// //   return false
// // }

// //add a node at a specific position
// //if index is less than 0 or greater than length, return false
// //if index is same as length, push a new node to the end of the list
// //if index is 0, unshift a new node to the start of the lsit
// //other, using the get moethod, access the node a tt he index -1
// //se the next property on that node to be the new node
// //set the next property on the new node to be the previous next
// //inrement the length
// //return true


// LinkedList.prototype.insert = function(value, index){
//   let newNode = new Node(value);
// if(index === 0){
//   let addedNode = this.head;
//   this.head = newNode;
//   newNode.next = addedNode;
// }
// else{
//   let current = this.head;
//   let count = 0;
//   while(current.next){
//     count++;
//     let previous = current;
//     current = current.next;
//     if(count === index){
//       previous.next = newNode;
//       newNode.next = current;
//       return 'inserted'
//     }
//   }
// }
// return 'not available'
// }



// // LinkedList.prototype.insert = function(value, index){
// // if(index < 0 || index > this.length)return false;
// // let newNode = new Node(value);
// // if(index === this.length) this.push(value);
// // if(index === 0)this.unshift(value);
// // let previous = this.get(index - 1);
// // let temp = previous.next;
// // previous.next = newNode;
// // newNode.next = temp;
// // this.length++;
// // return true
// // }

// //remove a node from teh LinkedList at a specific position
// //if index is leess than zero or greater than the length, return nope
// //if index is the same as the length -1, pop
// //if the index is 0, shift
// //else, using the get method access the node at the index - 1
// //set the next preoepryt on that node to be the next of the next node
// //decerement hte lenght
// //return the value of the node removed

// LinkedList.prototype.remove = function(index){
//   if(index === 0){
//     this.head = this.head.next;
//   }
//   let count = 0;
//   let current = this.head;
//   let prev;
//   while(current.next){
//     count++;
//     prev = current;
//     current = current.next;
//     if(count === index){
//       prev.next = current.next;
//       return 'its all good'
  	
//     }
//   }
  
// }




// // LinkedList.prototype.remove = function(index){
// // if(index < 0 || index > this.length)return 'nope';
// // if(index === this.length - 1) this.pop();
// // if(index === 0) this.shift();
// // let previousNode = this.get(index -1);
// // let removed = previousNode.next;
// // previousNode.next = removed.next;
// // this.length--;
// // return removed;
// // }

// //swap the head and tail 
// //create a variable next, prev
// //create node- initiazlize it to head of property
// //loop through the list
// //set next to be the next property on whateve node is
// // set the next property on the node ot be whatever prev is 
// //set prev to be the value of the node variable
// //set the node variable to be the value of the next variable

// LinkedList.prototype.reverse = () => {
//   let node = this.head;
//   this.head = this.tail;
//   this.tail = node;
//   let next;
//   let prev = null;
  
//   for(let i = 0; i < this.length; i++){
//     next = node.next;
//     node.next = prev;
//     prev = node;
//     node = next;
//   }
//   return this;
// }

// let hoohaa = new LinkedList();
// hoohaa.push(1)
// hoohaa.push(2)
// hoohaa.push(3)
// hoohaa.push(4)
// console.log(hoohaa)
// console.log(hoohaa.pop());
// console.log(hoohaa)



// // console.log(hoohaa.shift());
// // console.log(hoohaa)
// // console.log(hoohaa.unshift(100));
// // console.log(hoohaa)
// // console.log(hoohaa.get(1))
// // console.log(hoohaa.set(4, 1))
// // console.log(hoohaa)
// // console.log(hoohaa.insert(666, 1))
// // console.log(hoohaa)
// // console.log(hoohaa.remove(1))
// // console.log(hoohaa)
// // console.log(hoohaa.push(34))
// // console.log(hoohaa.push(52))
// // console.log(hoohaa.push(84))
// console.log(hoohaa.reverse())
// // console.log(hoohaa)


___________________________________________

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

var reverseBetween = function(head, n, m) {
  let nhead = new ListNode(-1);
  nhead.next = head;
  for (let i = 1; i < n; i++){
      nhead = nhead.next;
  }

  let ntail = nhead.next;
  let prev = ntail;
  let cur = prev.next;
  let nextNode = null;
  for (let i = n; i < m; i++){
      nextNode = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextNode;
  }
  ntail.next = cur;
  nhead.next = prev;
  return n === 1 ? nhead.next : head;
};

// ________________________________________________________

// 25. Reverse Nodes in k-Group

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// Follow up:

// Could you solve the problem in O(1) extra memory space?
// You may not alter the values in the list's nodes, only nodes itself may be changed.

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Example 3:

// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]
// Example 4:

// Input: head = [1], k = 1
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reverseKGroup = function(head, k) {
  const helper = function(pre) {
      let count = 0;
      let cur = pre.next;
      while(cur && count++<k) {
          cur = cur.next;
      }
      if(count<k) {
          return null;
      }
      let head = pre.next;
      let stub = pre.next;
      cur = stub.next;
      let i = 0;
      while(cur && ++i<k) {
          [head.next, stub, cur.next, cur] = [cur.next, cur, stub, cur.next];
      }
      pre.next = stub;
      
      return head;
  };

  const root = new ListNode();
  root.next = head;
  let pre = root;
  while(pre) {
      pre = helper(pre);
  }
  
  return root.next;
};



let reverse = (head) => {
  let prev = null;
  let h = head;
  while (head !== null) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
  return [prev, h];
}

var reverseKGroup = function(head, k) {
  if (head === null || k === 0) {
      return head;
  }
  let dummy = new ListNode(0);
  let prev = dummy;
  let slow = head;
  let fast = head;
  let count = 1;
  while (fast !== null && count < k) {
      fast = fast.next;
      count++;
  }
  while (slow !== null && fast !== null) {
      if (count !== k) {
          break;
      }
      let next = fast.next;
      fast.next = null;
      let re = reverse(slow)
      prev.next = re[0];
      prev = re[1];
      count = 1;
      slow = next;
      fast = next;
      while (fast !== null && count < k) {
          fast = fast.next;
          count++;
      }
  }
  if (slow !== null) {
      prev.next = slow;
  } else {
      prev.next = null;
  }
  return dummy.next;
};

function reverseList(node) {
  let prev = node;
  let curr = node.next;
  let next = node.next !== null ? node.next.next : null;
  
  prev.next = null;
  
  while(next) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = next.next;
  }
  if(curr)
      curr.next = prev;
}

var reverseKGroup = function(head, k) {
  if(k === 0 || !head || head.next === null) {
      return head;
  }
  
  let newHead = null;
  let prev = null;
  let start = head;
  let end = head;
  let curr;
  let next;
  let counter = 1;
  
  while(end !== null) {
      while(counter < k) {
          
          if(end.next) {
              counter++;
              end = end.next;
          } else {
              break;
          }
      }
      
      if(counter !== k) {
          break;
      }
      
      next = end.next;
      curr = end;
      end.next = null;
      if(newHead === null) {
          newHead = curr;
      }
      
      reverseList(start);
      
      if(prev)
          prev.next = curr;
      start.next = next;
      prev = start;
      start = next;
      counter = 1;
      end = start;
  }
  if(newHead === null) {
      return head;
  }
  return newHead;
  
};

