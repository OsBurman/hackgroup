// //check is the short string is inside the longer string

// function naiveStringSearch(longString, shortString){
//   let count = 0;
//   //loop over the longer string
// for(let i = 0; i < longString.length; i++ ){
//   //loop over the shorter string
//   for(let j = 0; j < shortString.length; j++){
//   //if characters dont match, break out of the inner loop
//   if(shortString[j] !== longString[i + j]) break;
//   //if characters do match, keep going and increment the count of matches
//   if(j === shortString.length - 1)return true;
//   //if you complete the inner loop and find a match, increment the count of matches
// }}
//   //return the count
// return false
// }


// function naiveStringSearch2(longString, shortString){
//   let count = 0;
//   for(let i = 0; i < longString.length; i++){
//     for(let j = 0; j < shortString.length; j++){
//       if(shortString[j] !== longString[i + j]){
//         break;
//       }
//       if(shortString[j] === longString[i + j]){
//         count++;
//         if(count === shortString.length -1 ) return true;
//       }
//     }
//   }return false
// }



// function naiveStringSearch3(longString, shortString){
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let counter = 0;
//   let num = shortString.length;

//   while(pointer2 < longString.length){
//     if(counter === num)return true;
//     if(shortString[pointer1] === longString[pointer2]){
//       pointer1++;
//       pointer2++
//       counter++;
//     }
//     else{
//       counter = 0;
//       pointer1 = 0;
//       pointer2++;
//     }
//   }
//   return false;
// }

//check is the short string is inside the longer string


function naiveStringSearch3(longString, shortString){
  let shortStringLength = 0;
  let start = 0;
  while(longString[start]){
    if(shortStringLength === shortString.length){
      return true
    }
    else if(shortString[shortStringLength] === longString[start]){
      start++;
      shortStringLength++
    }
    else if(shortString[shortStringLength] !== longString[start]){
      start++;
      shortStringLength = 0
    }
  }
  return false
    }


console.log(naiveStringSearch3('lorie loled', 'lol')) //true 
console.log(naiveStringSearch3('don', 'dolt'))//false
console.log(naiveStringSearch3('howhhwy', 'hw'))