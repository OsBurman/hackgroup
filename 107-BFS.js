// This pattern is based on the Breadth First Search (BFS) technique to traverse a tree and uses a queue to keep track of all the nodes of a level before jumping onto the next level. Any problem involving the traversal of a tree in a level-by-level order can be efficiently solved using this approach.

// The Tree BFS pattern works by pushing the root node to the queue and then continually iterating until the queue is empty. For each iteration, we remove the node at the head of the queue and “visit” that node. After removing each node from the queue, we also insert all of its children into the queue.

// How to identify the Tree BFS pattern:

// If you’re asked to traverse a tree in a level-by-level fashion (or level order traversal)

// Problems featuring Tree BFS pattern:

// Binary Tree Level Order Traversal (easy)
// Zigzag Traversal (medium)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal 
// of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// var levelOrder = function(root) {
//   const result = [];
//   if(!root) {
//       return [];
//   }
//   let queue = [root];
//   while(queue.length > 0) {
//     const levelRes = [];
//     const queueLength = queue.length;
//     for(let i = 0; i < queueLength; i++) {
//       const node = queue.shift();
//       levelRes.push(node.val);
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//     result.push(levelRes);
//   }
//   return result;
// };

// var levelOrder = function(root) {
//   if (!root) return []
//   const arr = [root], result = []
//   while (arr.length) {
//       const size = arr.length, values = []
//       for (let i = 0; i < size; i++) {
//           const node = arr.shift()
//           values.push(node.val)
//           if (node.left) arr.push(node.left) 
//           if (node.right) arr.push(node.right) 
//       }
//       result.push(values)
//   }
//   return result
// };

function levelOrder()


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
_______________________

// 103. Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


var zigzagLevelOrder = function(root) {
  if (!root) return []
  
  const res = []
  const q = [root]
  
  let level = 1
  while (q.length) {
    const levelRes = []
    res.push(levelRes)
    const qLen = q.length
    
    for (let i = 0; i < qLen; i++) {
      const curr = q.shift()
      
      if (level % 2) levelRes.push(curr.val) // add in order
      else levelRes.unshift(curr.val) // add in reverse order
      
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }
    
    level++
  }
  
  return res
};

// This problem is just a return of the BFS order of a tree. However with every odd level of the tree, we want to keep track of the values in reverse order.

// step 1: store each node in the queue with the level that you are current on. ex.. [root, level = 0];

// step 2: make a new array for each level. if the level is odd then add to the front of the array, if the level is even push to the back.

// step 3: add to the queue by checking the left and right values with the next level of the tree.

var zigzagLevelOrder2 = function(root) {
    if (!root) return [];
    
    let output = []; 
    let queue = []; 
    queue.push([root,0]);
    
    while (queue.length > 0) {
        let [current, level] = queue.shift();
		
        output[level] = output[level] || [];
        if (level % 2 === 1) {
            output[level].unshift(current.val);
        } else {
            output[level].push(current.val);    
        }
		
        if (current.left) queue.push([current.left, level + 1]); 
        if (current.right) queue.push([current.right, level + 1]);
    }
    
    return output;    
};
