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
// sum();

function iterateThroughArray(arr){
	for (i in arr){
		console.log(arr[i]);
	}
}
// var x = [1,3,5,7,9,13];
// iterateThroughArray(x);

function findMax(arr){
	var max = arr[0];
	for (i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	console.log(max);
}
// var x = [-3, 3, 5, 7];
// findMax(x);

function findAvg(arr){
	var sum = 0;
	for (i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum / arr.length);
}
// var x =  [1,3,5,7,20];
// findAvg(x);

function oddsArray(n){
	var arr = [];
	for (i = 0; i <= n; i++){
		if (i % 2 !== 0){
			arr.push(i);
		}
	}
	console.log(arr);
}

oddsArray(255);
