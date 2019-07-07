// maybe QuickSort

function PartitionArr(arr, start, end){
	var piv = end;
	var pivot = arr[piv];
  var t = start - 1;
	for (r = start; r <= end; r++){
		if(arr[r] < pivot){
			t++;
			if(t != r){
				var tm = arr[r];
				arr[r] = arr[t];
				arr[t] = tm;
			}
		}
    if (arr[r] == pivot) piv = r;
	}
	t++;
	if (arr[t] > arr[piv]){
		arr[piv] = arr[t];
		arr[t] = pivot;
	}
	return t;
}

function QuickSort(arr, start, end){
	if(start === undefined){
		start = 0;
		end = arr.length - 1;
	}
	if (start >= end){ return arr; }
	var pivot = PartitionArr(arr, start, end);
  console.log(arr);
	QuickSort(arr,start,pivot-1);
	QuickSort(arr,pivot+1,end);
	return arr;
}

// var arr = [2,1,1,1,3];
var arr = [7,1,3,4,8,6,-2,9,7,7,5,-1,2,10,12,5,6,2,10,9];

console.time("runTime");
QuickSort(arr);
console.timeEnd("runTime");
console.log(arr);
