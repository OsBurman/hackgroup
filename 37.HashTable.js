function HashTable(){
  this.size = 17;
  this.keyMap = new Array(this.size);
}

function hash(key, length){
  let total = 0;
  let weird_PRIME = 31;
  for(let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let vaule = charCodeAt(0) -96;
    total = (total * weird_PRIME + value) % this.keyMap.length;
  }
  return total;
}

HashTable.prototype.set = function(key, value){
  let hashKey = hash(key, this.size);
  if(!this.keyMap[hashKey]){
    this.keyMap[hashKey] = {};
    this.keyMap[hashKey][key] = value;
  }
  else {
    this.keyMap[hashKey][key] = value;
  }
}

let hoohaa = new HashTable();
console.log(hoohaa)
hoohaa.set('party', 'dance')
hoohaa.set()