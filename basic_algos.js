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
// oddsArray(255);

function greaterThanY(arr, y){
	var count = 0;
	for (i in arr){
		if (arr[i] > y){
			count++;
		}
	}
	console.log(count);
}
// var x = [1,3, 5, 7];
// greaterThenY(x, 3);

function squareTheValues(arr){
	for (i in arr){
		arr[i] *= arr[i];
	}
	return arr;
}
// var x = [1,5, 10, -2];
// console.log(squareTheValues(x));

function eliminateNegatives(arr){
	for (i in arr){
		if (arr[i] < 0){
			arr[i] = 0;
		}
	}
	return arr;
}
// var x = [1,5, 10, -2];
// console.log(eliminateNegatives(x));

function minMaxAvg(arr){
	var min = max = avg = arr[0];
	for (i = 1; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		} else if (arr[i] < min){
			min = arr[i];
		}
		avg += i;
	}
	console.log("min:",min," max:",max," avg:",avg);
}
// var x = [1,5, 10, -2];
// minMaxAvg(x);

function shiftByOne(arr){
	for (i = 0; i < arr.length-1; i++){
		arr[i] = arr[i+1];
	}
	arr[arr.length-1] = 0;
	return arr;
}
// var x = [1,5, 10, 7, -2];
// console.log(shiftByOne(x));

function numberToString(arr){
	for (i in arr){
		if (arr[i] < 0){
			arr[i] = "Dojo";
		}
	}
	return arr;
}
// var x = [-1, -3, 2];
// console.log(numberToString(x));

function randArray(){
	var arr = [];
	for (i = 0; i < 10; i++){
		arr.push(Math.floor(Math.random() * 100))
	}
	return arr;
}
// console.log(randArray());

function swapTwoVals(arr){
	var temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;
	return arr;
}
// var x = [2, 3, 5, 7, 6];
// console.log(swapTwoVals(x));

function reverseArray(arr){
	for (i = 0; i < Math.floor(arr.length/2); i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}
// var x = [-3,5,1,3,2,10];
// console.log(reverseArray(x));

function insertXInY(arr, x, y){
	for (i = arr.length; i > y; i--){
		arr[i] = arr[i-1];
	}
	arr[y] = x;
	return arr;
}
var x = [1, 3, 5, 7];
console.log(insertXInY(x, 10, 2));
