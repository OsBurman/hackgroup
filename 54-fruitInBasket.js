// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets. If you cannot, stop. Move to the next tree to the right of the current tree. If there is no tree to the right, stop. Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

// Here is the link to the problem [Leetcode]()

// Examples
// Example 1:

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:

// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
// Example 3:

// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].
// Example 4:

// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.
// Solution
// This is quite an easy solution. For each index we keep count of total number of fruits we can collect as well as two types of fruits we can collect in each basket and return the maximum number of fruits. Let’s take a look at the code

// Code
// /**
// * @param {number[]} tree
// * @return {number}
// */
var totalFruit = function(tree) {
    let max = Number.NEGATIVE_INFINITY;
    const len = tree.length;

    return tree.reduce((acc,el,index) => {
        let total = 0;
        let basket1 = el;
        let basket2 = tree[index+1];
        for(let i = index; i < len; i++){
            /** Set basket2 type to next available type **/
            if(basket1 === basket2){
                basket2 = tree[i];
            }

            if(tree[i] === basket1 || tree[i] === basket2){
                total += 1;
            }else{
                break;
            }
        }

        max = (total > max) ? total : max;

        return max;
    }, max);

};