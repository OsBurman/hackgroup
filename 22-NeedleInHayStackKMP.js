// Determine whether a target substring can be found within a string! String matching


//prefix function and string matching function
//prefix finds matching of the pattern with the beginning of the pattern istelf

//does the pattern (substring) exist in the string

//uses suffic and prefix information

// If the pattern is found, this returns the index of the start of the earliest match in 'text'. Otherwise -1 is returned.
function kmpSearch(pattern, text) {
	if (pattern.length == 0)
		return 0;  // Immediate match
	
	// Compute longest suffix-prefix table
	let longestSuffixPrefixTable = [0];  // Base case
	for (let i = 1; i < pattern.length; i++) {
		let j = longestSuffixPrefixTable[i - 1];  // Start by assuming we're extending the previous longestSuffixPrefixTable
		while (j > 0 && pattern[i] != pattern[j])
			j = longestSuffixPrefixTable[j - 1];
		if (pattern[i] == pattern[j])
			j++;
		longestSuffixPrefixTable.push(j);
	}
	
	// Walk through text string
	let j = 0;  // Number of chars matched in pattern
	for (let i = 0; i < text.length; i++) {
		while (j > 0 && text[i] != pattern[j])
			j = longestSuffixPrefixTable[j - 1];  // Fall back in the pattern
		if (text[i] == pattern[j]) {
			j++;  // Next char matched, increment position
			if (j == pattern.length)
				return i - (j - 1);
		}
	}
	return -1;  // Not found
}


// Determine whether a target substring can be found within a string! String matching

function kmpSearch2(shortString, longString){
	let pointer1 = 0
	let pointer2 = 0;
	while(longString[pointer2]){
		if(shortString.length === pointer1){
			return true
		}
		if(longString[pointer2] === shortString[pointer1]){
			pointer2++;
			pointer1++
		}
		else{
			pointer2++;
			pointer1 = 0;
		}
	}
	return false
}

console.log(kmpSearch2('haha', 'i love to haha laugh'))
console.log(kmpSearch2('lfdag', 'hihowareyou'))