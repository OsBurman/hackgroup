function Node(val){
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
  this.length - 0;
}

//create a new node with value from function
//if head is null, set head and tail to be newly created node
// if not, set the next proerpty on the tail to be that node
//set the previous property on the newly created node to be that tail
//set the tail to be the newly created node
//increment the lenght
//return that list

DoublyLinkedList.prototype.push = function(value){
  let newNode = new Node(value);
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  }
  else{
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
  return this;
}

DoublyLinkedList.prototype.remove = function(value){
  if(!this.head)return;

  if(this.head.val === value){
    if(!this.head.next){
      this.head = null;
      this.tail = null;
    }
  }
  else {
    this.head = this.head.next;
    this.head.prev = null;
  }
}

const removeFromList = (curNode, val) => {
  // basecase: if finished traversing, return as there's nothing to remove
  if (!curNode) return;
  // if curNode's value matches value we're looking to remove
  if (curNode.val === val) {
    // glue prev and next nodes together, bypassing curNode
    curNode.prev.next = curNode.next;
    // if the next node is not null, also take care of the previous pointer (DLL)
    if (curNode.next) curNode.next.prev = curNode.prev;
    // otherwise, we're at tail, update tail as well (DLL)
    else this.tail = curNode.prev;
  }
  // otherwise, keep going with the next node
  else removeFromList(curNode.next, val);

// call helper function with the node after head node (since already checked)
removeFromList(this.head.next, val);
}





DoublyLinkedList.prototype.remove = function (val) {
  // if list is empty, nothing to remove, so return list
  if (!this.head) return;
  // if value is in head, remove head
  if (this.head.val === val) {
    // is this the only item on the list?
    // if so, head and tail are both set to null
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    // otherwise, update the head to the next value and remove the prev reference
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return;
  }
}


let hoohaa = new DoublyLinkedList();
hoohaa.push(1);
hoohaa.push(2);
hoohaa.push(3);
hoohaa.push(4);
hoohaa.push(5);
hoohaa.push(6);
console.log(hoohaa)