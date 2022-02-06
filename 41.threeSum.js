// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Examples
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
// [-1, 0, 1],
// [-1, -1, 2]
// ]

// Note: The solution set must not contain duplicate triplets.

var threeSum = function(nums) {
  const sum = 0;
  const len = nums.length;
  if(!nums || len < 3) return [];

  /** Sort the array first **/
  nums.sort(sortFunc);

  let arrayFinal = [];

  for(let i = 0; i< nums.length-2; i++){
      /** We start from both ends of the array **/
      let left = i+1;
      let right = nums.length-1;

      /** If same values, ignore and move to next **/
      if(i> 0 && nums[i] === nums[i-1]) continue;

      while(left < right){
          let cSum = nums[left] + nums[right] + nums[i]

          if(cSum < sum){
              /** Increment left **/
              left++;
          }else if(cSum > sum){
              /** decrease right **/
              right--;
          }else{
              let sumArr = [nums[left], nums[i], nums[right]].sort(sortFunc);
              arrayFinal.push(sumArr);
              /** Skip if values are similar**/
              while(nums[left] === nums[left+1]) left++;
              while(nums[right] === nums[right-1]) right--;
              left++;
              right--;
          }
      }

  }

  return arrayFinal;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
  // [[-1,-1,2],[-1,0,1]]])