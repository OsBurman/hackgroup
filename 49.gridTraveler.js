// *
// Say that you are a traveler on a 2D CanvasGradient. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m *n?
// Write a function gridTraveler(m,n) that calculates this.
// */
/*
Time complexity: O(2^n+m) || Space complexity: O(n+m)
    -Since we're giving two inputs and we only decrease one input at a given time then overall we're gonna have a n+m overall. Therefore space = O(n+m)
    -For time complexity, since one parent node has two children, we have a 2x2x2 pattern for each level in the tree, that's why time complexity is O(2^(n+m))
*/
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    //decreasing the row + decreasing the column || moving down and moving right
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}
console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 233606220

//////////////////////Memoized Answer\\\\\\\\\\\\\\\\\\\\\\\\\
/*Time Complexity: O(m*n)|| Space Complexity: O(n*m)
    Essentially all the duplicates of the tree have been cached so m and n can only ever be:
    m : {0,1,2,3}
    n : {0,1,2}
    this leads to m * n possible combinations
    */
// const gridTraveler = (m, n, cache = {}) => {
//     // have a key that uniquely represent both inputs
//     const key = m + ',' + n
//     //are the arguments in the memo? if they are, return the cached value 
//     if (key in cache) return cache[key]
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0
//     cache[key] = gridTraveler(m - 1, n, cache) + gridTraveler(m, n - 1, cache)
//     return cache[key]
// }
// console.log(gridTraveler(1, 1)) // 1
// console.log(gridTraveler(2, 3)) // 3
// console.log(gridTraveler(3, 2)) // 3
// console.log(gridTraveler(3, 3)) // 6
// console.log(gridTraveler(18, 18)) // 233606220
