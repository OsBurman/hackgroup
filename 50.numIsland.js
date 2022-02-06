/*
Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.
EXAMPLE 1:
Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1
Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3
Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.
*/

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("node:constants");

function numIslands(grid) {
  //set height
  const height = grid.length;
  //set width
  const width = grid[0].length;
  //total islands
  let total = 0;
  //inner recursive function to check individual indices
  function checkIndex(y, x) {
    //set index to 0
    grid[y][x] = 0;
    //check above
    //if the index above the current one exists and equals 1, run checkIndex on the index above
    if (y > 0 && grid[y-1][x]) {
      checkIndex(y-1, x);
    }
    //check below
    //if index below the current index exists and equals 1, run checkIndex on the index below
    if (y < height-1 && grid[y+1][x]) {
      checkIndex(y+1, x);
    }
    //check to the left
    //if index to the left exists and equals 1, run checkIndex on the index to the left
    if (x > 0 && grid[y][x-1]) {
      checkIndex(y, x-1);
    }
    //look to the right
    //if index to the right exists and equals 1, run checkIndex on the index to the right
    if (x < width-1 && grid[y][x+1]) {
      checkIndex(y, x+1);
    }
  }
  //iterate through the grid (vertically and horizontally) and run checkIndex on each index
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x]) {
        total++;
        checkIndex(y, x);
        console.log(grid);
      }
    }
  }
  return total;
}


function numIslands2(grid){

let total = 0;

//iteratre though the grid and run checkbox on each index
for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[0].length; x++) {
    if (grid[y][x]) {
      total++;
      checkIndex(y, x);
    }
  }
}

function checkIndex(y, x) {
  //set index to 0
  grid[y][x] = 0;
  //check above
  //if the index above the current one exists and equals 1, run checkIndex on the index above
  if (y > 0 && grid[y-1][x]) {
    checkIndex(y-1, x);
  }
  //check below
  //if index below the current index exists and equals 1, run checkIndex on the index below
  if (y < grid.length-1 && grid[y+1][x]) {
    checkIndex(y+1, x);
  }
  //check to the left
  //if index to the left exists and equals 1, run checkIndex on the index to the left
  if (x > 0 && grid[y][x-1]) {
    checkIndex(y, x-1);
  }
  //look to the right
  //if index to the right exists and equals 1, run checkIndex on the index to the right
  if (x < grid[0].length-1 && grid[y][x+1]) {
    checkIndex(y, x+1);
  }
}



return total;
}



const gridOne = [
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
const gridTwo = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
];
console.log(numIslands2(gridOne)); //1
console.log(numIslands2(gridTwo)); //3