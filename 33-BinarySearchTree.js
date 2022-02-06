class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}


BinarySearchTree.prototype.insert = function(value){
let newNode = new Node(value);
if(this.root === null){
  this.root = newNode;
  return this;
}
else {
  let current = this.root;
  while(true){
    if(value === current.value){return undefined}
    if(value < current.value){
      if(current.left === null){
        current.left = newNode;
        return this;
      } 
        current = current.left;
    }
    else if(value > current.value){
      if(current.right === null){
        current.right = newNode;
        return this;
      }
      current = current.right
    }
  } 
}
return this
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree);




BinarySearchTree.prototype.contains = function(value){
if(!this.root)return false;
if(this.root.value === value){return true}
else {
  let current = this.root;
  while(current){
    if(current.value === value){
      return true
    }
    else{
      if(current.value > value){
        if(!current.left)return false;
        else{current = current.left}
      }
      if(current.value < value){
        if(!current.right)return false;
        else{current = current.right}
      }
    }
  }
}
}


console.log(tree.contains(3))


//Breadth vs. Depth - Depth has less space complexity

// Breadth-first-Search

//BFS - Steps - Iteratively
//-create a queue (can be an array) and a variable to store the values of the nodes visited - push and shift
//Place hte root node in the queue
//loop as long as there is anythign in the queue
//Dequeu a node from the queue and push the value of th enode into the variable that stores that nodes
//If there is a left property on the node dequeued- add it to the queue
//If there is a right property on the node dequeued - add it to the queue

  //     10
  //   6     15
  // 3   8     20

//queue  [10], visited []
//queue  [6, 15], visited [10]
//queue  [15, 3, 8], visited [10, 6]
//queue  [3,8, 20], visited [10, 6, 15]
//queue  [8, 20], visited [10, 6, 15, 3]
//queue  [20], visited [10, 6, 15, 3, 8]
//queue  [10], visited [10, 6, 15, 3, 8, 20]
//queue  [10], visited []

BinarySearchTree.prototype.BFS = function(value){
let data = [];
let queue = [];
let node = this.root;
let count = 0;
queue.push(node);
while(queue.length){
  node = queue.shift();
  data.push(node.value);
  if(node.left)queue.push(node.left);
  if(node.right)queue.push(node.right)
}
return data
}


BinarySearchTree.prototype.BFS2 = function(){
 let stack = [];
 let queue = [];
 queue.push(this.root);

 while(queue.length){
   let node = queue.shift();
   stack.push(node.value);
   if(node.left)queue.push(node.left);
   if(node.right)queue.push(node.right);
 }
 return stack
}

console.log(tree.BFS()) //[10, 6, 15, 3, 8, 20]

//DFS - DOWN UNTIL WE HIT THE END OF THE TREE

//DFS - Preorder 
//Steps - Recursively

//create a variable to to store the values of the nodes visited
//store the root of the BST in a variable called current
//Write a helper function that accepts a node
  //push the value of the node to the variale that stores the values
  //if the node has a left proerpty, call the helper ufnction with the left
  //if the node has a right property, call the helper function with the right

//     10
  //   6     15
  // 3   8     20

  // [10] - [6] - [3] - 

  //visit a node- traverse the entire left side, then the entire right side

  //useful trying to clone or duplicate a tree and store it in a file- 

BinarySearchTree.prototype.DFSPreOrder = function(){
  let data = [];
  // let current = this.root;  //don't need current, can just use this.root

  function traverse(node){
    data.push(node.value);
    if(node.left)traverse(node.left);
    if(node.right)traverse(node.right);
  }
  
  traverse(this.root)
  //   traverse(current);
    return data;
  }
  //     10
  //   6     15
  // 3   8     20
  BinarySearchTree.prototype.DFSPreOrder2 = function(){
  let stack = [];

  function traverse(node){
    stack.push(node.value);
    if(node.left)traverse(node.left);
    if(node.right)traverse(node.right);
  }
  traverse(this.root);
  return stack
  }

console.log(tree.DFSPreOrder2()); //[ 10, 6, 3, 8, 15, 20 ]


//DFS PostOrder

//DFS - Preorder 
//Steps - Recursively

//create a variable to to store the values of the nodes visited
//store the root of the BST in a variable called current
//Write a helper function that accepts a node
  
  //if the node has a left proerpty, call the helper ufnction with the left
  //if the node has a right property, call the helper function with the right
  //push the value of the node to the variale that stores the values

//visit a node after we've looked at the left and right
//grab from the bottom
// 10 => 6 => 3 => 8 => 6 => 10 => 15 => 20

BinarySearchTree.prototype.DFSPostOrder = function(){
  let data = [];
  let current = this.root;  //don't need current, can just use this.root

  function traverse(node){
    if(node.left)traverse(node.left);
    if(node.right)traverse(node.right);
    data.push(node.value);

  }
    traverse(current);
    return data;
  }


BinarySearchTree.prototype.DFSPostOrder2 = function(){
  let stack = [];

  function traverse(node){
    if(node.left)traverse(node.left);
    if(node.right)traverse(node.right);
    stack.push(node.value);
  }
  traverse(this.root);
  return stack;
}

console.log(tree.DFSPostOrder2());  //[ 3, 8, 6, 20, 15, 10 ]


//DFS PostOrder

//DFS - Preorder 
//Steps - Recursively

//create a variable to to store the values of the nodes visited
//store the root of the BST in a variable called current
//Write a helper function that accepts a node
  
  //if the node has a left proerpty, call the helper ufnction with the left
  //push the value of the node to the variale that stores the values
  //if the node has a right property, call the helper function with the right



BinarySearchTree.prototype.DFSInOrder = function(){
  let data = [];

  function traverse(node){
    if(node.left)traverse(node.left);
    data.push(node.value);
    if(node.right)traverse(node.right);

  }
    traverse(this.root);
    return data;
  }

console.log(tree.DFSInOrder());  [ 3, 8, 6, 20, 15, 10 ]