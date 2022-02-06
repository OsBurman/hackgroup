// capitlaize the first letter of an array of strings 

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let result = capitalizeWords(array.slice(0, -1));
  result.push(array.slice(array.length-1)[0].toUpperCase());
  return result;
}

function capitalizeFirst(array) {
if (array.length === 1) {
  return [array[0][0].toUpperCase() + array[0].substr(1)];
}
const result = capitalizeFirst(array.slice(0, -1));
const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
result.push(string);
return result;
}

function capitalizeFirst2(array){
  if(array.length === 1){
    return [array[0][0].toUpperCase() + array[0].slice(1)]
  }
  //slice -1 gets rid of the last element in the array
  let result = capitalizeFirst(array.slice(0, -1));
 let string = array.slice(-1)[0][0].toUpperCase() + array.slice(-1)[0].substr(1);
 result.push(string);
 return result;

}

function capitalizeFirst3(array){
  if(array.length === 1) return array[0][0].toUpperCase() + array[0].substr(1);
  if(array.length > 1)return [array[0][0].toUpperCase() + array[0].substr(1)].concat(capitalizeFirst3(array.slice(1)))
}





function capitalizeFirst4(array){
  if(array.length === 0)return [array[0].toUpperCase() + array.slice(1)];
  if(array.length > 1)return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst4(array.slice(1)))
}

console.log(capitalizeFirst4(['car','taco','banana', 'heart'])); // ['Car','Taco','Banana']