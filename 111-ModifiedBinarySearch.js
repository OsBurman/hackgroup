// 11. Modified binary search

// Whenever you are given a sorted array, linked list, or matrix, and are asked to find a certain element, the best algorithm you can use is the Binary Search. This pattern describes an efficient way to handle all problems involving Binary Search.

// The patterns looks like this for an ascending order set:

// First, find the middle of start and end. An easy way to find the middle would be: middle = (start + end) / 2. But this has a good chance of producing an integer overflow so it’s recommended that you represent the middle as: middle = start + (end — start) / 2
// If the key is equal to the number at index middle then return middle
// If ‘key’ isn’t equal to the index middle:
// Check if key < arr[middle]. If it is reduce your search to end = middle — 1
// Check if key > arr[middle]. If it is reduce your search to end = middle + 1

// Problems featuring the Modified Binary Search pattern:

// Order-agnostic Binary Search (easy)Search in a Sorted Infinite Array (medium)

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
  
  function binarySearch3(array, value){
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
  
  function binarySearch2(array, num){
    let middle = Math.floor(array.length / 2);
    let start = 0;
    let end = array.length - 1;
    while(start < end){
      middle = Math.floor((start + end) / 2)
      if(array[middle] === num)return middle;
      else if(num > array[middle]){
        start = middle;
      }
      else if(num < array[middle]){
        end = middle;
      }
    }
  }
  
  console.log(binarySearch2([1,2,3,4,5,6,7,8,9,10], 8))
  console.log(binarySearch([1,4,7,9,11,14,25,67,89], 25))
  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 12));

  // ______________________________________
  

  // Search in a Sorted Infinite Array