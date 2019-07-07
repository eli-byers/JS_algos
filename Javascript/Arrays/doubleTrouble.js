function doubleTrouble(arr){
  var ind = arr.length - 1;
  for (var i = (arr.length * 2)-1; i >= 0; i-=2){
    arr[i] = arr[ind];
    arr[i-1] = arr[ind];
    ind--;
  }
}

arr = [0,1,2,3,4,5,6,7,8,9,10];
doubleTrouble(arr);
console.log(arr);
