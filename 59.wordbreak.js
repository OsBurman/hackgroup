// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

var wordBreak = function(s, wordDict) {
  const dic = new Set(wordDict)
  const start = 0
  let queue = [start]
  const seen = new Set()
  while(queue.length){
    const next = []
    for(let idx of queue){
      if(seen.has(idx)) continue
      let temp = ''
      if(idx === s.length) return true
      for(let i = idx; i < s.length; i++){
        temp += s[i]
        if(dic.has(temp)){
          next.push(i+1)
        }
      }
      seen.add(idx)
    }
    queue = next
  }
  return false
};