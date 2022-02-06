// countUniqueValues accepts a sorted Array, and counts the unique values in the array

function countUniqueValues(array){
  if(array.length === 0)return 0;
  let i = 0;
  for(let j = 0; j < array.length; j++){
    if(array[i] !== array[j]){
      i++;
      array[i] = array[j];
    }
  }
  return i + 1
}



function countUniqueValues2(array){
  let cache = {};
  for(let i = 0; i < array.length; i++){
    if(!cache[array[i]]){
      cache[array[i]] = 1 
    }
    else {
      cache[array[i]]++;
    }
   
  }
  let j = 0;
  for(let key in cache){
    if(cache[key] > 1){
      j++
    }
  }return j
}

// countUniqueValues accepts a sorted Array, and counts the unique values in the array

function countUniqueValues3(array, num){
  let pointer1 = 1;
  let count = 0
  while(array[pointer1]){
    if(array[pointer1] === array[pointer1 - 1]){
      pointer1++
    }
    else{
      pointer1++;
      count++;
    }
  }return count
}

console.log(countUniqueValues3([1,1,1,2,3,3,4,4,5,6, 7]))