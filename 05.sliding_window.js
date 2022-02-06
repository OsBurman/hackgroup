//create a window which can be either an array or number from one position to another
//the window either increases or closes (and a new window is created)
//useful for keeping track of a subset of data in an array/string




// maxSubArraySum- accepts an array of integers and a number "n"= calculate the maximum sum of n consecutive elements in an array

//0(n^2)

function maxSubArraySum(array, num){
  if(num > array.length){
    return num
  }
  let max = -Infinity;
  //- num + 1 so that it doesn't go over the length of the array minus the amount of subarrays we're testing
  for(let i = 0; i < array.length - num + 1; i++){
    let temporaryMax = 0;
    for(let j = 0; j < num; j++){
      temporaryMax += array[i + j]
    }
      if(temporaryMax > max){
        max = temporaryMax
    }
  } return max
}

//0(n)

function maxSubArraySum2(array, num){
  let maxSum = 0;
  let tempSum = 0;
  if(array.length < num)return null;

  //looping however many times the number is- creating an initial sum to test
  for(let i = 0; i < num; i++){
    maxSum += array[i];
  }

  tempSum = maxSum;
 
  //sliding window here- we have the initial sum from the loop above. We add the value of the index in front of it and subtract the value of the index behidn it
  for(let i = num; i < array.length; i++){
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}
// maxSubArraySum- accepts an array of integers and a number "n"= calculate the maximum sum of n consecutive elements in an array

function maxSubArraySum3(array, num){
let tempSum = 0;
let maxSum = -Infinity;

for(let i = 0; i < num; i++){
  tempSum += array[i]
}
maxSum = tempSum;

for(let i = num; i < array.length; i++){
  tempSum = tempSum + array[i] - array[i - num];
  maxSum = Math.max(tempSum, maxSum)
}
return maxSum
}


console.log(maxSubArraySum3([1,2,5,2,8,1,5], 2))//10
console.log(maxSubArraySum3([1,2,5,2,8,1,5], 3)) //15
console.log(maxSubArraySum3([1,2,5,2,8,1,20], 3)) //29