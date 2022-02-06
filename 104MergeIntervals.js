// The Merge Intervals pattern is an efficient technique to deal with overlapping intervals. In a lot of problems involving intervals, you either need to find overlapping intervals or merge intervals if they overlap. The pattern works like this:

// Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each other:

// Understanding and recognizing these six cases will help you help you solve a wide range of problems from inserting intervals to optimizing interval merges.

// How do you identify when to use the Merge Intervals pattern?

// If you’re asked to produce a list with only mutually exclusive intervals
// If you hear the term “overlapping intervals”.

// Intervals Intersection (medium)
// Maximum CPU Load (hard)

// _____________________________________

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const merge = intervals => {
  if (intervals.length < 2) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [];
  let previous = intervals[0];
  
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  
  result.push(previous);
  
  return result;
};

var merge = function(intervals) {
  if(intervals.length <= 1) return intervals;
  // sort the array so earlier start times are at the beginning
  intervals = intervals.sort((a,b) => a[0] - b[0])
  let output = [intervals[0]];
  let current = output[0];
  // If the current interval's end time is greater than or equal 
  // to the next interval's start time, then we know there is an
  // overlap and we merge them.
  // If there is no overlap, then we add the next interval to the 
  // list of intervals in our output array and repeat the process
  // until we go through the entire list of intervals.
  for(let i = 1; i< intervals.length;i++) {
      const next = intervals[i]
      if(current[1] >= next[0]) {
          current[1] = Math.max(current[1], next[1]);
      } else {
          current = next;
          output.push(current);
      }
  }
  return output;
};

// ____________________________________

// 986. Interval List Intersections

// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
// Example 2:

// Input: firstList = [[1,3],[5,9]], secondList = []
// Output: []
// Example 3:

// Input: firstList = [], secondList = [[4,8],[10,12]]
// Output: []
// Example 4:

// Input: firstList = [[1,7]], secondList = [[3,10]]
// Output: [[3,7]]

var intervalIntersection = function(A, B) {
  let i = 0, j = 0, res = [];
 while(i < A.length && j < B.length) {
     let maxStart = Math.max(A[i][0], B[j][0]);
     let minEnd = Math.min(A[i][1], B[j][1]);
     if(maxStart <= minEnd) res.push([maxStart, minEnd]);
     if(A[i][1] < B[j][1]) i++
     else j++
 }
     return res
 };

 _______________________________________

//  Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.
// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.
// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

const leastInterval = function(tasks, n) {
  if (n == 0) {
      return tasks.length
  }
  let map = new Array(26).fill(0);
  
  const first = 'A'.charCodeAt(0);
  for (const t of tasks) {
      map[t.charCodeAt(0) - first]++;
  }
  
  let max = -1;
  for (let c of map) {
      if (c > max) {
          max = c;
      }
  }
  
  let maxCount = 0;
  for (let c of map) {
      if (c === max) {
          maxCount++;
      }
  }
  
  const a = (max - 1) * (n + 1)
  const b = (maxCount);
  const c = (tasks.length - a - b);
  
  return c > 0 ? tasks.length : a + b;
};

var leastInterval = function(tasks, n) {
     
  let count = new Array(26).fill(0),
      max = 0,
      maxNum = 0;
  
  for(const c of tasks) {
      const index = c.charCodeAt(0) - 'A'.charCodeAt(0);
      
      if(++count[index] > max){
          max = count[index];
          maxNum = 1;
      } else if(count[index] === max) maxNum++;
  }
  
  return Math.max(tasks.length, (max - 1) * (n+1) + maxNum);
};

var leastInterval = function(tasks, n) {
  if (n == 0) { return tasks.length;} 
  const frequencies = new Array(27).fill(0); 
  tasks.forEach(t => {
     frequencies[t.charCodeAt(0) - 64]++;
  });
  
  const fMax = Math.max(...frequencies);
  const nMax = frequencies.filter(v => v == fMax).length;
  
  return Math.max(tasks.length, (fMax -1)* (n+1) + nMax);
};