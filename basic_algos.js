function print255(){
	for (i = 1; i <= 1000; i++){
		console.log(i)
	}
}
// print255();

function printOdds(){
	for (i = 1; i <= 1000; i++){
		if (i % 2 !== 0){
			console.log(i);
		}
	}
}
// printOdds()

function sum(){
	var sum = 0;
	for (i = 1; i <= 5000; i++){
		if (i % 2 !== 0){
			sum += i;
		}
	}
	console.log(sum);
}
sum();
