
function binarySearch(arr, val, start, end){

	// init
	if (start === undefined) { start = 0; end = arr.length-1; }
	console.log(start, end);
	// base case
	if (start > end ) return false;
	if (val < arr[0] || val > arr[arr.length-1]) return false;
	// logic
	var mid = Math.floor((start + end) / 2);
	if (val == arr[mid]) return true;
	if (val < arr[mid]) { end = mid; }
	else { start = mid; }
	// recursive call
	return binarySearch(arr, val, start, end);
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 2));
