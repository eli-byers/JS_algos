// print all numbers from 1-255
function print255(){
	for (i = 1; i <= 1000; i++){
		console.log(i)
	}
}
// print255();

// print all odd numbers from 1 to 1000
function printOdds(){
	for (i = 1; i <= 1000; i++){
		if (i % 2 !== 0){
			console.log(i);
		}
	}
}
// printOdds()

// print the sum of all odd numbers from 1-5000
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

// print all elements in an array
function iterateThroughArray(arr){
	for (i in arr){
		console.log(arr[i]);
	}
}
// var x = [1,3,5,7,9,13];
// iterateThroughArray(x);

// print the max val of an array
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

// print avg val of an array
function findAvg(arr){
	var sum = 0;
	for (i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum / arr.length);
}
// var x =  [1,3,5,7,20];
// findAvg(x);

// print an array of all odd numbers from 0-n
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

// print the number of values in array greater than y
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

// return array of all values in input array squared
function squareTheValues(arr){
	for (i in arr){
		arr[i] *= arr[i];
	}
	return arr;
}
// var x = [1,5, 10, -2];
// console.log(squareTheValues(x));

// return array whith all negative numbers in input array set to 0
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

// print min, max, and avgerage of input array
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

// shift array by one, tail gets set to 0
function shiftByOne(arr){
	for (i = 0; i < arr.length-1; i++){
		arr[i] = arr[i+1];
	}
	arr[arr.length-1] = 0;
	return arr;
}
// var x = [1,5, 10, 7, -2];
// console.log(shiftByOne(x));

// replace all negative numbers in array with string "Dojo"
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

// return a ten element array of random numbers from 0-100
function randArray(){
	var arr = [];
	for (i = 0; i < 10; i++){
		arr.push(Math.floor(Math.random() * 100))
	}
	return arr;
}
// console.log(randArray());

// swap first and last elements in array
function swapTwoVals(arr){
	var temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;
	return arr;
}
// var x = [2, 3, 5, 7, 6];
// console.log(swapTwoVals(x));

// reverse elements in input array
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

// insert a value at a given index
function insertXInY(arr, x, y){
	for (i = arr.length; i > y; i--){
		arr[i] = arr[i-1];
	}
	arr[y] = x;
	return arr;
}
// var x = [1, 3, 5, 7];
// console.log(insertXInY(x, 10, 2));

// remove all negative numbers from an array
function removeNegatives(arr){
	var x = -1;
	for (i = 0; i < arr.length; i++){
		if (arr[i] >= 0){
			x++;
			if (x != i){
				arr[x] = arr[i];
			}
		}
	}
	arr = arr.splice(0, x+1);
	return arr;
}
// var x = [0, -1, 2, -3, 4, -5, 6];
// console.log(removeNegatives(x));

// return index of a given number in an array
function linearSearch(arr, x){
	for (i in arr){
		if (arr[i] == x){
			return i;
		}
	}
	return false;
}
// var x = [24, 8, 23, 3];
// console.log(linearSearch(x, 8));

// find sum of all numbers from n to 1
function iSum(n){
	var sum = 0;
	for (i = 1; i <= n; i++){
		sum += i;
	}
	return sum;
}
// console.log(iSum(5));
