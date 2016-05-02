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


var arr = [
			53,55,15,29,26,60,67,44,15,80,
			89,55,10,78,99,38,25,26,6,11,
			51,94,10,19,16,3,95,16,72,57,
			81,32,79,4,74,25,38,23,93,10,
			57,43,6,22,50,100,85,12,96,99,
			13,84,75,59,71,88,27,64,22,71,
			44,56,96,2,8,42,2,93,89,24,1,
			85,15,96,63,44,23,90,47,4,96,
			62,59,19,85,86,53,49,63,41,27,
			10,81,34,60,80,75,80,25,26,62
		];

// console.time("runTime");
arr = RadixSort(arr);
// console.timeEnd("runTime");
console.log(arr);
