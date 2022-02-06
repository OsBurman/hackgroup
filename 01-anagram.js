//see if strings are in the same order


function validAnagram(string1, string2){
  if(string1.length !== string2.length){
    return false
  }

 let cache = {};

 for(let i = 0; i < string1.length; i++){
   if(!cache[string1[i]]){
     cache[string1[i]] = 1
   }
   else{
   cache[string1[i]]++}
 }
 for(let j = 0; j < string2.length; j++){
   if(!cache[string2[j]]){
     return false
   }
   if(cache[string2[j]]){
     cache[string2[j]]--
   }}
 
return true}


function validAnagram2(string1, string2){
  if(string1.length !== string2.length)return false;
let cache = {};

for(let i = 0; i < string1.length; i++){
  if(!cache[string1[i]]){
    cache[string1[i]] = 1
  }
  cache[string1[i]]++
}
for(let j = 0; j < string2.length; j++){
  if(!cache[string2[j]])return false
 else {
  cache[string2[j]]--
}}
return true
}
function validAnagram3(string1, string2){
 if(string1.lenght === string2.length){
   return false
 }
}

console.log(validAnagram3('anagram', 'nagaram'))
console.log(validAnagram3('pizza', 'pasta'))