// flatten an array of arrays

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

function flatten2(array){
	let newArray = [];
	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			return newArray.concat(flatten2(array[i]))

		}
		else {
			newArray.push(array[i])
		}
	}
return newArray
	}

console.log(flatten2([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten2([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten2([[1],[2],[3]])) // [1,2,3]
console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3