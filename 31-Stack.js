function Node(value){
  this.value = value;
  this.next = null;
}

function Stack(){
  this.first = null;
  this.last = null;
  this.size = null;
}

Stack.prototype.push = function(value){
  let newNode = new Node(value);
  if(!this.first){
    this.first = newNode;
    this.last = newNode;
  }
  else {
    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;
  }
  return ++this.size;
}

Stack.prototype.pop = function(){
  if(!this.first) return null;
  let temp = this.first;
  if(this.first === this.last){
    this.last = null
  }
  this.first = this.first.next;
  return --this.size;  
}


let hoohaa = new Stack();
console.log(hoohaa.push(1));
hoohaa.push(2);
hoohaa.push(3);
console.log(hoohaa)
hoohaa.pop();
console.log(hoohaa)