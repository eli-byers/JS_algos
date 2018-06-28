
function getDigit(n, mask){
	return Math.floor((n % mask) / (mask / 10));
}

function RadixSort(arr, n, mask){
	var max;
	if (n === 0){ return arr; }
	if (n === undefined){ max = arr[0]; mask = 10; }

	var buckets = [0,0,0,0,0,0,0,0,0,0];
	for (var i in arr){
		var digit = getDigit(arr[i], mask);
		buckets[digit]++;
		// calc max
		if (n === undefined && arr[i] > max){ max = arr[i]; }
	}
	// set n to max
	if (n === undefined){ n = (max+"").length; }

	arr = sortArr(arr, buckets, mask);
	return RadixSort(arr,(n - 1), (mask * 10));
}

function sortArr(arr, buckets, mask){
	for (var i = 1; i < buckets.length; i++){
		buckets[i] += buckets[i-1];
	}
	var ret = [];
	for (var i = arr.length-1; i >= 0; i--){
		var digit = getDigit(arr[i], mask);
		ret[--buckets[digit]] = arr[i];
	}
	return ret;
}

var arr = [53,255,15,29,26,160,67,44,115];

// console.time("runTime");
arr = RadixSort(arr);
// console.timeEnd("runTime");
console.log(arr);
