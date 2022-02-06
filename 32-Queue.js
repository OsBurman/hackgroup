function Queue(){
this.first = null;
this.last = null;
this.size = 0;
}

function Node(){
  this.value = value;
  this.next = null;
}

Queue.prototype.enqueue = function(value){
  let newNode = newNode;
  if(!this.first){
    this.first = newNode;
    this.last = newNode;
  }
  else {
    this.last.next = newNode;
    this.last = newNode;
  }
  return ++this.size;
}

Queue.prototype.dequeue = function(){
  if(!this.first)return null;
  let temp = this.first;
  if(this.first === this.last){
    this.last = null
  }
  this.first = this.first.next;
  this.size--;
  return temp.value;
}




let hoohaa = new Queue();
