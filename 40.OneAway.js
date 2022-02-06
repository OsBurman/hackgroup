// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// Example
// pale, ple --> true
// pales, pale --> true
// pale, bale --> true
// pale, bake --> false

const oneAway = (string1, string2) => {
  if (Math.abs(string1.length - string2.length) > 1) return false;
  let count = 0;
  let index1 = 0;
  let index2 = 0;
  while (index1 < string1.length && index2 < string2.length) {
    if (string1[index1] !== string2[index2]) {
      count++;
      if (string1[index1 + 1] === string2[index2]) index1++;
      else if (string1[index1] === string2[index2 + 1]) index2++;
    }
    index1++;
    index2++;
  }
if(count >= 2) return false;
else return true;
};

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))
