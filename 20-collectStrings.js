//accepts an object and returns an array of all the values in teh object that have a typeof string


const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}



// collectStrings Solution: Pure Recursion Version

function collectStrings2(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}

//accepts an object and returns an array of all the values in teh object that have a typeof string

function collectStrings3(obj){
   let array = [];
   for(let key in obj){
       if(typeof obj[key] === 'string'){
           array.push(obj[key])
       }
       else if(typeof obj[key] === 'object'){
          return array.concat(collectStrings3(obj[key])) 
       }
   }return array
    }



console.log(collectStrings3(obj)) // ["foo", "bar", "baz"])