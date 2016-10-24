function trieNode(val){
  this.val = val;
  this.isWord = false;
  this.children = [];

  this.vomit = function(){
    var str = this.val+":";
    for (var x in this.children){
      str += " "+this.children[x].val;
    }
    if (this.isWord){
      str += " - w";
    }
    console.log(str);
    for (var y in this.children){
      this.children[y].vomit();
    }
  };

  this.ListWordsStartingFrom = function(arr){
    if (arr === undefined){ arr = []; }
    if (this.isWord){ arr.push(this.val); }
    for (var c in this.children){
      this.children[c].ListWordsStartingFrom(arr);
    }
    return arr;
  };
}

function Trie(arr){
  this.root = new trieNode("");

  this.add = function(str){
    current = this.root;
    for (var l = 0; l < str.length; l++){
      var found = false;
      for (var i = 0; i < current.children.length; i++){
        if (str[l] == current.children[i].val[l]){
          found = true;
          current = current.children[i];
          break;
        }
      }
      if (!found){
        current.children.push( new trieNode(str.slice(0, l+1)) );
        current = current.children[current.children.length-1];
      }
    }
    current.isWord = true;
  };

  this.ListWordsStartingFrom = function(str){
    current = this.root;
    for (var l = 0; l < str.length; l++){
      var found = false;
      for (var i = 0; i < current.children.length; i++){
        if (str[l] == current.children[i].val[l]){
          found = true;
          current = current.children[i];
          break;
        }
      }
      if (!found){ return []; }
    }
    return current.ListWordsStartingFrom();
  };

  this.vomit = function(){
    this.root.vomit();
  };

  // init
  if (arr !== undefined){
    for (var w in arr){
      this.add(arr[w]);
    }
  }
}

var arr = ['cat', 'cats', 'carbon','cell','chill'];
var trie = new Trie(arr);
console.log(trie.ListWordsStartingFrom("s"));
