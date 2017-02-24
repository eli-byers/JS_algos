function stringMatch(arr1, arr2){
	res = {};
	// count = 0;
	for (var i = 0; i < arr1.length; i++){
		if (res[arr1[i]] === undefined){
			res[arr1[i]] = false;
			for (var j = 0; j < arr2.length; j++){
				// count++;
				if (arr2[j] === arr1[i]) {
					res[arr1[i]] = true;
					break;
				}
			}
		}
	}
	// console.log(count);
	return res;
}

arr1 = ['fish', 'money', 'green', 'cars'];
arr2 = ['green', 'fish', 'cash',  'bob' , 'bob' , 'bob','bob','bob','bob','bob','bob'];

console.log(stringMatch(arr1, arr2));
