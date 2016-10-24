function valid (str){
  var mystack = [];
  for (var i = 0; i < str.length ; i++){
    if (str[i] == '(' || str[i] == '[' || str[i] == '{'){
      mystack.push(str[i]);
    } else if (str[i] == ')' || str[i] == ']' || str[i] == '}'){
      if (!mystack[0] || (str[i] != mystack[-1])){
        return false;
      } else {
        mystack.pop();
      }
    }
  }
  return (mystack[0]? false: true);
}


var nope = "W(ow{k})}";
var yep = "W(ow{k}) sasdfasdfasdfasd()";
var wierd = "{]}";


console.log( valid(yep) );
