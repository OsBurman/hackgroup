// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]

var maxAreaOfIsland = function(grid) {
  if (!grid) return 0;
  
  const m = grid.length;
  const n = grid[0].length;
  
  let max = 0;
  for (let i=0;i < m;i++) {
      for (let j=0;j < n;j++) {
          let area = count(grid, i, j);
          max = Math.max(max, area);
      }
  }
  return max;
  
  function count(grid, i, j) {
      if (i < 0 || j < 0 || i >= m | j >=n || grid[i][j] === 0) return 0;
      
      grid[i][j] = 0;
      let ret = 1;
      ret += count(grid, i+1, j) +
                count(grid, i-1, j) +
                count(grid, i, j+1) +
                count(grid, i, j-1);
      
      return ret;
  }
};

// A few tips before reading my solution. After doing a fair share of 2d array grid problems I've found it's really good to separate out the logic of checking bounds and finding neighbors.

// In this question, it's easy to find it to be similar to some other island problems which include diagonals. The only thing we really need to do here is exclude that from our find neighbors function.

// Everything else I feel is straightforward from there. We constantly keep track of the max area and as we dive into the islands (through BFS), count up the area and then compare. As always, make sure you mark visited by setting the tile you're looking at to 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var COL_SIZE = grid.length;
    var ROW_SIZE = grid[0].length;
    var maxArea = 0;
    for (var i=0; i<ROW_SIZE; i++) {
       for (var j=0; j<COL_SIZE; j++) {
         if (grid[j][i] === 1) {
		     // mark visited and pass in the initial area count as 1
             grid[j][i] = 0;
             // BFS on elements horizontally and vertically
             maxArea = Math.max(maxArea, bfsOnNodesAndReturnSize(grid, j, i, 1));
         }
       } 
    }
    return maxArea;
};
         
function checkWithinBounds(grid, y, x) {
  var COL_SIZE = grid.length;
  var ROW_SIZE = grid[0].length;
  return x >= 0 && x < COL_SIZE && y >= 0 && y < ROW_SIZE;    
}

function getAdjacents(grid, y, x) {
  // neighbors include
  // x+1, y
  // x-1, y
  // x, y+1
  // x, y-1
  var neighbors = [];
  if (checkWithinBounds(grid, x + 1, y)) {
    neighbors.push({ "x": x+1, "y": y })
  }
  if (checkWithinBounds(grid, x - 1, y)) {
    neighbors.push({ "x": x-1, "y": y })
  }
  if (checkWithinBounds(grid, x, y + 1)) {
    neighbors.push({ "x": x, "y": y+1 })
  }
  if (checkWithinBounds(grid, x, y-1)) {
    neighbors.push({ "x": x, "y": y-1 })
  } 
  return neighbors;
}

// go through the nodes that are horizontal and vertical
// count and return the size.
function bfsOnNodesAndReturnSize(grid, y, x, area) {
  var queue = [];
  var neighbors = getAdjacents(grid, y, x);
  // worth telling your interviewer that unshfit is an O(N) operation because JavaScript arrays will have to make more
  // space in the array so if this is an issue, might be worth asking if you can assume you have a Queue data struct
  neighbors.forEach(function(neighbor) {
    queue.unshift(neighbor);
  });
    
  while (queue.length > 0) {
    var neighbor = queue.pop();
    if (grid[neighbor.y][neighbor.x] === 1) {
      area++;
      grid[neighbor.y][neighbor.x] = 0;
      var nextNeighbors = getAdjacents(grid, neighbor.y, neighbor.x);
      nextNeighbors.forEach(function(n) {
        queue.unshift(n);
      });
    } 
  } 
  return area;
}