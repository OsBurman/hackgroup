// findLongestSubstring= accepts a string and returns the length of the longest substring with all distinct characters


function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
// findLongestSubstring= accepts a string and returns the length of the longest substring with all distinct characters
// function findLongestSubstring2(string){
//  let longest = 0;
//  let seen = {};
//  let start = 0;

//  for(let i = 0; i < string.length; i++){
//    let char = string[i];
//    if(seen[char]){
//      start = Math.max(start, seen[char])
//    }
//    longest = Math.max(longest, i - start + 1);
//    seen[char] = i + 1;
//  }
// return longest
// }



function findLongestSubstring2(string){

  let longest = 0;
  let seen = {};
  let start = 0;

  for(let i =0; i < string.length; i++){
    if(seen[string[i]]){
      start = Math.max(start, seen[string[i]])
      console.log(start)
    }
    longest = Math.max(longest, i - start + 1);
    console.log(seen)
    seen[string[i]] = i + 1;
  }
  return longest

}




//  console.log(findLongestSubstring2('')) //0
//  console.log(findLongestSubstring2('rithmschool')) //7
 console.log(findLongestSubstring2('thisisawesome'))//6
//  console.log(findLongestSubstring2('thecatinthehat'))//7
//  console.log(findLongestSubstring2('bbbbbb'))//1
//  console.log(findLongestSubstring2('longestsubstring'))//8
//  console.log(findLongestSubstring2('thisishowwedoit')) //6