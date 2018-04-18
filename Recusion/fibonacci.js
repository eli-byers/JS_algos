function fib(n, arr = [0,1]){
	if (n < 0) return 0;
	if (n < 2) return arr[n];
	var temp = arr[0] + arr[1];
	arr[0] = arr[1];
	arr[1] = temp;
	return fib(n-1, arr);
}

console.log(fib(6));
