function CombineArrs(arr1,arr2){
	var ret = [];
	var i = 0, k = 0;
	while (i < arr1.length && k < arr2.length){
		if (arr1[i] < arr2[k]){
			ret.push(arr1[i++]);
		} else {
			ret.push(arr2[k++]);
		}
	}
	while (i < arr1.length){
		ret.push(arr1[i++]);
	}
	while (k < arr2.length){
		ret.push(arr2[k++]);
	}
	return ret;
}

function MergeSortArr(arr){
	if (arr.length == 1){
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var right = arr.slice(mid,arr.length);
	arr = arr.slice(0, mid);

	arr = MergeSortArr(arr);
	right = MergeSortArr(right);
	return CombineArrs(arr,right);
}

var arr = [3,6,4,7,2,1,9,11,8,5,10];
console.log(MergeSortArr(arr));
