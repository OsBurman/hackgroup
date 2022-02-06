// Implement a function to check if a binary tree is a binary search tree.

function bstTree(value) {
  this.value = value
  this.right = null
  this.left = null
}
bstTree.prototype.checkIfBst = function() {
// console.log('this is', this);
if (this.value === null) return true;
if (this.right === null && this.left === null) return true;
//check the values on the left and right
if (this.left.value < this.value && this.right.value > this.value){
  return this.left.checkIfBst() && this.right.checkIfBst();
}
return false;
}
const myInvalidBST = new bstTree(5);
myInvalidBST.right = new bstTree(10);
myInvalidBST.left = new bstTree(10);
myInvalidBST.right.right = new bstTree(30);
myInvalidBST.left.right = new bstTree(10);
myInvalidBST.right.left = new bstTree(2);
myInvalidBST.left.left = new bstTree(1);
console.log(myInvalidBST);
console.log(myInvalidBST.checkIfBst()); //false
const myValidBST = new bstTree(7);
myValidBST.left = new bstTree(3);
myValidBST.right = new bstTree(15);
console.log(myValidBST);
console.log(myValidBST.checkIfBst()); //true