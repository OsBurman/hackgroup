// 14. Topological sort

// Topological Sort is used to find a linear ordering of elements that have dependencies on each other. For example, if event ‘B’ is dependent on event ‘A’, ‘A’ comes before ‘B’ in topological ordering.

// This pattern defines an easy way to understand the technique for performing topological sorting of a set of elements.

// The pattern works like this:

// Initialization
// a) Store the graph in adjacency lists by using a HashMap
// b) To find all sources, use a HashMap to keep the count of in-degreesBuild the graph and find in-degrees of all vertices
// Build the graph from the input and populate the in-degrees HashMap.
// Find all sources
// a) All vertices with ‘0’ in-degrees will be sources and are stored in a Queue.
// Sort
// a) For each source, do the following things:
// —i) Add it to the sorted list.
// — ii)Get all of its children from the graph.
// — iii)Decrement the in-degree of each child by 1.
// — iv)If a child’s in-degree becomes ‘0’, add it to the sources Queue.
// b) Repeat (a), until the source Queue is empty.
// How to identify the Topological Sort pattern:

// The problem will deal with graphs that have no directed cycles
// If you’re asked to update all objects in a sorted order
// If you have a class of objects that follow a particular order
// Problems featuring the Topological Sort pattern:

// Task scheduling (medium)
// Minimum height of a tree (hard)


// 621. Task Scheduler
// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

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

const leastInterval = (tasks, n) => {
  const tasksMap = Array(26).fill(0);
  for (const task of tasks) {
      tasksMap[task.charCodeAt(0) - 65] += 1;
  }
  
  // sort in reverse order
  tasksMap.sort((a, b) => b - a);
  
  const maxVal = tasksMap[0] - 1;
  let idleSlots = maxVal * n;
  
  for (let i = 1; i < 26; i++) {
      if (tasksMap[i] === 0) {
          break;
      }
      
      idleSlots -= Math.min(tasksMap[i], maxVal);
  }
  
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};

var leastInterval2 = function(tasks, n) {
  
  const charMap = new Map();
  let maxCharCount = 0;
  let maxChar = tasks[0];
  
  for(let char of tasks) {
      charMap.set(char, (charMap.get(char) || 0) + 1);
      if(charMap.get(char) > maxCharCount) {
          maxCharCount = charMap.get(char);
          maxChar = char;
      }
  }
  
  let idleCount = (maxCharCount - 1) * n;
  
  charMap.forEach((count, char) => {
      // 'return' inside forEach() serve as 'continue'
      if(char === maxChar) return;
      if(count === maxCharCount) idleCount -= (count - 1);
      else idleCount -= count;
  })
  
  if(idleCount <= 0) return tasks.length;
  return tasks.length + idleCount;
};


 function lowestInterval(array, num){

 }


 console.log(lowestInterval(["A","A","A","B","B","B"], 2)); //8
 console.log(lowestInterval(["A","A","A","B","B","B"], 0))//6
 console.log(lowestInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2))//16

// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

//  310. Minimum Height Trees
// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]
// Example 3:

// Input: n = 1, edges = []
// Output: [0]
// Example 4:

// Input: n = 2, edges = [[0,1]]
// Output: [0,1]
 

// Constraints:

// 1 <= n <= 2 * 104
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

var findMinHeightTrees = function(n, edges) {
  if (n === 1) {
      return [0]
  }
  
  const indegrees = new Array(n).fill(0)
  const graph = new Map()
  
  for (let i = 0; i < n; i++) {
      graph.set(i, [])
  }
  
  for (const [e1, e2] of edges) {
      graph.get(e1).push(e2)
      graph.get(e2).push(e1)
      
      indegrees[e1] += 1
      indegrees[e2] += 1
  }
  
  const queue = []
  
  for (let i = 0; i < n; i++) {
      if (indegrees[i] === 1) {
          queue.push(i)
      }
  }

  while (n > 2) {
      let size = queue.length
      n -= size
                     
      while (size > 0) {
          const node = queue.shift()
          size -= 1
          
          for (const neighbour of graph.get(node)) {
              indegrees[neighbour] -= 1
              
              if (indegrees[neighbour] === 1) {
                  queue.push(neighbour)
              }
          }
      }
  }
  
  return queue
};


var findMinHeightTrees = function(n, edges) {
  if (n <= 0) {
      return [];
  }
  
  if (n == 1) {
      return [0];
  }
  
  const graph = Array.from({length: n}, () => Array());
  const inDegree = Array(n).fill(0);
  
  for (const edge of edges) {
      const vertex1 = edge[0];
      const vertex2 = edge[1];
      graph[vertex1].push(vertex2);
      graph[vertex2].push(vertex1);
      inDegree[vertex1]++;
      inDegree[vertex2]++;
  }
  
  const sources = [];
  inDegree.forEach((inDeg, vertex) => {
      if (inDeg == 1) {
          sources.push(vertex);
      }
  });
  
  let totalVertices = n;
  while (totalVertices > 2) {
      const len = sources.length;
      totalVertices -= len;
      for (let i = 0; i < len; i++) {
          const source = sources.shift();
          const children = graph[source];
          for (const child of children) {
              if (--inDegree[child] == 1) {
                  sources.push(child);
              }
          }
      }
  }
  
  return sources;
};