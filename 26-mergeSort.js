//merege and srot- explinas the fact that arrays of 9 or 1 elements are always sorted
//works by decomposing an array into smaller arrays of 0 or 1 elements, hen building up a new sorted array

//O(n log n)- every time we split, we are doing it exponentially

function merge2(array1, array2){
//create an empty array
let results = [];

//take a look at the smallest values in each input array - two loops - one i, one j- while loops- both start at 0
let i = 0; 
let j = 0;

//while there are still values we haven't looked at

while(i < array1.length && j < array2.length){
//if the value in the first array is smaller than the value in the second array, push teh value in teh first array into our results and move on to the next value in the first array

if(array1[i] < array2[j]){
  results.push(array1[i])
  i++;
} 
//if the value in teh first array is larger than the value iin teh secondy array, push the value in the second array into our results and move on to the next value in teh second array
else {
  results.push(array2[j]);
  j++;
}

//once we finish our array, push in all remaining values from the other array

}
while(i < array1.length){
  results.push(array1[i])
  i++;
}
while(j < array2.length){
  results.push(array2[j])
  j++
}
return results
}


//

function mergeSort3(array){
  //break up array into halves until you have arrays that are empty or have one element
  if(array.length <= 1)return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right)

  

  //once you have smaller sorted arrays, merge those arrays with other sorted arrasy utnil you are back at the full length of the array
  //once the array has been merged back together, retrun the merged (and sorted) array
}
function mergeSort(array){

  function merge(leftArray, rightArray){
  let mergedArray = [];
  while(leftArray.length && rightArray.length){
    if(leftArray[0] < rightArray[0]){
      mergedArray.push(leftArray.shift())
    }
    else {
      mergedArray.push(rightArray.shift())
    }
  }
  return [...mergedArray, ...leftArray, ...rightArray]
}

const half = array.length / 2;
if(array.length < 2) return array;

const leftArray = array.splice(0, half);
return merge(mergeSort(leftArray),mergeSort(array))

}

//sort array by splitting arrays- then merge them back together building up from single digits back to teh full array in order




function mergeSort4(array){
//check if middle array can be split
if(array.length < 2)return array;
//get middle index
const middle = Math.floor(array.length / 2)
//split array in two sides
const leftSide = array.slice(0, middle);
const rightSide = array.slice(middle)
//use recursion to continue splitting
return merge(mergeSort4(leftSide), mergeSort4(rightSide))
}

function merge(left, right){
  //create a new array
  const result = [];
  //if either the left array or the right array is empty
  while(left.length && right.length){
  //find the lower value
    if(left[0] <= right[0]){
  //add left value- pop out value from left array and push it into the result array
    result.push(left.shift())
    } else {
  //add right value
  result.push(right.shift());
    }}
  //merge left array
    while(left.length) result.push(left.shift());
  //merge righ tarray
  while(right.length) result.push(right.shift());
  //return result array
  return result
}

//have two separate functions - one to divide the main array, the other to merge the arrays- 

function mergeSort6(array){
  //set a base case= check if the array's length is one
if(array.length < 2)return array;
  //divide the array into two halves- first find the middle of the array
let middle = Math.floor(array.length / 2)
  //separate the array into left and right arrays
let left = array.slice(0, middle);
let right = array.slice(middle)
  //use recurisoin to continue splitting the arrays- add helper function that merges them
return merge6(mergeSort6(left), mergeSort6(right))
}

function merge6(left, right){
//create a results array
const result = [];
//check if the left or right arrays are empty- start a while loop
while(left.length && right.length){
//if not, check if the left is lower than the right
if(left[0] < right[0]){
//if so, pop out the value from the left array and push it into the result array
result.push(left.shift())}
//if the right is lower than add the right value to result array
else {
  result.push(right.shift())
}}
//merge the left array if it exists
while(left.length)result.push(left.shift());
//mere the right array if it exists
while(right.length)result.push(right.shift());
//return the result array


return result
}

function mergeSort7(array){
  if(array.length < 2)return array;
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return merge7(mergeSort7(left), mergeSort7(right))
}
function merge7(left, right){
  let result = [];
while(left.length && right.length){
  if(left[0] < right[0])result.push(left.shift());
  if(right[0] < left[0])result.push(right.shift())
}    
  if(left.length)result.push(left.shift());
  if(right.length)result.push(right.shift());
  return result
  }

  function mergeSort8(array){
    if(array.length < 2)return array;

    let middle = Math.floor(array.length /2);
    let left = array.slice(0, middle);
    let right = array.slice(middle)
    return(merge8(mergeSort8(left), mergeSort8(right)))

    function merge8(left, right){
      let result = [];
      while(left.length && right.length){
        if(left[0] < right[0])result.push(left.shift());
        if(right[0] < left[0])result.push(right.shift());
      }
        if(left.length)result.push(left.shift());
        if(right.length)result.push(right.shift());
        return result
      
    }

  }

console.log(mergeSort8([1,34,56, 5,2,55,888,4]))
