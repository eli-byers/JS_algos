function rvalpar(n,open,close,arr_str,str){
	if(!open){open=1;}
	if(!close){close=0;}
	if(!arr_str){arr_str = [];}
	if(!str){str = "(";}
	if(n == (open+close)/2){
		return arr_str.push(str);
	}
	if(close < open){
		rvalpar(n,open,close+1,arr_str,str+")");
	}
	if(open < n){
		rvalpar(n,open+1,close,arr_str,str+"(");
	}
	return arr_str;
}

console.log(rvalpar(3));
