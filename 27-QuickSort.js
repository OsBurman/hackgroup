//like mergesort, exploits the fact that arrays of 0 or 1 element are always sorted
//works by selecitng one element (called the "pivot") and fidning the index where the pivot should end up in the sorted array
//once the pivot is positinoned appropriately, quick sort can be applied on either side of the the pivot
//does left side, then right side

//look at visualalgo

function pivot2(array, start=0, end=array.length + 1){

  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
  }

  let pivot = array[start];
  let swapIndex = start;

  for(let i = start + 1; i < array.length; i++){
    if(pivot > array[i]){
      swapIndex++;
      swap(array, swapIndex, i)
    }
  }
  swap(array, start, swapIndex);
  return swapIndex;
}


function quickSort2(array, left = 0, right = array.length - 1){
  if(left < right){
  //call the pivot helper on the array
  let pivotIndex = pivot(array, left, right);
  //when helper reutrns to you the updated pivot index, recurisvely call the pivot helper on teh subarray to the left of that index, and the subarray to the right of that index
  quickSort(array, left, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, right)}
  //Your base case occurs when you consider a subarray with less than 2 elements
  return array;
  //
}


// basic implementation, where pivot is the first element
function quickSort3(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if ( array[i] > pivot ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }

  return quickSort3(lesserArray).concat(pivot, quickSort3(greaterArray));
}


// First write the swap function, which is just a helper function to swap values of the array.
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quickSort(array, left, right) {
  // left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
  left = left || 0;
  right = right || array.length - 1;

  var pivot = partition(array, left, right);

  if (left < pivot - 1) {
      quickSort(array, left, pivot - 1);
  }

  if (right > pivot) {
      quickSort(array, pivot, right)
  }

  return array;

}

/* Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped. 
Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair. 
That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
*/
function partition(array, left, right) {
  var pivot = Math.floor((left + right) / 2);

  while (left < right) {
      while (array[left] < array[pivot]) {
          left++
      }
      while (array[right] > array[pivot]) {
          right--
      }

      if (left <= right) {
          swap(array, left, right);
          left++
          right--
      }
  }
  return left;
}


console.log(quickSort3([5,2,1,8,4,7,6,3]))
// console.log(quickSort([3,5,6,7,4,32,66666,4444]))
// console.log(quickSort([353,45,6,7,3,4343,66666,1]))
