function valid (str){
  var mystack = [];
  for (var i = 0; i < str.length ; i++){
    console.log(mystack);
    if (str[i] == '(' || str[i] == '[' || str[i] == '{'){
      switch (str[i]){
        case '(': mystack.push(')'); break;
        case '[': mystack.push(']'); break;
        case '{': mystack.push('}'); break;
        default: break;
      }
    } else if (str[i] == ')' || str[i] == ']' || str[i] == '}'){
      if (!mystack[0] || str[i] != mystack[mystack.length-1]){
        return false;
      } else {
        mystack.pop();
      }
    }
  }
  return ( mystack[0]? false: true);
}

var nope = "W(ow{k)}";
var yep = "W(ow{k})";


console.log( valid(yep) );
