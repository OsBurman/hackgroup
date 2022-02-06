// K-way Merge helps you solve problems that involve a set of sorted arrays.

// Whenever you’re given ‘K’ sorted arrays, you can use a Heap to efficiently perform a sorted traversal of all the elements of all arrays. You can push the smallest element of each array in a Min Heap to get the overall minimum. After getting the overall minimum, push the next element from the same array to the heap. Then, repeat this process to make a sorted traversal of all elements.

// The pattern looks like this:

// Insert the first element of each array in a Min Heap.
// After this, take out the smallest (top) element from the heap and add it to the merged list.
// After removing the smallest element from the heap, insert the next element of the same list into the heap.
// Repeat steps 2 and 3 to populate the merged list in sorted order.
// How to identify the K-way Merge pattern:

// The problem will feature sorted arrays, lists, or a matrix
// If the problem asks you to merge sorted lists, find the smallest element in a sorted list.
// Problems featuring the K-way Merge pattern:

// Merge K Sorted Lists (medium)
// K Pairs with Largest Sums (Hard)

// 23. Merge k Sorted Lists
 
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// * function ListNode(val, next) {
//   *     this.val = (val===undefined ? 0 : val)
//   *     this.next = (next===undefined ? null : next)
//   * }
//   * 
var mergeKLists = function(lists) {
  const merge = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;
    let node = {};
    const root = node;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }
    if (l1) node.next = l1;
    if (l2) node.next = l2;
    return root.next;
  }
  
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }
  
  return root || null;
};

function mergeLists(a, b) {
  const dummy = new ListNode(0);
  let temp = dummy;
   while (a !== null && b !== null) {
       if (a.val < b.val) {
           temp.next = a;
           a = a.next;
       } else {
           temp.next = b;
           b = b.next;
       }
       temp = temp.next;
   }
  if (a !== null) {
      temp.next = a;
  }
  if (b !== null) {
      temp.next = b;
  }
  return dummy.next;
}

var mergeKLists = function(lists) {
  if (lists.length === 0 ) {
      return null;
  }
  // two two
  // priority queue
  while (lists.length > 1) {
      let a = lists.shift(); // the head will contains the "less" length list
      let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
      const h = mergeLists(a, b);
      lists.push(h);
  }
  return lists[0];
};

_______________________

// 373. Find K Pairs with Smallest Sums
// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u,v) which consists of one element from the first array and one element from the second array.

// Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]] 
// Explanation: The first 3 pairs are returned from the sequence: 
//              [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [1,1],[1,1]
// Explanation: The first 2 pairs are returned from the sequence: 
//              [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
// Example 3:

// Input: nums1 = [1,2], nums2 = [3], k = 3
// Output: [1,3],[2,3]
// Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]

// Commented Version
var kSmallestPairsCommented = function(nums1, nums2, k) {
    
  // Return an empty array if we are given an empty array
  if (nums1.length === 0 || nums2.length === 0) return []
  
  // Initialize variables
  let arr = []; // arr will be an array holding a series of objects
  let max = -Infinity; // max will track the largest sum currently in arr
  
  // Loop through nums1
  for (let i = 0; i < nums1.length; i++) {
      // Loop through nums2
      for (let j = 0; j < nums2.length; j++) {
          
          // Before the conditional statements, create an object based on nums1[i] and nums2[j]
          let obj = {
              sum: nums1[i] + nums2[j], // holds the value of the numbers' sum
              nums: [nums1[i], nums2[j]] // holds array of the corresponding numbers
          }
          
          // If obj.sum is greater than max AND arr already has k values...
          if (obj.sum >= max && arr.length >= k) {
              break; // break.  This is to save time.
          } 
          
          // Else, if obj.sum is less than or equal to max and our array has fewer than k elements...
          else if (obj.sum <= max && arr.length < k) {
              arr.push(obj); // ...push obj into arr.
          } 
          
          // Else, if obj.sum is greater than max and our array has fewer than k elements... 
          else if (obj.sum > max && arr.length < k) {
              max = obj.sum; // ...set the new max to obj.sum... 
              arr.push(obj); // ...and push obj into arr.
          } 
          
          // Else, if obj.sum is less than max AND arr has k or more elements...
          else if (obj.sum < max && arr.length >= k) {
              // We need to: 
                  // (1) remove one element where sum equals max
                  // (2) replace that element with obj
                  // (3) Set max to the new highest value sum in our array.
              
              let newMax = -Infinity;  // Holds the value to be set to max.
              let replaced = false;   // Tracks if we have completed steps (1) and (2).
              
              for (let n = 0; n < arr.length; n++) {
                  // This if statement takes care of steps (1) and (2)
                  if (!replaced && arr[n].sum === max) {
                      arr[n] = obj;
                      replaced = true;
                  }
                  // This if statement takes care of step (3)
                  if (arr[n].sum > newMax) newMax = arr[n].sum
              }
              // After we have iterated through all elements in arr, sets the highest value sum as our new max.
              max = newMax;
          } 
      }
  }
  
  // Converts arr into the form we need to return it in.
  // ... Since arr is currently an array of objects, this changes arr to hold just the needed pairs.
  return arr.map(obj => obj.nums);
  
};

var kSmallestPairs = function(nums1, nums2, k) {
  let len1=nums1.length, len2 =nums2.length;
  let arr= new Array(len1).fill(0), resList=[];
  while(k-- >0){
      let min=+Infinity;
      let index=-1;
      for(let i=0; i<len1; i++){
          if(arr[i]>= len2){
              continue;
          }
          if(nums1[i] + nums2[arr[i]] < min){
              min=nums1[i] + nums2[arr[i]];
              index=i;
          }
      }
      if(index== -1){
          break;
      }
      resList.push([nums1[index], nums2[arr[index]]]);
      arr[index]++;
  }
  return resList
};