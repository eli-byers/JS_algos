var l = require("./SLL.js");

String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++){
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash &= hash;
    }
    return hash;
}

function mod(input, div){
    return (input % div + div) % div;
}

function HashMap(capacity){
    this.capacity = capacity;
    this.table = []
    this.keyCount = 0;
}
HashMap.prototype.add = function(key, value){
    let hash = key.hashCode();
    let idx = mod(hash, this.capacity);    
    if (this.table[idx] === undefined){
        this.table[idx] = new l.SLL();
        this.table[idx].push([key, value]);
        this.keyCount += 1;
    } else {
        let node = this.table[idx].find(x => x[0] == key);
        if (node) node.value[1] = value;
        else {
            this.table[idx].push([key, value])
            this.keyCount += 1;
        }
    }
    return this;
}
HashMap.prototype.isEmpty = function(){
    return this.keyCount == 0 ? true : false;
}
HashMap.prototype.findKey = function(key){
    let hash = key.hashCode();
    let idx = mod(hash, this.capacity);
    let val = null;
    if (this.table[idx]){
        let node = this.table[idx].find(x => x[0] == key);
        if (node) val = node.value[1];
    }
    return val;
}
HashMap.prototype.remove = function(key){
    let hash = key.hashCode();
    let idx = mod(hash, this.capacity);
    let val = null;
    if (this.table[idx]){
        let node = this.table[idx].remove(x => x[0] == key);
        if (node) {
            this.keyCount -= 1;
            val = node.value[1];
        }
    }
    return val;
}
HashMap.prototype.print = function(){
    for (let i in this.table){
        if (this.table[i]) this.table[i].print(
            x => x[0]+" : "+x[1]+"  ->  ", ""
        );
    }
    return this;
}


//=============================================================
// Test
//=============================================================

let map = new HashMap(2);
map.add("name", "bob");
map.add("age", 24);
map.add("street", "xanker");
map.add("food", "pizza");
map.add("nums", [1,3,5]);
map.add("nums", [10,30,0]);
map.add("age", 50);
map.remove("food")
map.remove("age")
map.remove("street")
map.add("fish","salmon")
map.print();
console.log(map.keyCount);
