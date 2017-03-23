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
HashMap.prototype.mod = function(hash){
    return (hash % this.capacity + this.capacity) % this.capacity;
}
HashMap.prototype.add = function(key, value){
    let hash = key.hashCode();
    let idx = this.mod(hash);    
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
    if (this.loadFactor()) this.grow();
    return this;
}
HashMap.prototype.isEmpty = function(){
    return this.keyCount == 0 ? true : false;
}
HashMap.prototype.findKey = function(key){
    let hash = key.hashCode();
    let idx = this.mod(hash);
    let val = null;
    if (this.table[idx]){
        let node = this.table[idx].find(x => x[0] == key);
        if (node) val = node.value[1];
    }
    return val;
}
HashMap.prototype.remove = function(key){
    let hash = key.hashCode();
    let idx = this.mod(hash);
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
    for (let i = 0; i < this.capacity; i++){
        if (this.table[i]){ 
            this.table[i].print(x => "{"+x[0]+" : "+x[1]+"}  --  ") 
        } else console.log("<undefined>");
    }
    return this;
}
HashMap.prototype.loadFactor = function(){
    let loadFactor = this.capacity / 0.75;
    return this.keyCount >= loadFactor;   
}
HashMap.prototype.metaData = function(){
    let optimal = this.keyCount/this.capacity;
    let overOpt = 0;
    let max = 0;
    for (let i = 0; i < this.capacity; i++){
        let bucket = this.table[i]
        if (bucket) {
            if (bucket.length > optimal) overOpt += bucket.length - optimal;
            if (bucket.length > max)       max  = bucket.length;
        }
    }
    overOpt = Math.round((overOpt / this.capacity) * 100) / 100
    console.log('optimal:', optimal, '  max:', max, '  overOpt:', overOpt);
}
HashMap.prototype.grow = function(){
    let oldCap = this.capacity;
    this.capacity = Math.floor(this.capacity * 2);
    for (let i = 0; i < oldCap; i++){
        if(this.table[i]){
            if (this.table[i].constructor == l.SLL){
                this.table[i] = [this.table[i], new l.SLL()];
            }
            if (this.table[i][0]){
                let current = this.table[i][0].head;
                while(current){
                    let node = this.table[i][0].popFront(true);
                    this.growAdd(node);
                    current = current.next;
                }
            }
        }
    }
    for (let i = 0; i < this.capacity; i++){
        if(this.table[i]){
            if (!this.table[i][0]) this.table[i][0] = this.table[i][1]
            else if(this.table[i][1]) this.table[i][0].head = this.table[i][1].head;
            this.table[i] = this.table[i][0];
        } 
    }

}
HashMap.prototype.growAdd = function(node){
    if (node){
        let hash = node.value[0].hashCode();
        let idx = this.mod(hash);
        if (!this.table[idx]){
            this.table[idx] = [undefined, new l.SLL()];
        } else if (this.table[idx].constructor == l.SLL){
            this.table[idx] = [this.table[idx], new l.SLL()];
        }
        this.table[idx][1].pushFront(node)
    }
    return this;
}


//=============================================================
// Test
//=============================================================

function makeKey() {
    var text = "";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var possible = "abcdefghijklmnopqrstuvwxyz";
    text += caps.charAt(Math.floor(Math.random() * caps.length));
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

let map = new HashMap(16);
for (let i = 0; i < 50; i++){ map.add(makeKey(), i); }
map.print();
console.log(map.capacity);
