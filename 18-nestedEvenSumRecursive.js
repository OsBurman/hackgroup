
// return the sum of all even numbers in an object which may contain nested Objects



function nestedEvenSum (obj, sum=0) {
  for (let key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// return the sum of all even numbers in an object which may contain nested Objects

function nestedEvenSum2(obj, sum = 0){
  for(let key in obj){
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
      sum += nestedEvenSum2(obj[key])
    }
    else if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
      sum += obj[key]
    }
    }return sum
  }


console.log(nestedEvenSum2(obj1)); // 6
console.log(nestedEvenSum2(obj2)); // 10