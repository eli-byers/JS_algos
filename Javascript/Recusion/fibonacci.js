function fib(n, memo = [0,1]){
	if (n < 0) return 0;
	if (n < 2) return memo[n];
	var temp = memo[0] + memo[1];
	memo[0] = memo[1];
	memo[1] = temp;
	return fib(n-1, memo);
}


umqca

console.log(fib(6));
