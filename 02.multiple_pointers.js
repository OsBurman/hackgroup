// sumzero- accepts a sorted array of integers- find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair ndoesnt exist 


//time complexity 0(N^2)
//Space complexity - 0(1)

function sumZero(array){
  for(let i = 0; i < array.length; i++){
    for(let  j = 0; j < array.length; j++){
      if(array[i] + array[j] === 0)
      return [array[i], array[j]]
    }
  }return 'no integers do that'
}


function sumZero2(array){
  let left = 0;
  let right = array.length -1;
  while(left < right){
    let sum = array[left] + array[right];
    if(sum === 0){
    return [array[left], array[right]]}
  
  else if(sum > 0){
    right--
  }
  else {
    left++
  }}
  return 'no match'
}

// sumzero- accepts a sorted array of integers- find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair ndoesnt exist 


function sumZero3(array){
 let start = 0;
 let end = array.length - 1;
 while(start < end){
   if(array[start] + array[end] === 0)return true;
   if(array[start] + array[end] < 0)start++;
   if(array[start] + array[end] > 0) end--;
 }
 return false
}




console.log(sumZero3([-10, -3, -2, -1, 0, 1, 2, 3, 4]))
console.log(sumZero3([1,4,6,8,10]))