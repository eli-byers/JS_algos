function SelecitonSort(arr){
	if (arr.length > 1){
		var left = 0;
		for (var i = 1; i < arr.length; i++){
			var min = i;
			for (var k = i+1; k < arr.length; k++){
				if (arr[k] < arr[min]){
					min = k;
				}
			}
			if (arr[min] < arr[left]){
				var temp = arr[left];
				arr[left] = arr[min];
				arr[min] = temp;
			}
			left++;
		}
	}
}

var arr = [7,1,3,4,8,6,2,9,7,7,5,1,2,10,12,5,6,2,10,9];

console.time("runTime");
SelecitonSort(arr);
console.timeEnd("runTime");
console.log(arr);
