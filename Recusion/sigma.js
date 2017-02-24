function sigma(n) {
	if (n == 1) return n;
	return n + sigma(n-1);
}


console.log(sigma(4));
