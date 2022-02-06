// This pattern describes an interesting approach to deal with problems involving arrays containing numbers in a given range. The Cyclic Sort pattern iterates over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index. You could try placing the number in its correct index, but this will produce a complexity of O(n^2) which is not optimal, hence the Cyclic Sort pattern.'

// How do I identify this pattern?

// They will be problems involving a sorted array with numbers in a given range
// If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array
// Problems featuring cyclic sort pattern:


// Find the Missing Number (easy)
// Find the Smallest Missing Positive Number (medium)

// The problem states that we need to determine a missing number from a series 0,1,2,3,4,...n of length n.

var missingNumber = function (nums) {
  const length = nums.length;
  let sum = ((length + 1) * length) / 2;

  for (let i = 0; i < length; i++) {
    sum = sum - nums[i];
  }

  return sum;
};

const missingNumber = function(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i];
    
    if (nums[i] !== nums[j]) { // in JS we don't need to check for array boundaries, we'd need it in other languages - Java, C++ etc
      [nums[i], nums[j]]  = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  
  return nums.length;
};

_________________________


// Description —
// Given an unsorted integer array, find the smallest missing positive integer.
// Example 1: 
// Input: [1,2,0]
// Output: 3
// Example 2: 
// Input: [3,4,-1,1]
// Output: 2
// Example 3:
// Input: [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function(nums) {
  // if input: [1,2,0]
  // eliminate the edge case 
  if (nums.length < 1) {
      return 1;
  };
  
  // we can use hash/obj to sort the numbers array
  let myHash = {}; 
  
  // we will take off negative numbers when we create myHash
  for (let num of nums) {if (num > 0) myHash[num] = true};
  
  // myHash = { '0': true, '1': true, '2': true }
  
  // 1 is first positive integer
  let missing = 1; 
  
  
  for (missing; missing <= nums.length; missing++) {
      
   // if the [missing key] doesn't exit, then we return the number
      if (!myHash[missing]) {
          return missing;
      };
      
      // else we increment 1 then keep looping
  };
  
  // otherwise return 1 
  return missing; 
};

var firstMissingPositive2 = function(nums) {
    
  // If input array is empty, smallest missing positive number would be 1.
  if(!nums.length) {
      return 1;
  }
  
  let n = nums.length;
  let i = 0;
  
  // Cyclic Sort: Try placing each number from [1...n] 
  // to its correct index: nums[i] - 1
  while(i < n) {
      let j = nums[i] - 1;
      
      // if there is a positive number in the range [1...n]
      // and it is not at its correct index (i-1)
      // swap nums[i] with nums[nums[i] - 1] 
      if(nums[i] > 0 &&  n >= nums[i] && nums[i] !== nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
          i++;
      }
  }
  
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== (i+1)) {
          return i+1;
      }
  }
  
  // if we reached here, it means all numbers in nums array are
  // containing the first 'n' positive numbers already
  // hence, smallest positive number missing would be nums.length + 1;
  return nums.length + 1;
  
};
