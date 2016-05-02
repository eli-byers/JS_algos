function RadixSort(arr, n, mask){
	if (n == undefined){
		var max = arr[0];
		mask = 10;
	} else if (n == 0){
		return arr;
	}
	var buckets = [0,0,0,0,0,0,0,0,0,0];
	for (var i in arr){
		var digit = Math.floor((arr[i] % mask) / (mask / 10));
		buckets[digit]++;
		// calc max
		if (n == undefined){
		 	if (arr[i] > max){
				max = arr[i];
			}
		}
	}
	// set n to max
	if (n == undefined){
		n = (max+"").length;
	}
	arr = sortArr(arr, buckets, mask);
	return RadixSort(arr,(n - 1), (mask * 10));
}

function sortArr(arr, buckets, mask){
	for (var i = 1; i < buckets.length; i++){
		buckets[i] += buckets[i-1];
	}
	var ret = [];
	for (var i = arr.length-1; i >= 0; i--){
		var digit = Math.floor((arr[i] % mask) / (mask / 10));
		ret[--buckets[digit]] = arr[i];
	}
	return ret;
}

var arr = [
			53,55,15,29,26,60,67,44,15,80,
			89,55,10,78,99,38,25,26,6,11,
			51,94,10,19,16,3,95,16,72,57,
			81,32,79,4,74,25,38,23,93,10,
			57,43,6,22,50,100,85,12,96,99,
			13,84,75,59,71,88,27,64,22,71,
			44,56,96,1,8,42,2,93,89,24,
			85,15,96,63,44,23,90,47,4,96,
			62,59,19,85,86,53,49,63,41,27,
			10,81,34,60,80,75,80,25,26,62
		];

// console.time("runTime");
arr = RadixSort(arr);
// console.timeEnd("runTime");
console.log(arr);
