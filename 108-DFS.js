// Tree DFS is based on the Depth First Search (DFS) technique to traverse a tree.

// You can use recursion (or a stack for the iterative approach) to keep track of all the previous (parent) nodes while traversing.

// The Tree DFS pattern works by starting at the root of the tree, if the node is not a leaf you need to do three things:

// Decide whether to process the current node now (pre-order), or between processing two children (in-order) or after processing both children (post-order).
// Make two recursive calls for both the children of the current node to process them.
// How to identify the Tree DFS pattern:

// If you’re asked to traverse a tree with in-order, preorder, or postorder DFS
// If the problem requires searching for something where the node is closer to a leaf
// Problems featuring Tree DFS pattern:

// Sum of Path Numbers (medium)
// All Paths for a Sum (medium)

// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Input: root = [1,2,3], targetSum = 5
// Output: false
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var hasPathSum = function(root, sum) {
  return dfs(root, 0, sum);
};

var dfs = function(curr, currentSum, targetSum) {
  if (!curr) {
      return false;
  }

  currentSum += curr.val;
  
  if (curr.left === null && curr.right === null) {
      return currentSum === targetSum;
  }
  
  return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
}

var hasPathSum = function(root, sum) {
  if (!root) return false

  if (root.left === null && root.right === null) return root.val === sum
  
  let leftSideResult = hasPathSum(root.left, sum - root.val)
  let rightSideResult = hasPathSum(root.right, sum - root.val)
  
  return leftSideResult || rightSideResult
}

var hasPathSum = function(root, sum) {
  if (!root) return false
  if (sum - root.val === 0 && !root.left && !root.right) return true
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
________________________________
// 129. Sum Root to Leaf Numbers

// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.
// Example:

// Input: [1,2,3]
//     1
//    / \
//   2   3
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:

// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
//  / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

var sumNumbers = function(root) {
  return sum(0, root);
};

var sum = function (before, root) {
  if (!root) return before;
  var val = before * 10 + root.val;
  if (!root.left) return sum(val, root.right);
  if (!root.right) return sum(val, root.left);
  return sum(val, root.left) + sum(val, root.right);
};

_________________

// 437. Path Sum III

// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11

var pathSum = function(root, sum) {
  if (!root) return 0;
  
  let count = 0;
  
  const dfs = (node, pre) => {
    if (!node) return;
    
    const total = node.val + pre;
    count += total === sum;
    dfs(node.left, total);
    dfs(node.right, total);
  };
  
  dfs(root, 0);
  count += pathSum(root.left, sum);
  count += pathSum(root.right, sum);
  
  return count;
};