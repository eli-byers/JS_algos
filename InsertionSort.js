function InsertionSort(arr){
	for (i = 1; i < arr.length; i++){
		var k = i;
		while (k > 0 && arr[k] < arr[k - 1]){
			var temp = arr[k];
			arr[k] = arr[k - 1];
			arr[k - 1] = temp;
			k--;
		}
	}
}

var arr = [7,1,3,4,8,6,2,9,7,7,5,1,2,10,12,5,6,2,10,9];

console.time("runTime");
InsertionSort(arr);
console.timeEnd("runTime");
console.log(arr);
