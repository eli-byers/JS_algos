// helpers
function makeSubStrsFromData(dataArr, str){
	var subStrMap = {};
	// for each str data
	for (var s = 0; s < dataArr.length; s++){
		var subStr = "";
		var pos = dataArr[s].strPos;
		// for the length of the sub string
		for (var ch = 0; ch < dataArr[s].strLength; ch++){
			// add char to begining of the sub string
			subStr = str[pos-ch] + subStr;
			subStrMap[subStr] = true;
		}
	}
	var subStrArr = Object.keys(subStrMap);
	subStrArr.sort(function(a, b){ return a.length - b.length; });
	return subStrArr;
}
function allCommonSubStrs(str1, str2){
  var subStrs = [];
  var matrix = [[],[]];

  // make sure str1 is shorter
  if (str1.length > str2.length){ var temp = str1; str1 = str2; str2 = temp; }
  // make memory
  for (var i = 0; i < str2.length; i++) matrix[1][i] = 0;

  // for each char in str1
  for (var c in str1){
    // copy second row to first
    matrix[0] = matrix[1].slice();

    // for each char in str2
    for (var y in str2){
      // if chars match
      if (str1[c] == str2[y]){
        // and it's not the first match, add to previous match count
        // else set to 1
        matrix[1][y] = y > 0 ? matrix[0][y-1] + 1 : 1;
        // add substring data to array
        subStrs.push({ "strLength": matrix[1][y], "strPos": c });
      }
      // if they don't match set to 0
      else { matrix[1][y] = 0; }
    }
  }
  // console.log(subStrs, str1);
  // make sub subStrs and sort subStrs by length
  return makeSubStrsFromData(subStrs, str1);
}
function stringMatch(arr1, arr2){
	matches = {};
	// console.log(arr1, arr2);
	for (var i = 0; i < arr1.length; i++){
		if (matches[arr1[i]] === undefined){
			matches[arr1[i]] = false;
			for (var j = 0; j < arr2.length; j++){
				if (arr2[j] === arr1[i]) {
					matches[arr1[i]] = true;
					break;
				}
			}
			// if (!matches[arr1[i]]) {
			// 	str = arr1[i];
			// 	arr1.push(arr1[i].slice(0,arr1[i].length-1));
			// 	arr1.push(arr1[i].slice(1));
			// }
		}
	}
	matchArr = [];
	for (var key in matches){
		if (matches[key]) matchArr.push(key);
	}
	return matchArr;
}

// main
function longestCommonSubStrFromArr(arr){
	if (arr.length === 0) return '';
	if (arr.length == 1) return arr[0];

	// short strings first
	arr.sort(function(a,b){ return a.length - b.length; });
	// get first set of commonSubStrs, break of there are none
	var css = allCommonSubStrs(arr[0], arr[1]);
	if (css.length === 0) return [''];
	// for the rest of the strings
	idx = 1;
	while (idx < arr.length-1){
		// get substrings for next pair
		var commonSubStrs = allCommonSubStrs(arr[0], arr[++idx]);
		// keep common substrings, break of there are none
		css = stringMatch(css, commonSubStrs);
		if (css.length === 0) return [''];
	}
	// sort substrings by length dec
	css.sort(function(a,b){ return b.length - a.length; });
	// return longest substring
	return css[0];
}
//                  TEST
//===========================================
// var arr = [ "what! hello", "Wow it's a yello lark!", "would you like some jello?", "Yes! I love jello!!!"];
// for (var i = 0; i < 13; i++) { arr = arr.concat(arr); }
// console.log("arr is", arr.length, "strings long");
//
// console.time("LCS");
// var CSS  = longestCommonSubStrFromArr(arr);
// console.timeEnd("LCS");
// console.log("LCS:", CSS);
//===========================================

function MPQnode(val) {
	this.val = val;
	this.next = null;
}
function MPQ(){
	this.head = null;
	this.map = {};
	this.enque = function(val) {
		node = new MPQnode(val);
		if (!this.head) this.head = node;
		else {
			if (this.map[val]) return this;
			if (val.length > this.head.val.length) {
				node.next = this.head;
				this.head = node;
			}
			else {
				cur = this.head;
				while (cur.next) {
					if (val.length > cur.next.val.length) {
						node.next = cur.next;
						cur.next = node;
						this.map[val] = true;
						return this;
					}
					cur = cur.next;
				}
				cur.next = node;
			}
		}
		this.map[val] = true;
		return this;
	};
	this.deque = function() {
		if (!this.head) return null;
		ret = this.head.val;
		this.head = this.head.next;
		delete this.map[ret];
		return ret;
	};
	this.show = function(){
		count = 0;
		console.log("------ SLQ -----");
		if (this.head){
			cur = this.head;
			while (cur){
				count++;
				if (count < 5) console.log(cur.val);
				cur = cur.next;
			}
		}
		if (count > 5) console.log("... "+(count-5)+" more vals");
	};
	this.count = function(){
		count = 0;
		if (this.head){
			cur = this.head;
			while (cur){
				count++;
				cur = cur.next;
			}
		}
		console.log("SQL count:", cur.val);
	};
}

function longestCommonSubStrFromArrII(arr) {
	if (arr.length === 0) return '';
	if (arr.length == 1) return arr[0];
	var que = new MPQ();
	// move smallest str to front
	minIdx = 0;
	for (var i in arr) {
		if (arr[i].length < arr[minIdx].length) minIdx = i;
	}
	if (minIdx !== 0){
		temp = arr[0]; arr[0] = arr[minIdx]; arr[minIdx] = temp;
	}
	// start with smallest string as substr
	subStr = arr[0];
	while (subStr){
		// look for substring in words
		for (var j = 1; j < arr.length; j++){
			if (arr[j].search(subStr) >= 0){
				if (j == arr.length-1) return subStr;
			}
			else {
				var left = subStr.slice(0, subStr.length-1);
				var right = subStr.slice(1);
				if (left) que.enque(left);
				if (right) que.enque(right);
				break;
			}
		}
		// que.show();
		subStr = que.deque();
	}
	return '';
}
var arr = ["Wow it's a yello lark!", "would you like some jello?", "Yes! I love jello!!!", "what! hello"];
for (var i = 0; i < 10; i++) { arr = arr.concat(arr); }
console.log("arr is", arr.length, "strings long");

console.time("GCS");
var CSS  = longestCommonSubStrFromArrII(arr);
console.timeEnd("GCS");
console.log("GCS:", CSS);
