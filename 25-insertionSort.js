//build up the sort by gradually creating a larger left portion which is always sorted
//[[5,3,4,1,2]]
//[3,5,4,1,2]
//[3,4,5,1,2]
//[1,3,4,5,2]


//let binds a variable to block scope= var doesn't - this code wont work with let

function insertionSort(array){
//start by picking the second element in the array
for(var i = 1; i < array.length; i++){
  var currentValue = array[i];
//now compare the second element with the one before and swap if necessary
  for(var j = i - 1; j >= 0 && array[j] > currentValue; j--){
    array[j + 1] = array[j]
  }
    
//continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left the side) to place the element in the correct place
    array[j + 1] = currentValue;
//return the array
}
return array
}







console.log(insertionSort([2,1,9,76,4,5646,43,6,999]))