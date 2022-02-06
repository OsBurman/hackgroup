// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4

var islandPerimeter = function(grid) {
  let perimeter = 0;
  
// Condition: check the adjecent cells top/down/left/right if they contain 0, if so that means there is a perimeter between the two cells.
  for (let r = 0; r < grid.length; r++) { 
  for (let c = 0; c < grid[r].length; c++) {
          if (grid[r][c]) { 
              if (!grid[r][c + 1]) perimeter++; // Check if the next cell in the row (right)
              if (!grid[r][c - 1]) perimeter++; // Check if the previous cell in the row (left) 
              if (!grid[r - 1] || !grid[r - 1][c]) perimeter++;  // Check if the cell in the previous row (top) but first we check if the row doesn't exist 
              if (!grid[r + 1] || !grid[r + 1][c]) perimeter++; // Check if the cell in the next row (down) but first we check if the row doesn't exist
          }
      }
  }
  
  return perimeter; 
};

var islandPerimeter = function(grid) {
    
  if(grid == null || grid.length == 0 || grid[0].length == 0) return 0;
  
  
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
          
          if(grid[i][j] == 1) return dfs(i,j,grid); 

      }
  }
  
  return 0;
};

let dfs = function(i,j,grid){
  
  if(i< 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
  if(grid[i][j] == 0) return 1;
  
  if(grid[i][j] == -1) return 0;
  
  let count =  0;
  
  grid[i][j] = -1;
  
  count += dfs(i-1,j,grid);
  count += dfs(i,j-1,grid);
  count += dfs(i,j+1,grid);
  count += dfs(i+1,j,grid);
  
  return count;
}

var islandPerimeter = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  var perimeter = 0;
  
  for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
          if (!grid[row][col]) continue;
          
          perimeter += 4;
          
          // abstract the number of adjacent island
          if (row > 0 && grid[row - 1][col]) perimeter--;
          if (col > 0 && grid[row][col - 1]) perimeter--;
          if (row < rows - 1 && grid[row + 1][col]) perimeter--;
          if (col < cols - 1 && grid[row][col + 1]) perimeter--;
      }
  }
  
  return perimeter;
};