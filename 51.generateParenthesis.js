// Given n pairs of parentheses, write a function to generate all combinations of
// well-formed parentheses.
// For example, given n = 2, a solution set is:
// [
//   "(())",
//   "()()"
// ]
// Given n = 3, a solution set is:
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
// Given n = 0, a solution set is:
// [
//   ""
// ]
// */
//input: # of parens
//output: array of strings
const generateParentheses = n => {
  //declare a result variable set to an empty array; this is what we'll ultimately return
  const result = [];
  //declare an inner recursuve function that will add parenthesis to a current string in different combinations
  //the open and close parameters keep track of how many open and closed parentheses have been used in the string so far
  const addParenthesis = (current, open, close) => {
    //if the current string is the maximum length that can be attained based on n (i.e. n*2), push the current string to the result array and return out of the inner function
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    //if fewer than n open parentheses have been added to the current string, add an open parenthesis to current and call addParenthesis on the new current, open+1 (because we've just added another open parenthesis), adn the current number of closed parentheses
    if (open < n) {
      addParenthesis(current + '(', open+1, close);
    };
    //if close is less than open (important because this ensures that we won't add a closed parenthesis before an open one has been added), call addParenthesis on current with a closed parenthesis added, the current number of open parentheses, and the updated number of closed parentheses 
    if (close < open) {
      addParenthesis(current + ')', open, close+1);
    };
  }
  //the initial call of addParenthesis with current set to an empty string and the current number of open and closed parentheses each set to 0.
  addParenthesis('', 0, 0);
  //return result
  return result;
};

const generateParentheses2 = (num) => {
  const results = [];

  const addParens = (current, open, close) => {
    if(current.length === 2 * num){
      results.push(current);
      return;
    }
    if(open < num){
      addParens(current + '(', open + 1, close)
    }
    if(open > close){
      addParens(current + ')', open, close + 1)
    }

  }


  addParens('', 0, 0)
  return results;
}



console.log(generateParentheses2(3));
console.log(generateParentheses2(2));
console.log(generateParentheses2(0));