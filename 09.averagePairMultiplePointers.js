// given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average
function averagePair(arr, num){
  let start = 0;
  let end = arr.length -1;
  while(start <end){
    let avg = (arr[start] + arr[end]) /2;
    if(avg === num) return true;
    else if(avg < num) start++;
    else end--
  } return false
}



// given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average





function averagePair2(array, num){
let start = 0;
let end = array.length - 1;
while(start < end){
  let avg = (array[start] + array[end]) /2;
  if(avg === num) return true;
  else if(avg < num){
    start++
  }
  else if (avg > num){
    end--
  }
  } 
return false
}




  // let start = 0; 
  // let end = array.length - 1;
  // while(start < end){
  //   let sum = (array[start] + array[end]) / 2;
  //   if(sum === num)return [array[start], array[end]];
  //   else if(sum < num){
  //     start++
  //   }
  //   else if(sum > num){
  //     end--
  //   }
  // }
    
  // return false









console.log(averagePair2([1,2,3], 2.5)); //true
console.log(averagePair2([1,3,3,5,6,7,10,12,19], 8)) //true
console.log(averagePair2([-1, 0, 3,4,5,6], 4.1)) //false
console.log(averagePair2([], 4)) //false