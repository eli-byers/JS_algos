function Merge(arr1, arr2){
	var x1=0, x2=0, newArray=[];
	while(x1 < arr1.length || x2 < arr2.length){
		if(x1 < arr1.length && arr1[x1] <= arr2[x2]){
			newArray.push(arr1[x1++]);
		} else if (x2 < arr2.length){
			newArray.push(arr2[x2++]);
		}
	}
	return newArray;
}

arr1 = [1,2,2,4,5,6];
console.log("arr1 = ["+arr1+"]");
arr2 = [2,3,3,4,7];
console.log("arr2 = ["+arr2+"]");

console.log("Merge ["+Merge(arr1,arr2)+"]");

function Union (arr1, arr2){
	var x1=0, x2=0, newArray=[];
	while(x1 < arr1.length || x2 < arr2.length){
		if(x1 < arr1.length && arr1[x1] <= arr2[x2]){
			newArray.push(arr1[x1]);
			if(arr1[x1++] == arr2[x2]){ x2++; }
		} else if (x2 < arr2.length){
			newArray.push(arr2[x2++]);
		}
	}
	return newArray;
}

console.log("Union ["+Union(arr1,arr2)+"]");

function Intersection (arr1, arr2){
	var x1=0, x2=0, newArray=[];
	while(x1 < arr1.length || x2 < arr2.length){
		if(x1 < arr1.length && arr1[x1] <= arr2[x2]){
			if(arr1[x1] == arr2[x2]){
				newArray.push(arr1[x1]);
				x2++;
			}
			x1++;
		} else if (x2 < arr2.length){
			x2++;
		}
	}
	return newArray;
}

console.log("Intersection ["+Intersection(arr1,arr2)+"]");
