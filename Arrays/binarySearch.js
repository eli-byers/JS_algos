function binarySearch(arr, val){
	min = -1;
	max = arr.length;
	while (min+1 < max) {
		mid = Math.floor(min + (max - min)/2);
		if (val == arr[mid]) return true;
		if (arr[mid] > val){ max = mid; }
		else { min = mid; }
	}
	return false;
}


arr = [2,4,5,6,8,9,10,12,15,17,18,20];

console.log(binarySearch(arr, 3));
