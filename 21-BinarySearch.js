// BinarySearch accepts sorted array and a value

function binarySearch(array, value){
//create left poitner at start of array
let leftPointer = 0;
//create a right pointer at the right of the array
let rightPointer = array.length -1;
// while the left pointer comes before the right pointer
while(leftPointer < rightPointer){
//create a pointer in teh middle
let middle = Math.floor((leftPointer + rightPointer) / 2);

//if you find the value you want, return the index
if(array[middle] === value) return middle
//if the value is too small, move the left pointer up
if(array[middle] < value)leftPointer = middle + 1;
}
return -1
}

function binarySearch2(array, value){
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(array[middle] !== value && start <= end){
    if(value < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  if(array[middle] === value){
    return middle
  }
    return -1
}


console.log(binarySearch2([1,2,3,4,5,6,7,8,9,10], 8))
console.log(binarySearch([1,4,7,9,11,14,25,67,89], 25))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 12));
