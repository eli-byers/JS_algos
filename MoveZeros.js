function moveZeros(arr){
	if (arr.length < 2){
		return
	}
	var idx = 0;
	for (i = 0; i < arr.length; i++){
		if (arr[i] != 0){
			if (i > idx){
				arr[idx] = arr[i];
			}
			idx++;
		}
	}
	while (idx < arr.length){
		arr[idx++] = 0;
	}
	return arr
}

var arr =  [45, 14, 0, 1, 0, 3, 12, 0, 34];

console.log(moveZeros(arr));
