
// O(2^n)

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}



//use memoization- storing the results of expensive ufnctoin calls and reutnr the cached result when teh same inputs occur again

//O(n)
function fib2(n, memo = []){
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

//tabulation - better space complexity

function fib3(n){
  if(n <= 2)return 1;
  let fibNums = [0,1,1];
  for(let i = 3; i <= n; i++){
  fibNums[i] = fibNums[i -1] + fibNums[i -2];
  }
  return fibNums;
}

