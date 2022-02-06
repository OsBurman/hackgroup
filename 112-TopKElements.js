// Any problem that asks us to find the top/smallest/frequent ‘K’ elements among a given set falls under this pattern.

// The best data structure to keep track of ‘K’ elements is Heap. This pattern will make use of the Heap to solve multiple problems dealing with ‘K’ elements at a time from a set of given elements. The pattern looks like this:

// Insert ‘K’ elements into the min-heap or max-heap based on the problem.
// Iterate through the remaining numbers and if you find one that is larger than what you have in the heap, then remove that number and insert the larger one.
// There is no need for a sorting algorithm because the heap will keep track of the elements for you.

// How to identify the Top ‘K’ Elements pattern:

// If you’re asked to find the top/smallest/frequent ‘K’ elements of a given set
// If you’re asked to sort an array to find an exact element
// Problems featuring Top ‘K’ Elements pattern:

// Top ‘K’ Numbers (easy)
// Top ‘K’ Frequent Numbers (medium)


// ____
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



function topKFrequent(nums, amount){
  let cache = {};
  nums.forEach(num => !cache[num] ? cache[num] = 1 : cache[num]++);
  let keys = Object.keys(cache);
  keys.sort((a, b) => cache[b] - cache[a] );
  return keys.slice(0, amount)
  console.log(keys)
}

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1,2,2,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,6,6,6,6], 4))