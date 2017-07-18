// extra to return sub strings in order
function sortStrArr(arr){
	// alphabetically
	arr.sort();
	// by length
	arr.sort(function(a, b){ return a.length - b.length; });
	return arr;
}

function strSubSet(str, map, count) {
	// init
	if (!map) { map = {"":true}; count = str.length; }
	// logic
	map[str] = true;
	for (var i = 0; i < str.length; i++){
		var left = str.slice(0, i);
		var right = str.slice(i+1);
		strSubSet(left+right, map, count);
	}
	// build return
	if (str.length == count) return sortStrArr(Object.keys(map));
}

console.log(strSubSet("bob"));
