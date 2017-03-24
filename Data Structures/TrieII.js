// -----------------------------------------------------------
//                           TrieNode
// -----------------------------------------------------------
function TrieNode(value){
    this.value = value;
    this.isWord = false;
    this.children = [];
}

// ----------------------   Insert   ------------------------
TrieNode.prototype.addChild = function(value){
    var newNode = new TrieNode(value);
    this.children.push(newNode)
    return this.children[this.children.length-1];
}
TrieNode.prototype.insert = function(str, idx){
    if (idx === undefined) idx = 0;
    var nextNode = null;
    if (this.children.length === 0){
        nextNode = this.addChild(str[idx])
    } else {
        for (var i = 0; i < this.children.length; i++){
            if (this.children[i].value == str[idx]){
                nextNode = this.children[i];
                break;
            }
        }
        if (!nextNode) nextNode = this.addChild(str[idx]);
    }
    if (idx < str.length-1) return nextNode.insert(str,++idx);
    else {
        if (nextNode.isWord) return false;
        else return nextNode.isWord = true;
    }
}

// ------------   ListWordsStartingFrom   -----------------
TrieNode.prototype.findNode = function(str, idx){    
    if (idx === undefined) idx = 0;
    else idx += 1;
    if (idx >= str.length) return this;
    for(var i = 0; i < this.children.length; i++){        
        if (str[idx] == this.children[i].value) {
            return this.children[i].findNode(str, idx)
        }
    }
    return null;
}
TrieNode.prototype.findWords = function(str, words){
    str += this.value;
    if (this.isWord) words.push(str);
    for(var i = 0; i < this.children.length; i++){
        this.children[i].findWords(str,words);
    }
}


// -----------------------------------------------------------
//                          Trie
// -----------------------------------------------------------

function Trie(arr){
    this.root = new TrieNode("");
}

Trie.prototype.insert = function(val){
    if (val == "" || val == []) return false;
    if (val.constructor == Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++){
            ret.push(this.root.insert(val[i]));
        }
        return ret
    } else {
        return this.root.insert(val);
    }
};

Trie.prototype.ListWordsStartingFrom = function(str){
    var words = [];
    if (str === undefined || str == ""){
        this.root.findWords("", words);
    } else {
        node = this.root.findNode(str);
        st = str.slice(0,str.length-1)
        if (node) node.findWords(st, words);
    }
    return words;
}



var words = ["cat", "catch", "call", "care", "bob", "bobbers", "bear"]
var trie = new Trie();
trie.insert(words);
words_from_bo = trie.ListWordsStartingFrom("bo");
words_from_ca = trie.ListWordsStartingFrom("ca");
console.log(words_from_bo);
console.log(words_from_ca);