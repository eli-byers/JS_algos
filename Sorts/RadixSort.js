function RadixSort(arr, n, mask){
	if (n == undefined){
		n = (max(arr)+"").length;
		mask = 10;
	} else if (n == 0){
		return arr;
	}
	var buckets = [[],[],[],[],[],[],[],[],[],[]];
	for (var i in arr){
		var place = Math.floor((arr[i] % mask) / (mask / 10));
		buckets[place].push(arr[i]);
	}
	arr = mergeArrs(buckets);
	return RadixSort(arr,(n - 1), (mask * 10));
}

function mergeArrs(arr){
	var ret = [];
	for (var i in arr){
		ret = ret.concat(arr[i]);
	}
	return ret;
}

function max(arr) {
	var max = arr[0];
	for (var i in arr){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}


var arr = [53,55,15,29,26,60,67,44,15];

// console.time("runTime");
arr = RadixSort(arr);
// console.timeEnd("runTime");
console.log(arr);
