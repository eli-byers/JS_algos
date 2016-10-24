function LongestCommonSubStr(str1, str2){
  // The length of the longest common string
  var strLength = 0;
  // The postion of the last character in the longest string
  var strPos = 0;

  // Init the outer array
  var matrix = [];
  // Iterate through str1
  for (var x in str1){
    // Init the inner array
    matrix[x] = [];
    // Iterate through str2
    for (var y in str2){
      // If the characters match make sure you are not on an edge
      if (str1[x] == str2[y]){
        // If you are not on an edge you can look backwards
        if (x > 0 && y > 0){
          // add 1 to the previous count
          matrix[x][y] = matrix[x-1][y-1] + 1;

          // If you have found the new largest string,
          // update the values to build the string later
          if (matrix[x][y] > strLength){
            // This is the length of the string
            strLength = matrix[x][y];
            // This is the position in str1
            strPos = x;
          }
        }
        // If you are on an edge, just make the count 1
        else {
          matrix[x][y] = 1;
        }
      }
      // If the characters don't match, set the count to 0
      else {
        matrix[x][y] = 0;
      }
    }

  }

  // ==================== MAP =======================
  // This is a log of the data structure that you create.
  // I have added the characters along the axis so you can see what the numbers reference.
  // NOTE: Each number is the count of matches at that point in the string.
  console.log("    "+str2.split("").join("  "));
  for(var g in matrix){
    console.log(str1[g], matrix[g]);
  }
  console.log("");
  // ===============================================


  // Time to rebuld the largest common string from the length and position
  var lcs = "";
  // Iterate for the length of the longest string
  for (var i = 0; i < strLength; i++){
    // We only know where the end of the string is so we have to step backwards
    // Since we are steping backwards add the character to the start of the string
    lcs = str1[strPos-i] + lcs;
  }

  return lcs;
}



// Run the function
var str1 = "hello world";
var str2 = "wow its yello";
var LCS  = LongestCommonSubStr(str1, str2);
console.log("LCS:", LCS);
