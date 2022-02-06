// 1) Given a multidimensional array with depth of n, flatten it. Once flattened make it available as a method on array instance

/**
 * [1,2,[3,4]] -> [1,2,3,4]
 */

function flatten(arr){
  if(!arr)return [];
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      return newArray.concat(flatten(arr[i]))
    }
    else {
      newArray.push(arr[i])
    }
  }return newArray
}

function flatten(arr) {
  return arr.reduce(function(acc, next){
    let isArray =  Array.isArray(next)
    return acc.concat(isArray ? flatten(next) : next)
  }, [])
}

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function() {
    return flatten(this)
  }
}


let array = [1, 2, [3, 4]];
console.log(flatten(array))