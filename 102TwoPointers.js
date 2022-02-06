// Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or linked list; for example, when you have to compare each element of an array to its other elements.

// Two pointers are needed because with just pointer, you would have to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity — a concept referred to as asymptotic analysis. While the brute force or naive solution with 1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution with better space or runtime complexity.

// Ways to identify when to use the Two Pointer method:

// 1.It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
// 2. The set of elements in the array is a pair, a triplet, or even a subarray

// isSubsequence- takes in two strings and checks whether the characters in teh first string form a subsequence of the characters in the second string. In other words, chcek whetehr chcaratcerrs in first string appear somewhere in teh second string, without their order changing

function inSubsequence(string1, string2){
let pointer1 = 0;
let pointer2 = 0;

if(!string1)return true;

while(pointer2 < string2.length){
  if(string2[pointer2] === string1[pointer1]) pointer1++;
  if(pointer1 === string1.length)return true;
  pointer2++;
}
return false
}


function inSubsequence2(short, long){
  if(short > long)return false;
  let shortPointer = 0;
  let longPointer = 0;
  let count = 0;
  while(long[longPointer]){
    if(count === short.length){
      return true
    }
    if(short[shortPointer] === long[longPointer]){
      count++;
      shortPointer++;
      longPointer++
    }
    else{
      count = 0;
      shortPointer = 0;
    }
  }
return false
}


console.log(inSubsequence2('hello', 'hello world')) //true
console.log(inSubsequence2('sing', 'sting')) //true
console.log(inSubsequence2('abc', 'abracadabra')) //true
console.log(inSubsequence2('abc', 'acb')) //false order matters

____________________________________________

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares = (A) => {
  let result = [] //empty array to push new value
  let start = 0 //beginning index of the array
  let end = A.length - 1 // end index of the array
  let position = end //the position in result array of new value

  while (start <= end) { //start point can't be smaller than end point 
      if (A[start] ** 2 > A[end] ** 2) { //if squared start index value is 
                                        //greater than end index value
          result[position--] = A[start++] ** 2 //put it from the end of the result array
      } else {// if squared end value is greater 
              //or equal to the start value
          result[position--] = A[end--] ** 2  //put it from the end of the result array
      }
  }
  
  return result //return transformed sorted new array
};

// The time complexity of the two pointers is O(n).

// _____________________________________________________________________

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares2 = (A) => {
  let result = [] //empty array to push new value
  let start = 0 //beginning index of the array
  let end = A.length - 1 // end index of the array
  let position = end //the position in result array of new value

  while (start <= end) { //start point can't be smaller than end point 
      if (A[start] ** 2 > A[end] ** 2) { //if squared start index value is 
                                        //greater than end index value
          result[position--] = A[start++] ** 2 //put it from the end of the result array
      } else {// if squared end value is greater 
              //or equal to the start value
          result[position--] = A[end--] ** 2  //put it from the end of the result array
      }
  }
  
  return result //return transformed sorted new array
};

// __________________________________________________________

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

  ________________________________________________________________

//   844. Backspace String Compare

//   Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

//   It was not easy for me to understand the solutions in the discussion, so I decided to make this post.

// The idea is to separate moving pointers routine from the main loop in order to make solution more easy to read.

// Hope this helps someone better understand this problem.


	function backspaceCompare(S, T) {
		// in order to use two pointers and not use stack we have to start from the **end** of the string
		// this way we know how much characters to skip, if we encounter '#'
		// otherwise we don't know how many hashes in front of us and need to use stack (aux memory)
		var sPointer = S.length - 1
		var tPointer = T.length - 1

		while (true) {
			// we need to start from moving pointers, because string can end with '#'
			sPointer = movePointer(sPointer, S)
			tPointer = movePointer(tPointer, T)
			// if one pointer is outside of the string boundaries second should be outside at the same moment
			// it means all previous characters are the same and we reached beginning of two strings at the same time
			if (sPointer == -1 || tPointer == -1) {
				return sPointer == -1 && tPointer == -1
			}

			// we advanced pointers to characters, so just check them
			if (S[sPointer] != T[tPointer]) {
				return false
			}

			// if characters are the same proceed to previous char and then try to move pointer if needed
			sPointer--
			tPointer--
		}
	}

	/**
	 * This is straightforward implementation. We simply check what is under currentPointer if we can,
	 * and continuing to move pointer to the beginning of the string until we meet '#'.
	 *
	 * Each time we encounter a '#' we add one to hashes, so the next time we see non-'#', we skip it.
	 */
	function movePointer(currentPointer, string){
		var pointer = currentPointer
		var hashes = 0
		while (pointer >= 0 && (hashes > 0 || string[pointer] == '#')) {
			if (string[pointer] == '#') {
				hashes++
			} else {
				hashes--
			}
			pointer--
		}
		return pointer
	}


var backspaceCompare = function(S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  let skipCount1 = 0;
  let skipCount2 = 0;
  while (i >= 0 || j >= 0) {
    if (S[i] === '#') {
      skipCount1++
      i--
    } else if (skipCount1 > 0 && i >= 0) {
      skipCount1--
      i--
    } else if (T[j] === '#') {
      skipCount2++
      j--
    } else if (skipCount2 > 0 && j >= 0) {
      skipCount2--
      j--
    } else if (S[i] !== T[j]) {
      return false
    } else {
      i--
      j--
    }
  }
  
  return true;
};