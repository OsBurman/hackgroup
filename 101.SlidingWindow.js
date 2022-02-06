
// The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element and adjust the length of the window according to the problem that you are solving. In some cases, the window size remains constant and in other cases the sizes grows or shrinks.

// Following are some ways you can identify that the given problem might require a sliding window:


// 1. The problem input is a linear data structure such as a linked list, array, or string
// 2. You’re asked to find the longest/shortest substring, subarray, or a desired value


// given an array of integers and a Number= maxSubarraySum, which finds the maximum sum of a subarray with teh elength of the number passed to teh function


function maxSubarraySum(array, num){
  let maxSum = 0;
  let tempSum = 0;
  if(array.length < num)return null;

  //looping however many times the number is
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

// given an array of integers and a Number= maxSubarraySum, which finds the maximum sum of a subarray with teh elength of the number passed to teh function

function maxSubarraySum2(array, num){
  let maxSum = 0;

  for(let i = 0; i < num; i++){
    maxSum += array[i]
  }

  let tempSum = maxSum;

  for(let i = num; i < array.length; i++){
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum)
  }
return maxSum
}


function maxSubarraySum3(array, num){
    let maxSum = 0;
for(let i = 0; i < num; i++){
    maxSum += array[i]
}
let tempSum = maxSum;

for(let i  = num; i < array.length; i++){
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum)
}
return maxSum
}



console.log(maxSubarraySum3([100,200,300,400], 2))//700
console.log(maxSubarraySum3([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) //39
console.log(maxSubarraySum3([-3, 4, 0, -2, 6, -1], 2)) //5
console.log(maxSubarraySum3([2, 3], 3)) //null

// ----------------------------------------------------------

// 1) Insert characters from the beginning of the string until we have ‘K’ distinct characters in the HashMap. These characters will constitute our sliding window. We are asked to find the longest such window having no more than ‘K’ distinct characters. We will remember the length of this window as the longest window so far.

// 2) Keep adding one character in the sliding window.

// 3) In each step, try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than ‘K’. We will shrink the window until we have no more than ‘K’ distinct characters in the HashMap. This is needed as we intend to find the longest window.

// 4) While shrinking, decrement the frequency of the character going out of the window and remove it from the HashMap if its frequency becomes zero.

// 5) At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.

// Longest substring with k characters

// Given a string, find the length of the longest substring T that contains at most k distinct characters

// Example 1:
 
// Input: String=”araaci”, K=2

// Output: 4

// Explanation: The longest substring with no more than ‘2’ distinct characters is “araa”.

// Example 2:
 
// Input: String=”araaci”, K=1

// Output: 2

// Explanation: The longest substring with no more than ‘1’ distinct characters is “aa”.
 
// Example 3:
 
// Input: String=”cbbebi”, K=3

// Output: 5

// Explanation: The longest substrings with no more than ‘3’ distinct characters are “cbbeb” & “bbebi”.



// Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters. Let’s take a look at some examples:

// Examples
// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Solution 2
// function longestSubstringWithoutRepeating2(s){
// //Keep tracks of indexes of string characters
// const map = {};
// //left index of sliding window
// let leftIndex = 0;
// return s.split('').reduce((acc, current, index) => {
//     //If character already exists then shift sliding window to current +1
//     leftIndex = (map[current] >= leftIndex) ? map[current] + 1 : leftIndex;
//     // Add current index value to map
//     map[current] = index;
//     // update the max value
//     return Math.max(acc, index - leftIndex + 1);
// }, 0);
// };

function lengthOfLongestSubstring (str) {
    const map = new Map();
    let max = 0;
    let left = 0;
    for (let i = 0; i < str.length; i++) {
      if (map.get(str[i]) >= left) left = map.get(str[i]) + 1;
      else max = Math.max(max, i - left + 1);
      map.set(str[i], i);
    }
    return max;
  }

  var lengthOfLongestSubstring2 = function(s) {
    let set = new Set()
    let a_pointer = 0
    let b_pointer = 0
    let max = 0
    
    while(b_pointer < s.length){
        if(!set.has(s.charAt(b_pointer))){
            console.log(s.charAt(b_pointer))
            set.add(s.charAt(b_pointer))
            b_pointer++
            max = Math.max(set.size, max)
        }else{
            set.delete(s.charAt(a_pointer))
            a_pointer++
        }  
    }
    return max
  }


console.log(lengthOfLongestSubstring2('abcabcbabcd'))//3
console.log(lengthOfLongestSubstring2('bbbbb')) //1
console.log(lengthOfLongestSubstring2('pwwkew'))//3

// ----------------------------------------------

// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note: If there is no such window in S that covers all characters in T, return the empty string “”. If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
function minimumWindowSubstring(s, t){
let hMap = {};

    /** Create a map which keeps count of all unique characters in t **/
    for(let i = 0; i < tlen; i++){
        hMap[t.charAt(i)] = (hMap[t.charAt(i)] || 0) +1;
    }
    /** initialize sliding window */
    let counter = Object.keys(hMap).length;
    let left = 0; let right = 0; let head = 0;
    let min = Number.POSITIVE_INFINITY;

    while(right < slen){
        let c= s.charAt(right);
        // if current character is in hashMap, decrement count
        if(hMap.hasOwnProperty(c)){
            hMap[c] = hMap[c] - 1;
            if(hMap[c] === 0){
                counter--;
            }
        }

        right++;
        /** So we are basically assuring that every unique character in substring
            exists in string1 as many times as it exists in substring by maintaining a counter. 
            if counter = 0, string1 has all chars of substring
        **/
        while(counter === 0){
            let temp = s.charAt(left);
            if(hMap.hasOwnProperty(temp)){
                hMap[temp] = hMap[temp]+1;
                if(hMap[temp] > 0){
                    counter++;
                }
            }
            /**
                Whenever counter = 0 we have a valid candidate for our ans, 
                but we update ans only if it is shorter than previously recorded minimum length ans.
            **/
            if(right-left < min){
                    min = right - left;
                    head = left;
            }
            left++;
        }


    }

    if(min == Number.POSITIVE_INFINITY) return "";
    return s.substring(head, head+min);

};

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC'))

// _________________________________________________________

// Find All Anagrams in a String
// Given a string s and a non-empty string p, find all the start indices of p’s anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter. Here is the leetcode link to the problem leetcode

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
// Solution Exactly the same as above with the added condition that the substring should be of length equal to p and that we have to return indexes of all such occurrences.

var findAnagrams = function(s, p) {
    const slen = s.length;
    const plen = p.length;
    if(slen < plen || slen === 0) {return []};

    let hMap = {};let arr = [];
    p.split("").map((el) =>{
        hMap[el] = (hMap[el] || 0) +1;
    });

    let left = 0; let right = 0; let stringSize = plen;
    let counter = Object.keys(hMap).length;

    while(right < slen){
        let c = s[right];

        /** Decrement the counter; if current character is in hashMap**/
        if(hMap.hasOwnProperty(c)){
            hMap[c] = hMap[c] -1;
            if(hMap[c] === 0){ counter--;}
        }

        right++;
        /** if counter == 0, means we found an answer, 
            now try to trim that window by sliding left to right.
        **/
        while(counter === 0){
            if(right-left === stringSize){
                arr.push(left);
            }

            let cStart = s.charAt(left);

            /** Increment the counter **/
            if(hMap.hasOwnProperty(cStart)){
                hMap[cStart] = hMap[cStart] + 1;
                if(hMap[cStart] > 0) { counter++; }
            }

            left++;

        }

    }

    return arr;
};