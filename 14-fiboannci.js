//take a string and reverse it recurseively

function reverse(string){
if(string.length === 0)return string;
return string[string.length-1].concat(reverse(string.slice(0, string.length-1)))
}


function reverse2(string){
if(string.length === 0)return string;
return string[string.length -1].concat(reverse(string.slice(0, string.length - 1)))
}


console.log(reverse('awesome'))
console.log(reverse('rithmschool'))