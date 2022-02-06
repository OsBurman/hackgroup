// 1) Consider the following series:
// A := 1
// B := A*2 + 2
// C := B*2 + 3 and so on...
// Write a program that:

// outputs the number corresponding to a given letter

// given a string of letters like 'GREP', computes the sum of the numbers corresponding to all the letters in the string (i.e., G + R + E + P), as given by the above series and

// given a large number (that would fit into a standard 32-bit integer), finds the shortest string of letters corresponding to it.

// You may use a greedy approach for the last part. Compute the values of the numbers corresponding to letters as and when required and DO NOT pre-compute beforehand and store them in a data structure.


var genCharArray = function(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}

var charMap = {};
var charArray = genCharArray('a', 'z');

charArray.forEach(function(char, index){
  charMap[char] = Number(index + 1);
});


var charSequence = function(char){
  if(typeof char==="string"){
      char = charMap[char];
  }
  if(char==1){
      return 1;
  }else{
      return char + 2 * charSequence(char-1);
  }
}

var input = process.argv[2];

if(input.length===1){
  console.log(charSequence(charMap[input]));
}else if(input.length>1){
  var charTotalSequence = input.split("").reduce(function(acc, curr){ 
      return acc + charSequence(charMap[curr]);
  },0);
  console.log(charTotalSequence);
}

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let obj = {};
for(let i = 1; i <= 26; i++){
  obj[alphabet[i]] = i
};
newObj = {A: 1};
let newAlphabet = alphabet.map(item => item.toUpperCase());
console.log(newAlphabet)
for(let i = 1; i <= 26; i++){
newObj[newAlphabet[i]] = (newObj[newAlphabet[i - 1]] * 2) + i
}

console.log(newObj)