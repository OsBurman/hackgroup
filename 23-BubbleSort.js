//a soritng algorthm where the largest values bubble to the top

// function swap(){
// let tempVariale = arr[index1];
// arr[[index1]] = arr[index2];
// arr[index2] = tempVariale;
// }

//O(n^2)

function bubbleSort(array){
  //start looping from the end of the array to the beginning with a variable i
for(let i = array.length -1; i >= 0; i--){
  //start an inner loop with a variable j from the beginning until i - 1
  for(let j = 0; j <= i - 1; j++){
  //if arr[j] is greater than arr[j+1], swap those two values
  if(array[j] > array[j + 1]){
    let temp = array[j]
    array[j] = array[j + 1]
    array[j + 1] = temp
  }
}}
return array
  //return the sorted array
}

//add a swap to break out of the loop- O(n)

function bubbleSort2(array){
  let noSwaps;
  //start looping from the end of the array to the beginning with a variable i
for(let i = array.length -1; i >= 0; i--){
  noSwaps = true;
  //start an inner loop with a variable j from the beginning until i - 1
  for(let j = 0; j <= i - 1; j++){
  //if arr[j] is greater than arr[j+1], swap those two values
  if(array[j] > array[j + 1]){
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
    noSwaps = false;
  }
}
  if(noSwaps)break;
}
return array
  //return the sorted array
}

function bubbleSort3(array){
  let noSwaps;

  for(let i = array.length -1; i >= 0; i--){
    noSwaps = true;
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps)break;
  }

  return array;

  }
  

//a soritng algorthm where the largest values bubble to the top

//Optimitized


console.log(bubbleSort3([1,3,6,39,44,5,8,2]))