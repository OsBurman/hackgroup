/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

function balancedParens(string) {
  //store matching pairs in an obj
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  //initialize a stack to keep track of all parens, brackets, and braces
  const stack = [];
  //iterate over the string
  for (let i = 0; i < string.length; i++) {
   let char = string[i];
   //if the current character is in matches, push to stack
   if (Object.keys(pairs).includes(char)) {
     stack.push(char);
   } 
     //else, if the current character is a closing of a pair, pop off the stack and check if it matches with the correct pair
     else if (char === ')' || char === ']' || char === '}') {
     //if the pair is incorrect, return false
     if (pairs[stack.pop()] !== char) {
       return false;
     }
   }
   //return true if stack is empty and all pairs have been popped off
 }
 return !stack.length;
}

// globally define so we're not re-defining in each recursive call
const brackets = {
  '{': '}',
  '(': ')',
  '[': ']',
};
// create a new set using the values in brackets
// keeps single 'source of truth' for what a closing
// bracket is, but also enables us to retrieve a
// closing bracket without another loop
const closingBrackets = new Set(Object.values(brackets));
/**
 * @name balancedParensRecursive
 * @param str - entire string to check
 * @param charIdx - index of current character we're checking
 *                  enables us to keep an O(n) time complexity
 * @param stack - running stack of brackets to balance
 */
const balancedParensRecursive = (str, charIdx = 0, stack = []) => {
  // base case: current index is greater than the
  //    number of characters in the entire string
  // return: true if stack is empty, false if not
  if (charIdx >= str.length) return !stack.length;
  const char = str[charIdx];
  // recursive cases:
  // case 1: current first char in str is opening bracket
  // return: recursive call with inputs:
  // str
  // charIdx - current charIdx + 1
  // stack - current stack + push on closing bracket for char
  if (brackets[char]) {
    stack.push(brackets[char]);
    return balancedParensRecursive(str, charIdx + 1, stack);
  }
  // case 2: current first char in str is closing bracket
  // return: false if top of stack doesn't match this bracket
  // return: recursive call with inputs:
  // str
  // charIdx - current charIdx + 1
  // stack - current stack w/ top of stack popped off
  if (closingBrackets.has(char)) {
    if (stack.pop() !== char) return false;
    return balancedParensRecursive(str, charIdx + 1, stack);
  }
  // case 3: current first char in str is not a bracket at all
  // return: recursive call with inputs:
  // str
  // charIdx - current charIdx + 1
  // stack - current stack
  return balancedParensRecursive(str, charIdx + 1, stack);
};