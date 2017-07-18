function RadixSort(arr, n, mask){
	var max, min;
	var buckets = [0,0,0,0,0,0,0,0,0,0];
	var negBuckets = [0,0,0,0,0,0,0,0,0,0];
	if (n === undefined){
		max = arr[0];
		min = arr[0];
		mask = 10;
	} else if (n <= 0){
		return arr;
	}
	for (var i in arr){
		var digit = Math.floor((arr[i] % mask) / (mask / 10));
		if (arr[i] >= 0) {
			buckets[digit]++;
		} else {
			negBuckets[Math.abs(digit)]++;
		}
		// set n
		if (n === undefined){
		 	if (arr[i] > max){
				max = arr[i];
			}
			if (arr[i] < min){
				min = arr[i];
			}
		}
	}
	// set n
	if (n === undefined){
		n = (max+"").length;
		negN = (min+"").length-1;
	}
	addBuckets(buckets, negBuckets);
	var arrs = sortArr(arr, buckets, negBuckets, mask);
	var negatives = arrs[0];
	var positives = arrs[1];
	negatives = RadixSort(negatives, --negN, (mask * 10));
	positives = RadixSort(positives, --n, (mask * 10));
	// console.log(negatives);
	if( negatives[0] > negatives[negatives.length-1]){
		negatives.reverse();
	}
	arr = negatives.concat(positives);
	return arr;
}

function addBuckets(buckets, negBuckets){
	for (i = 1; i < 10; i++){
		buckets[i] += buckets[i-1];
		negBuckets[i] += negBuckets[i-1];
	}
}

function sortArr(arr, buckets, negBuckets, mask){
	var ret = [], negRet = [];
	for (i = arr.length-1; i >= 0; i--){
		var digit = Math.floor((arr[i] % mask) / (mask / 10));
		if (arr[i] > 0){
			ret[--buckets[digit]] = arr[i];
		} else {
			negRet[--negBuckets[Math.abs(digit)]] = arr[i];
		}
	}
	return [negRet,ret];
}

var arr = [
			-53,-55,-15,-29,-26,-60,-67,-44,-15,-80,
			-89,55,10,78,99,38,25,26,6,11,
			-51,94,10,19,16,3,95,16,72,57,
			-81,32,79,4,74,25,38,23,93,10,
			-57,43,6,22,50,100,85,12,96,99,
			-13,84,75,59,71,88,27,64,22,71,
			-44,56,96,1,8,42,2,93,89,24,
			-85,15,96,63,44,23,90,47,4,96,
			-62,59,19,85,86,53,49,63,41,27,
			-10,81,34,60,80,75,80,25,26,62
		];

// console.time("runTime");
arr = RadixSort(arr);
// console.timeEnd("runTime");
console.log(arr);
