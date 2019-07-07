function commonSuffix(arr){
  suffix = "";
  valid = true;
  c = 0;
  while (c < arr[0].length) {
    cur = arr[0][arr[0].length-1-c];
    for (var i = 1; i < arr.length; i++){
      test = arr[i][arr[i].length-1-c];
      if (cur != test) valid = false;
    }
    if (valid) suffix = cur + suffix;
    else break;
    c++;
  }
  return suffix;
}


arr = ["lice", "nice", "dice"];
console.log(commonSuffix(arr));
