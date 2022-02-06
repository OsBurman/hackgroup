// Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// const { listeners } = require("node:process");

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// We can also do this in one pass:

var fullJustify = function(words, maxWidth) {
  let currentLine = '';
  let lines = [];
//Group words into lines.
  for (const word of words) {
      if (!currentLine.length) currentLine += word;
      else if (word.length + 1 + currentLine.length <= maxWidth) currentLine += ' ' + word
      else {
          lines.push(currentLine);
          currentLine = word
      }
  }

  lines.push(currentLine);
  
  for (let i = 0; i < lines.length; i++) {
  //Handle Last Line
      if (i === lines.length - 1) {
          lines[i] = lines[i] + ' '.repeat(maxWidth - lines[i].length)
      } else {
          currentLine = lines[i];
          const lineLen = lines[i].replace(/[ ]/g, '').length;
    //Below handles if line only has one word. currLine.length - lineLen gives # of spaces on line.
          //If they are ===, then line has no spaces.  
          if (currentLine.length === lineLen) {
              currentLine = currentLine + ' '.repeat(maxWidth - lineLen)
          } else {
              //This block handles regular lines with spaces.  Replace all spaces with biggest
      //necessary space, then remove from right to left until lineWidth === maxWidth.
              //RepeatSpaces is the size of the largest space in the line.
              const repeatSpaces = Math.ceil((maxWidth - lineLen) / (lines[i].length - lineLen));
              currentLine = currentLine.replace(/[ ]/g, ' '.repeat(repeatSpaces));
              while (currentLine.length > maxWidth) {
                  let spacePos = currentLine.lastIndexOf(' '.repeat(repeatSpaces));
                  currentLine = currentLine.substring(0, spacePos) + currentLine.substring(spacePos + 1)
              }
          }
          lines[i] = currentLine
      }
  }
  return lines
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))

 

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Example 2:

// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified becase it contains only one word.
// Example 3:

// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// Split the given text into words
// Firstly select the words which can be inserted in each line including a space between each word. For that, the sum of length of included words with one space between them must be smaller than or equal to L.
// Now count the number of spaces needed to make the length of each line L and distribute the spaces evenly.
// Repeat above steps for next set of words.
// For the last line spaces must be assigned at the end as the last line must be left-justified.