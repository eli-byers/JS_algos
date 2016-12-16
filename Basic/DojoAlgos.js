
// Chapter 3 - Arrays
// page 38/42

var arr = [5, 2, 3, 6, 4, 9, 7];
// console.log("input array: arr =", arr);

function secondToLast (arr){
  // first test for brake case
  if (arr.length < 2){ return null; }
  // return the second to last element
  return arr[arr.length-2];
}

// console.log("secondToLast(arr) = '9'                => ", secondToLast(arr) == 9 ? "Pass": "X");
// console.log("secondToLast([0]) = 'null'             => ", secondToLast([]) == null ? "Pass": "X");

function nthToLast (arr, n){
  // first test for the brake case
  if (n > arr.length || n < 0){ return null; }
  // return the nth to last element
  return arr[arr.length-n];
}

// console.log("nthToLast(arr, 3) = '4'                => ", nthToLast(arr, 3) == 4 ? "Pass": "X");
// console.log("nthToLast([0], 3) = 'null'             => ", nthToLast([0], 3) == null ? "Pass": "X");
// console.log("nthToLast(arr, -3) = 'null'            => ", nthToLast(arr, -3) == null ? "Pass": "X");

function secondLargest (arr){
  // first test for the brake case
  if (arr.length < 2) { return null; }
  // instantiate first and second with the first elements in the array
  // make sure that these are in the correct order: first > second
  var first = arr[0] > arr[1] ? arr[0] : arr[1];
  var second = arr[0] > arr[1] ? arr[1] : arr[0];
  // starting at the third element, loop through the array
  for (var i = 2; i < arr.length; i++){
    // if arr[i] is larger than the current largest element
    if (arr[i] > first){
	// set the second largest to the first largest
	// and update the first to the new largest element
      second = first;
      first = arr[i];
    }
    // else if arr[i] is between the first and second largest
    // update second largest
    else if (arr[i] > second){
      second = arr[i];
    }
  }
  return second;
}

// console.log("secondLargest(arr) = '7'               => ", secondLargest(arr) == 7 ? "Pass": "X");
// console.log("secondLargest([0]) = 'null'            => ", secondLargest([0]) == null ? "Pass": "X");


function nthLargest (arr, n ){
  // first test for break case
  if (n > arr.length || n < 1) { return null; }
  // - calculate the max of the array -
  // set nthLargest: using the 0th element accounts for negative numbers
  var nthLargest = arr[0];
  // starting as the first element loop through the array
  for (var i = 1; i < arr.length; i++){
    // id arr[i] is larger than nthLargest, update nthLargest to arr[i]
    if (arr[i] > nthLargest){
      nthLargest = arr[i];
    }
  }
  // nthLargest == the max of arr

  // - calculate the nth largest element -
  // n is the number of times we want to go down from the max
  // because we already calculated the max once, we stop when n == 1
  while (n > 1){
    // grab the 0th element to account for negatives
    var nextLargest = arr[0];
    // incase the arr[0] is the max, loop till you find a smaller element
    for (var i = 1; i < arr.length; i++){
      if (arr[i] < nthLargest) {
        // update nextLargest and break out of the loop early
        nextLargest = arr[i];
        break;
      }
    }
    // loop through the array
    for (var i = 0; i < arr.length; i++){
      // update nextLargest if arr[i] > nextLargest
      // and it is smaller nthLargest
      if (arr[i] > nextLargest && arr[i] < nthLargest){
        nextLargest = arr[i];
      }
    }
    // update nthLargest to be the next largest element
    nthLargest = nextLargest;
    // decrement the number of times we need to fine the next largest element
    n--;
  }
  return nthLargest;
}
// console.log("nthLargest(arr, 3) = '6'               => ", nthLargest(arr, 3) == 6 ? "Pass": "X");
// console.log("nthLargest(arr, arr.length+1) = 'null' => ", nthLargest(arr, arr.length+1) == null ? "Pass": "X");
// console.log("nthLargest(arr, 0) = 'null'            => ", nthLargest(arr, 0) == null ? "Pass": "X");
