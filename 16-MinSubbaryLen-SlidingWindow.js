// minSubArrayLen - an array of positive integers and a positive integer
//return the minimal length of a contiguos subarray of which the sum is greater thano r equal to the integer passed to the function= if there isn't one, return 0 instead

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}


// minSubArrayLen - an array of positive integers and a positive integer
//return the minimal length of a contiguos subarray of which the sum is greater thano r equal to the integer passed to the function= if there isn't one, return 0 instead
function minSubArrayLen2(array, num){
  //create a variable tempSum - 0
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while(start < array.length){
    if(total < num && end < array.length){
      total += array[end];
      end++;
    }
    else if(total >= num){
      minLength = Math.min(minLength, end - start);
			total -= array[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
  }}
  return minLength;
}
// minSubArrayLen - an array of positive integers and a positive integer
//return the minimal length of a contiguos subarray of which the sum is greater thano r equal to the integer passed to the function= if there isn't one, return 0 instead




console.log(minSubArrayLen3([2,3,1,2,4,3], 7)) //2
console.log(minSubArrayLen3([2,1,3,6,5,4], 9)) //2
console.log(minSubArrayLen3([3,1,7,11,2,9,8,21,62,33,19], 52)) //1 because [62] is greater than 52
console.log(minSubArrayLen3([1,4,16,22,5,7,8,9,10], 39))
console.log(minSubArrayLen3([2,3,1,2,4,3], 7))