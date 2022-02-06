// raidx is a special sorting algorithm that works on lists of numbers
// it never makes comparisons between two elements
// it epxloits that the size of a number is encoded in teh number of digits
// more digits means a bigger number

//Group the numbers in buckets

//returns the digit in NUM at the given PLACE value
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// reutrns the number of digits in num
function digitCount(num){
  if(num === 0)return 1;
  //10 to what power gives us this number
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//given an array of numbers, return the number of digits int he largest numbers in the list
function mostDigits(nums){
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//accepts a list of numbers- 
//figure out how many digits the largest number has
//loop from k = 0 up to this largest number of digits
//for each iteration of the loop: create buckets for each digit(0 to 9) - a bucket is an array
//place each number in the correspoding bucket based on its kth digit
//replace our existing array with values in our buckets, stating with 0 and going up to 9
function radixSort(nums){
  let maxDigitCount = mostDigits(nums);

  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => []);

    for(let i = 0; i < nums.length; i++){
     let digit = getDigit(nums[i], k);
     digitBuckets[digit].push(nums[i]);

    }
    //pass in every element in digitBuckets as an indiviual element- spready operator flattens it
    nums = [].concat(...digitBuckets)

  }
  return nums
}


console.log(getDigit(12345, 0))//5
console.log(getDigit(7323, 2)) //3
console.log(digitCount(21388)) //5
console.log(mostDigits([1234, 56, 7])) //4
console.log(radixSort([23,345,5467,12,2345,9852]))