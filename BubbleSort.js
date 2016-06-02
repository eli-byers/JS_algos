function BubbleSort(arr){
	var sorted = false;
	while (!sorted){
		sorted = true;
		for(i = arr.length-1; i > 0; i--){
			if (arr[i] < arr[i-1]){
				var temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				sorted = false;
			}
		}
	}
}


var arr = [7,1,3,4,8,6,2,9,7,7,5,1,2,10,12,5,6,2,10,9];

console.time("runTime");
BubbleSort(arr);
console.timeEnd("runTime");
console.log(arr);
