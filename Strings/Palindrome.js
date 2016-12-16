// basic isPalindrome:
// takes a string
// test if the whole string is a palindrome
function isPal(str){
  for (var i = 0; i < str.length/2; i++){
    if (str[i] != str[str.length-1-i]){
      return false;
    }
  }
  return true;
}

// multi function isPalindrome:
// takes a string and a starting and ending index
// tests if the sub string from start to end is a palindrome
// if no start and end are given, it checks the whole string
function isPalindrome(str, start, end){
  if (start === undefined ) start = 0;
  if (end === undefined) end = str.length-1;
  if (end < start) { var temp = end; end = start; start = temp; }

  for (var i = 0; i <= (end - start)/2; i++){
    if (str[start + i] != str[end - i]){
      return false;
    }
  }
  return true;
}

// longestPalindrome:
// takes a string
// returns the longest palindrome or the first char if none is found
function longestPalindrome(str){
  // early termination if the string is empty
  if (str.length === 0) return "";
  // init the starting and ending indexes and the palindrome length
  var start = 0, end = 0, paliLen = 1;

  // start a runner 'i' that goes from the beginning to the end
  // break if 'i' is closer to the end then the current palindrome length
  //    in this case we know we are done checking because the remaining
  //    string is shorter then the palindrome we already have
  for (var i = 0; i < str.length - paliLen; i++){
    // start a runner 'j' that goes from the end backwards to 'i'
    // break if 'j' is less then 'i' plus the palindrome length
    //    in that case we know the string we are about to check is
    //    shorter then the palindrome we already have
    for (var j = str.length-1; j > i + paliLen; j--){
      // if the substring from 'i' to 'j' is a palindrome
      // update start, end, and palindrome length
      // and break out of the inner loop
      // beacuse we just found the longest palindrome that starts at 'i'
      if (isPalindrome(str, i, j)){
        start = i;
        end = j;
        paliLen = 1+(end-start);
        break;
      }
    }
  }

  // make the string
  // append to an empty string
  // starting at the starting position
  // and going for the length of the palindrome
  var ret = "";
  for (var c = 0; c < paliLen; c++){
    ret += str[start + c];
  }
  return ret;
}

str = "racecars lol aceca asdfasdfasdfasdf";
console.log(isPalindrome(str));         // false
console.log(isPalindrome(str, 0, 2));   // true
console.log(isPalindrome(str, 4, 10));  // true
console.log(longestPalindrome(str));    // racecar
