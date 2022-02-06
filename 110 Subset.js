// 10. Subsets

// A huge number of coding interview problems involve dealing with Permutations and Combinations of a given set of elements. The pattern Subsets describes an efficient Breadth First Search (BFS) approach to handle all these problems.

// The pattern looks like this:

// Given a set of [1, 5, 3]

// Start with an empty set: [[]]
// Add the first number (1) to all the existing subsets to create new subsets: [[], [1]];
// Add the second number (5) to all the existing subsets: [[], [1], [5], [1,5]];
// Add the third number (3) to all the existing subsets: [[], [1], [5], [1,5], [3], [1,3], [5,3], [1,5,3]].

// How to identify the Subsets pattern:

// Problems where you need to find the combinations or permutations of a given set
// Problems featuring Subsets pattern:

// Subsets With Duplicates (easy)
// String Permutations by changing case (medium)

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

function subsets(nums) {
  let res = [];

  function find(curr, remaining, start) {
    res.push(curr);

    for (let i = start; i < remaining.length; i++) {
      find(
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        start
      );

      start++;
    }
  }

  find([], nums, 0);

  return res;
}

var subsets = function(nums) {
  function findSubset(arr,curr){
          res.push([...curr])
      for(let i=0;i<arr.length;i++){
          curr.push(arr[i])
          findSubset(arr.slice(i+1),curr)
          curr.pop()
      }
  }
  let res = []
  findSubset(nums,[])
  return res
};

var subsets = function(nums) {
  let result = [];
  dfs([], 0);
  
  function dfs(current, index){
      result.push(current);
      for(let i = index; i < nums.length; i++) {
          dfs(current.concat(nums[i]), i + 1);
      }
  }
  
  return result;
}
  ___________________________

//   Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

// Example 1:

// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: S = "3z4"
// Output: ["3z4","3Z4"]
// Example 3:

// Input: S = "12345"
// Output: ["12345"]
// Example 4:

// Input: S = "0"
// Output: ["0"];

const isLetter = (s) => {
  const n = s.charCodeAt(0);
  return (n >= 65 && n < 91) || (n >= 97 && n < 123);
};

const isUpper = (s) => {
  const n = s.charCodeAt(0);
  return n >= 65 && n < 91;
};

const replaceAt = (s, c, i) => {
  return (s = s.substring(0, i) + c + s.substring(i + 1));
};

function letterCasePermutation(S) {
  const res = [S];

  for (let i = 0; i < S.length; i++) {
    if (isLetter(S[i])) {
      const newChar = isUpper(S[i]) ? S[i].toLowerCase() : S[i].toUpperCase();

      res.forEach((curr) => {
        res.push(replaceAt(curr, newChar, i));
      });
    }
  }

  return res;
}
// TS
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Letter Case Permutation.
// Memory Usage: 42.3 MB, less than 100.00% of TypeScript online submissions for Letter Case Permutation.

const isLetter = (s) => {
  const n = s.charCodeAt(0);
  return (n >= 65 && n < 91) || (n >= 97 && n < 123);
};

const isUpper = (s) => {
  const n = s.charCodeAt(0);
  return n >= 65 && n < 91;
};

const replaceAt = (s, c, i) => {
  return (s = s.substring(0, i) + c + s.substring(i + 1));
};

function letterCasePermutation(S){
  const res = [S];

  for (let i = 0; i < S.length; i++) {
    if (isLetter(S[i])) {
      const newChar = isUpper(S[i]) ? S[i].toLowerCase() : S[i].toUpperCase();

      res.forEach((curr) => {
        res.push(replaceAt(curr, newChar, i));
      });
    }
  }

  return res;
}

// var letterCasePermutation = function(S) {
//   const results = [];
//   findStrings("", S, 0, results);
//   return results;
// };

// function findStrings(current, S, index, results) {
//   if(index == S.length) {
//       results.push(current);
//       return;
//   }
  
//   const char = S.charAt(index);
//   const charCode = char.charCodeAt(0);
//   if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//       findStrings(current + char.toUpperCase(), S, index + 1, results);
//       findStrings(current + char.toLowerCase(), S, index + 1, results);
//   } else {
//       findStrings(current + char, S, index + 1, results);
//   }
// }