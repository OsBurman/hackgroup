// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
// Example 4:

// Input: s = "abc3[cd]xyz"
// Output: "abccdcdcdxyz"
var decodeString = function(s) {
  var stack = [];
  var i=0;
  var j=0;
  for(; i<s.length; i++) {
      var buf = [];
      var seq;
      var freq = 0;
      var c = s.charAt(i);
      if (c===']') {
          for(j = stack.length-1; j>=0; j--) {
              var p = stack.pop();
              if (p === '[') {
                  seq = buf.join('');
                  buf = [];
                  for(var k=j-1; k>=0 && stack[k]>='0' && stack[k]<='9'; k--) {
                      buf.unshift(stack.pop());
                  }
                  freq=parseInt(buf.join(''));
                  stack.push(Array(freq+1).join(seq));
                  buf = [];
                  break;
              }
              else {
                  buf.unshift(p);
              }
          }
      }
      else {
          stack.push(c);
      }
  }
  return stack.join('');
};

var decodeString2 = function(s) {
  let stk=[];
  for(let i=0;i<s.length;i++){
      if(s[i]===']'){
          let str="";
          while(stk[stk.length-1]!=='['){
              str=stk.pop()+str;
          }
          stk.pop();//[            
          let num="";
          while(stk.length>0&&stk[stk.length-1]>='0'&&stk[stk.length-1]<='9'){
              num=stk.pop()+num;
          }
           num*=1;//string to number   
          let temp=str;
          for(let j=1;j<num;j++)
              str+=temp;
          stk.push(str)
      }
      else
          stk.push(s[i]);
  }
  let res="";
  while(stk.length>0){
      res=stk.pop()+res;
  }
  return res;
};


var decodeString = function(input, low = 0, high = input.length - 1) {
  let repeat = 1;
  let open = 0;
  let bracketStart;
  let decoded = '';
  
  while (low <= high) {
      if (input[low] === '[') {
          if (open === 0) {
              bracketStart = low;
          }
          open += 1;
          low += 1;
      } else if (input[low] === ']') {
          open -= 1;
          if (open === 0) { // Rec.
              const repeatText = decodeString(input, bracketStart + 1, low);
              decoded += repeatText.repeat(repeat);
          }
          low += 1;
      } else if (open > 0) {
          // Ignore character (part of recursive fun)
          low += 1;
      } else if (!isNaN(input[low])) {
          repeat = 0;
          while (!isNaN(input[low])) {
              repeat *= 10;
              repeat += Number(input[low]);
              low += 1;
          }
      } else {
          decoded += input[low];
          low += 1;
      }
  }
  
  return decoded;
};