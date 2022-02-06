// dividing a data set into smaller chunks and then repeating a process with a subset of data= this pattern can tremendously decrease time complexity

//given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located

// single loop - O(n) Log(n)

function search(array, val){
  let min = 0;
  let max = array.length -1;
  
  while(min - max){
    let middle = Math.floor((min + max) / 2);

    if(array[middle] < val){
      min = middle + 1;
    }
    else if (array[middle] > val){
      max = middle - 1;
    }
    else {
      return middle
    }
  }
  return 'not in there'

}

//given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located

function search3(array, num){
  let start = 0;
  let end = array.length -1;

  while(start < end){
    let middle = Math.floor((start + end) / 2);

    if(array[middle] < num){
      end = middle;
    }
    else if(array[middle] > num){
      start = middle
    }
    else{return middle}
  }
  return 'num not there'
  }


console.log(search3([1,2,3,4,5,6,7,8], 4)) //3
console.log(search3([1,2,3,5,7,8,3], 1999))
