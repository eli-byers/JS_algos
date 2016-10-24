function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function Merge(arr1, arr2){
	var x1 = 0, x2 = 0, newArray = [];
	while(x1 < arr1.length || x2 < arr2.length){
    console.log(arr1[x1], arr2[x2]);
		if(x1 < arr1.length && (arr1[x1] <= arr2[x2] || arr2[x2] === undefined)){
			newArray.push(arr1[x1++]);
		}
    else if (x2 < arr2.length) newArray.push(arr2[x2++]);
	}
	return newArray;
}

function Union (arr1, arr2){
	var x1=0, x2=0, newArray=[];
	while(x1 < arr1.length || x2 < arr2.length){
		if(x1 < arr1.length && (arr1[x1] <= arr2[x2] || arr2[x2] === undefined)){
			newArray.push(arr1[x1]);
			if(arr1[x1++] == arr2[x2]) x2++;
		}
    else if (x2 < arr2.length) newArray.push(arr2[x2++]);
	}
	return newArray;
}

function Intersection (arr1, arr2){
	var x1=0, x2=0, newArray=[];
	while(x1 < arr1.length && x2 < arr2.length){
		if(arr1[x1] <= arr2[x2]){
			if(arr1[x1++] == arr2[x2]) newArray.push(arr2[x2++]);
		}
    else x2++;
	}
	return newArray;
}


//================================================================
//                            Testing
//================================================================
arr1 = [1,2,2,4,5,6,9,10];
arr2 = [2,3,3,4,7];

// merge
test1 = Merge(arr1, arr2);
test2 = Merge(arr2, arr1);
expected = [1,2,2,2,3,3,4,4,5,6,7,9,10];
if (arraysEqual(test1, expected) && arraysEqual(test2, expected)) console.log("Pass => Merge");
else console.log("Fail => Merge");

// union
test1 = Union(arr1,arr2);
test2 = Union(arr2, arr1);
expected = [1,2,2,3,3,4,5,6,7,9,10];
if (arraysEqual(test1, expected) && arraysEqual(test2, expected)) console.log("Pass => Union");
else console.log("Fail => Union");

// intersect
test1 = Intersection(arr1,arr2);
test2 = Intersection(arr2, arr1);
expected = [2,4];
if (arraysEqual(test1, expected) && arraysEqual(test2, expected)) console.log("Pass => Intersection");
else console.log("Fail => Intersection");
