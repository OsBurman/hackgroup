// given two positive integers, find out if two numbers have the same frequency of digits

// O(N)

function sameFrequency33(num1, num2){
  let cache = {};
  let numArray1 = Array.from(String(num1), Number);
  let numArray2 = Array.from(String(num2), Number);

  if(numArray1.length !== numArray2.length)return false;

  numArray1.forEach(el => {
    if(!cache[el]){
      cache[el] = 1
    }
    else{
      cache[el]++
    }
  })
  
 for(let i = 0; i < numArray2.length; i++){
   if(!cache[numArray2[i]]){
return false
   }
   else {
     cache[numArray2[i]]--
   }
 }
  return true
}

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

// given two positive integers, find out if two numbers have the same frequency of digits


function sameFrequency2(num1, num2){
  let strNum1 = Array.from(String(num1), Number);
  let strNum2 = Array.from(String(num2), Number);
  let cache = {};

  if(strNum1.length !== strNum2.length)return false;
console.log(strNum1)
  for(let i = 0; i < strNum1.length; i++){
    if(!cache[strNum1[i]]){
      cache[strNum1[i]] = 1
    } else {
      cache[strNum1[i]]++
    }}

  console.log(cache)

    for(let i = 0; i < strNum2.length; i++){
      if(!cache[strNum2[i]]){
        return false
      }
      else {
        cache[strNum2[i]]--
      }
    }
  
    return true
  }
  

console.log(sameFrequency2(182, 281)) //true
console.log(sameFrequency2(34, 14)) //false
console.log(sameFrequency2(3589578, 5879385 )) //true
console.log(sameFrequency2(22, 222)) //false
