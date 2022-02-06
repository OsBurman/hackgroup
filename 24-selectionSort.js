//similar to bubble sort, but instead of first placing large vlaues into sorted position, it plaecs small values into sorted position


  //store the first element as the smallest value you've seen so far
  //compare this item to the next item in the array until you find a smaller number
 
  //if a smaller number is found, designate the smaller number to be the new minimum and continue until the end of the array
  //if minium is not the value (index) you initially began with, swap the two values

  //repeat this with the next element until the array is sorted
  function selectionSort(array){
  for(let i = 0; i < array.length; i++){
    let lowest = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[lowest]){
        lowest = j;
      }
    }
    let temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  
  }
  return array
}

//decrease time complexity- still O(n^2)

function selectionSort3(array){
  const swap = (array, idx1, idx2) =>
  ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
  
  for(let i = 0; i < array.length; i++){
    let lowest = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[lowest] > array[j]){
        lowest = j;
      }
    }
    if(i !== lowest) swap(array, i, lowest)
  }

  return array
}

function selectionSort2(array){
 const swap = (array, index1, index2)=>{
   [array[index1], array[index2]] = [array[index2], array[index1]]
 }
 for(let i = 0; i < array.length; i++){
   let tempIndex = i;
   for(let j = i + 1; j < array.length; j++){
     if(array[tempIndex] > array[j]){
       tempIndex = j
     }
   }
   if(i !== tempIndex)swap(array, i, tempIndex)
 }
 return array
}

console.log(selectionSort2([4,54,7,97,1,455,76,21]))