function anagrams(str, anStr, arr){
	// init
	if (!arr){ arr = []; anStr = ""; }
	// basecase
	if (str.length === 0) arr.push(anStr);
	// recursive calls
	for (var i = 0; i < str.length; i++){
		var newAnStr = anStr + str[i];
		var newStr = str.slice(0, i) + str.slice(i+1);
		anagrams(newStr, newAnStr, arr);
	}
	// only return if you are in the first call
	if (anStr.length === 0) return arr.sort();
}


console.log(anagrams('eli'));
