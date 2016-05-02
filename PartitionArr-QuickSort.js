// maybe QuickSort

function PartitionArr(arr, s, e){
	var i = s - 1;
	var piv = Math.floor(Math.random() * (e+1 - s)) + s;
	var pivot = arr[piv];

	for (k = s; k <= e; k++){
		if(arr[k] < pivot){
			i++;
			if(i != k){
				var temp = arr[k];
				arr[k] = arr[i];
				arr[i] = temp;
			}
			if (arr[k] == pivot){
				piv = k;
			}
		}
	}
	i++;
	if (arr[i] > arr[piv]){
		arr[piv] = arr[i];
		arr[i] = pivot;
	}
	return i;
}

function QuickSort(arr, start, end){
	if(start == undefined){
		start = 0;
		end = arr.length - 1;
	}
	if (start >= end){ return arr; }
	var pivot = PartitionArr(arr, start, end);
	QuickSort(arr,start,pivot-1);
	QuickSort(arr,pivot+1,end);
	return arr;
}

var arr = [7,1,3,4,8,6,2,9,7,7,5,1,2,10,12,5,6,2,10,9];

console.time("runTime");
QuickSort(arr);
console.timeEnd("runTime");
console.log(arr);
