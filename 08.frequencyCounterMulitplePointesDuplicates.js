// accepts a variable number of aguments and checks whether there are duplicates amont the patterns passed in= use the frequency counter pattern or mulitple pointer pattern


//frequency Counter
function areThereDuplicates(...args) {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// function areThereDuplicates2(...args){
//   args.sort();
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//       return true
//     }
//     start++;
//     next++;
//   }
// return false
// }


function areThereDuplicates2(...args){
  args = args.sort();
 let pointer1 = 0;
 let pointer2 = 1;
 while(pointer2 < args.length){
   if(args[pointer1] === args[pointer2])return true;
    pointer1++;
    pointer2++;
 }
 return false
}



// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates2(1,2,3))
console.log(areThereDuplicates2(1,2,2))
console.log(areThereDuplicates2('a','b','c', 'a'))
console.log(areThereDuplicates2('a', 'b', 'c'))