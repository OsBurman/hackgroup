//takes in an object and finds all the values which are numers and converst them to string


let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}


//takes in an object and finds all the values which are numers and converst them to string


function stringifyNumbers2(obj){
let newObj = {};
for(let key in obj){
  if(typeof obj[key] === 'number'){
    newObj[key] = obj[key].toString();
  }
  else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
   newObj[key] = stringifyNumbers2(obj[key])
  }
  else {
    newObj[key] = obj[key]
  }
}
return newObj
}

console.log(stringifyNumbers2(obj))

