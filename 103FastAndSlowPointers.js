// The Fast and Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm that uses two pointers which move through the array (or sequence/linked list) at different speeds. This approach is quite useful when dealing with cyclic linked lists or arrays.

// By moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

// How do you identify when to use the Fast and Slow pattern?

// The problem will deal with a loop in a linked list or array
// When you need to know the position of a certain element or the overall length of the linked list.
// When should I use it over the Two Pointer method mentioned above?

// There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list where you can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying to determine if a linked list is a palindrome.

______________________________

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
       if (fast === slow) {
          return true;
      }
  }
  return false;
};

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-
  
//   Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
___________________________________

// Given the head of a singly linked list, return true if it is a palindrome.

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

var isPalindrome = function(head) {
  const stack = [];
  let s = head,
      f = head;

  while (f && f.next) {
      stack.push(s.val);
      s = s.next;
      f = f.next.next;
  }

  if (f) stack.push(s.val); // odd length

  while (s) {
      if (s.val !== stack.pop()) return false;
      s = s.next;
  }

  return true;
};
var isPalindrome = function(head) {
  let current = '', reverse = ''
  while(head) {
      current += head.val
      reverse = head.val + reverse
      head = head.next
  }
  return current === reverse
};

function isPalindrome(head) {
  let slow = head, fast = head
  let subList = []
  
// Find the middle node of the list using fast & slow pointers
  while(fast?.next) {
      subList.push(slow)
      slow = slow.next
      fast = fast.next.next
  }
  
// When there is an odd number of items we want to ignore the middle val and start 1 node right
// of the middle

//  We start with 1 element, add 2 to fast every time, when completed we dont know if the last
// iteration ended on the last item or null (end of list) since it goes by 2's. If it ended on a 
// valid node we know 1 + 2n is odd, if it ended on null we know 1 + 2n - 1 is even.
  if(fast?.val) slow = slow.next
     
  let palindrome = true
// compare the first half of the list in reverse by popping items of end to second half by continuing
// to iterate the second half of the list using slow (which is at the middle)
  while(palindrome && slow) {
      if(subList.pop().val !== slow.val) palindrome = false
      slow = slow.next
  }
  
  return palindrome
};

________________________________________

// 457. Circular Array Loop

// You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:

// If nums[i] is positive, move nums[i] steps forward, and
// If nums[i] is negative, move nums[i] steps backward.
// Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element.

// A cycle in the array consists of a sequence of indices seq of length k where:

// Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
// Every nums[seq[j]] is either all positive or all negative.
// k > 1
// Return true if there is a cycle in nums, or false otherwise.

// Example 1:

// Input: nums = [2,-1,1,2,2]
// Output: true
// Explanation:
// There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...
// The cycle's length is 3.
// Example 2:

// Input: nums = [-1,2]
// Output: false
// Explanation:
// The sequence from index 1 -> 1 -> 1 -> ... is not a cycle because the sequence's length is 1.
// By definition the sequence's length must be strictly greater than 1 to be a cycle.
// Example 3:

// Input: nums = [-2,1,-1,-2,-2]
// Output: false
// Explanation:
// The sequence from index 1 -> 2 -> 1 -> ... is not a cycle because nums[1] is positive, but nums[2] is negative.
// Every nums[seq[j]] must be either all positive or all negative.

//To reduce this to O(N) we can remember the numbers been evaluated already for cycle, keeping track of all the visited numbers would improve the algorithm to O(N) time complexity. 

var circularArrayLoop = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let isForward = nums[i] >= 0;
      let slow = i,
          fast = i;
      while (true) {
          slow = findNextIndex(nums, isForward, slow);
          fast = findNextIndex(nums, isForward, fast);
          if (fast !== -1) {
              fast = findNextIndex(nums, isForward, fast);
          }
          if (slow === -1 || fast === -1 || slow === fast) {
              break;
          }
      }
      if (slow !== -1 && fast === slow) {
          return true;
      }
  }
  return false;
};

function findNextIndex(nums, isForward, currentIndex) {
  let direction = nums[currentIndex] >= 0;
  if (isForward !== direction) return -1;
  let nextIndex = (currentIndex + nums[currentIndex]) % nums.length;
  
  if (nextIndex < 0) {
      nextIndex += nums.length;
  }
  if (nextIndex === currentIndex) {
      nextIndex = -1;
  }
  return nextIndex;
}

var circularArrayLoop = function(nums) {
  //1.This array maybe has more than one cycle that we don't know,
//so we need to run each element to check cycle. 
  for(let i = 0 ; i < nums.length ; i++){
    //2.this cycle only can choose one direction , 
  //so we need to use 'dir' to check they all positive or negative.
      let ans = [];
      let dir = Math.sign(nums[i]);
      let j = i;
      
  //3.if this element has been checked, change it to zero.
  //if the nums[j]  == 0 , means we find this cycle and get the start point called j.
      while(nums[j] != 0 && Math.sign(nums[j]) == dir){
          let preJ = j;
          
          j += nums[j];
          j %= nums.length;
          j += j < 0 ? nums.length : 0;
          
          ans.push(preJ);
          nums[preJ] = 0;
      }
  //4.check the cycle size more than one or not
      let pos = ans.indexOf(j);
      if(ans.length > 1 && pos != -1 && pos != ans.length - 1)  return true;
  }
  
  return false;
};

//Returns -1 for exit condition
function getNextPosition(arr, index, isForward) {
  //movements in a cycle must all follow a single direction. Cycle must not consist of both forward and backward movements.
  let direction = arr[index] >= 0;
  if(direction !== isForward) return -1;

  let nextIndex = (arr[index] + index)% arr.length;
  
  //handle -ve
  if(nextIndex < 0) nextIndex = nextIndex + arr.length;
  
  //one element loop
  if(nextIndex === index) return -1;
  return nextIndex;
}

var circularArrayLoop = function(nums) {
  let n = nums.length;
  if(n <= 1) return false;
  let i = 0;
  let j = 0;
  for(let i = 0; i< n; i++) {
      let slow, fast;
      slow = fast = i;
      let isForward = nums[i] > 0 ? true : false
      while(true) {
          slow = getNextPosition(nums, slow, isForward)
          if(slow === -1) break;

          fast = getNextPosition(nums, fast, isForward)
          if(fast === -1) break;
          
          fast = getNextPosition(nums, fast, isForward)
          if(fast === -1) break;
          
          if(slow === fast) return true;
      }
  }
  return false;
};
