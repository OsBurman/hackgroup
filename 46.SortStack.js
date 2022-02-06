
class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  push(element) {
    this.items.push(element);
    this.length += 1;
  }
  pop() {
    if (this.length !== 0) {
      this.length -= 1;
      return this.items.pop();
    } else return;
  }
  peek() {
    return this.items[this.length - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
}
let theStack = new Stack();
theStack.push(1);
theStack.push(6);
theStack.push(5);
theStack.push(3);
theStack.push(7);
console.log(theStack.items);

// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push pop, peek, and isEmpty. 












function sortStack(stack){
  //base case if stack is undefined
  if (!stack) return;
  //declare object to hold sorted elements
  let finalStack = new Stack();
  //pop of key/val pairs keeping track of largest value while stack exists
  function inner(stack){
    console.log('inner running with stack', stack)
    if (!stack || stack.IsEmpty()) return finalStack;
    //declare variable to hold largest value
    let largest;
    //declare an object to hold temp stack
    let tempStack = new Stack()
    while (!stack.IsEmpty()) {
      //largest is undefined --> set the value of largest to be the popped off value from stack
      if (!largest) largest = stack.pop()
      //if the value at the top of the stack is larger than largest --> assign that popped off value to largest & push the previous largest onto temp stack
      else if (stack.peek() > largest) {
        tempStack.push(largest)
        largest = stack.pop()
      } else {
        tempStack.push(stack.pop())
      }
    }
    finalStack.push(largest);
    return inner(tempStack);
  }
  return inner(stack);
  //repeat process by recursively calling function, passing in temp stack.
  //push largest into tempStack
  //returnn
  //sort stack - largest on the bottom & smallest on top
}
console.log(sortStack(myStack));