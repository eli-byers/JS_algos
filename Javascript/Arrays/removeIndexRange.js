function removeRange(arr, a, b){
  var dif = b-a+1;
  for (var i = b+1; i < arr.length; i++){
    arr[i - dif] = arr[i];
  }
  arr.length = arr.length - dif;


  // for (var i = 1; b+1+i < arr.length; i++){
  //   arr[a+i] = arr[b+1+i];
  // }
  // arr.length = arr.length - (b-a+1);
}

arr = [0,1,2,3,4,5,6,7,8,9,10];
removeRange(arr,4,6);
console.log(arr);
