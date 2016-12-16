function shift(arr, n){
  n %= arr.length;
  console.log(n);
  if (arr.length < 2 || n === 0) return;
  n = n % arr.length;

  var visited = {};
  var looped = false, count = 0, i = 0, temp1 = arr[0], temp2;
  while (count <= arr.length){
    i += n;
    // console.log("arr["+i+"] = "+temp1);
    if (i < arr.length){
      if (i < n && looped){
        if (visited[i]) {
          i -= (n - 1);
          continue;
        } else {
          // console.log(i+" has been visited");
          visited[i] = true;
          looped = false;
        }
      }
      temp2 = arr[i];
      arr[i] = temp1;
      temp1 = temp2;
      count++;
    } else {
      i -= (arr.length + n);
      looped = true;
    }
    // console.log(count, arr);
  }
}


var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

shift(arr,15);
console.log(arr);
