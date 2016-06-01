function PartitionArr(arr){
	var i = -1;
	var end = arr[arr.length-1];
	for (var k = 0; k < arr.length - 1; k++){
		if(arr[k] < end){
			i++;
			if (i != k){
				var temp = arr[k];
				arr[k] = arr[i];
				arr[i] = temp;
			}
		}
	}
	arr[arr.length-1] = arr[++i];
	arr[i] = end;
	return arr;
}

function InsertionSort(arr){
	for (var i = 1; i < arr.length; i++){
		var cur = arr[i];
		var shift = false;
		var k;
		for (k = i-1; k >= 0; k--){
			if (cur < arr[k]){
				arr[k+1] = arr[k];
				shift = true;
			} else {
				break;
			}
		}
		if(shift){
			arr[k+1] = cur;
		}
	}
	return arr;
}
