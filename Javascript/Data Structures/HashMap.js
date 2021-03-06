var SLL = require("./SLL.js").SLL;

String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash &= hash;
    }
    return hash;
}
function mod(input, div) {
    return (input % div + div) % div;
}

function HashMap(capacity) {
    this.capacity = capacity;
    this.table = []
    this.keyCount = 0;
}
HashMap.prototype.mod = function (hash) {
    return (hash % this.capacity + this.capacity) % this.capacity;
}
HashMap.prototype.add = function (key, value) {
    let hash = key.hashCode();
    let idx = this.mod(hash);
    if (this.table[idx] === undefined) {
        this.table[idx] = new SLL();
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
HashMap.prototype.isEmpty = function () {
    return this.keyCount == 0 ? true : false;
}
HashMap.prototype.findKey = function (key) {
    let hash = key.hashCode();
    let idx = this.mod(hash);
    let val = null;
    if (this.table[idx]) {
        let node = this.table[idx].find(x => x[0] == key);
        if (node) val = node.value[1];
    }
    return val;
}
HashMap.prototype.remove = function (key) {
    let hash = key.hashCode();
    let idx = this.mod(hash);
    let val = null;
    if (this.table[idx]) {
        let node = this.table[idx].remove(x => x[0] == key);
        if (node) {
            this.keyCount -= 1;
            val = node.value[1];
        }
    }
    return val;
}
HashMap.prototype.print = function () {
    for (let i = 0; i < this.capacity; i++) {
        if (this.table[i]) {
            // console.log( this.table[i] );
            this.table[i].print(x => "{" + x[0] + " : " + x[1] + "}  --  ", "")
        } else console.log("<udf>");
    }
    return this;
}
HashMap.prototype.keys = function () {
    let keys = [];
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            var current = this.table[i].head;
            while (current) {
                keys.push(current.value[0])
                current = current.next;
            }
        }
    }
    return keys;
}
HashMap.prototype.loadFactor = function () {
    let loadFactor = this.capacity * 0.75;
    return this.keyCount >= loadFactor;
}
HashMap.prototype.metaData = function () {
    let optimal = this.keyCount / this.capacity;
    let overOpt = 0;
    let max = 0;
    for (let i = 0; i < this.capacity; i++) {
        let bucket = this.table[i]
        if (bucket) {
            if (bucket.length > optimal) overOpt += bucket.length - optimal;
            if (bucket.length > max) max = bucket.length;
        }
    }
    overOpt = Math.round((overOpt / this.capacity) * 100) / 100
    console.log('optimal:', optimal, '  max:', max, '  overOpt:', overOpt);
}

HashMap.prototype.grow = function (size) {
    if (size != this.capacity) {
        let hook = new SLL();
        for (let i = 0; i < this.table.length; i++) {
            let list = this.table[i];
            if (list && !list.isEmpty()) {
                hook.concat(list);
            }
            this.table[i] = undefined;
        }
        this.capacity = size ? size : this.capacity * 2;
        let node = hook.popFront(true);
        while (node) {
            this.growAdd(node);
            node = hook.popFront(true);
        }
    }
    return this;
}

HashMap.prototype.growAdd = function (node) {
    if (node) {
        let hash = node.value[0].hashCode();
        let idx = this.mod(hash);

        // if there is nothing in the bucket, make SLL
        if (!this.table[idx]) this.table[idx] = new SLL();
        this.table[idx].push(node)
    }
    return this;
}

// // Work in Progress

// HashMap.prototype.growOld = function(){
//     let oldCap = this.capacity;
//     this.capacity *= 2;
//     for (let i = 0; i < oldCap; i++){
//         // if there is somehting in the bucket
//         if(this.table[i]){
//             // if it's not an Array - make parallell Array
//             if (this.table[i].constructor != Array){
//                 this.table[i] = [this.table[i], new SLL()];
//             }
//             // now is's an array - is there a list at [0]?
//             else if (this.table[i][0]){
//                 let node = this.table[i][0].popFront(true);
//                 while (node){
//                     this.growAdd(node);
//                     node = this.table[i][0].popFront(true);
//                 }
//             }
//         }
//     }
//     // flatten paralles Arrays
//     for (let i = 0; i < this.capacity; i++){
//         // if there is somehting in the bucket it's an array
//         if(this.table[i]){
//             // if there is not an SLL in [0], make bucket the SLL from [1]
//             if (!this.table[i][0]) {
//                 this.table[i] = this.table[i][1];
//             }
//             // if there is an SLL in [0] move over nodes and count
//             else {
//                 this.table[i][0].head = this.table[i][1].head;
//                 this.table[i][0].length = this.table[i][1].length;
//                 this.table[i] = this.table[i][0];
//             }
//         }
//     }

// }
// HashMap.prototype.growAddOld = function(node){
//     if (node){
//         let hash = node.value[0].hashCode();
//         let idx = this.mod(hash);
//         // if there is nothing in the bucket, make Array
//         if (!this.table[idx]){
//             this.table[idx] = [undefined, new SLL()];
//         }
//         // if it's an SLL, make Array 
//         else if (this.table[idx].constructor == SLL){
//             this.table[idx] = [this.table[idx], new SLL()];
//         }
//         // it's an Array, add to new SLL
//         this.table[idx][1].pushFront(node)
//     }
//     return this;
// }

// check for [undefined, SLL] case in first loop

//=============================================================
// Test
//=============================================================

function randomKey() {
    var text = "";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
    var possible = "abcdefghijklmnopqrstuvwxyz ";
    text += caps.charAt(Math.floor(Math.random() * caps.length));
    length = 4 + (Math.random() * 5);
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

let map = new HashMap(3);
let dict = {}
for (let i = 0; i < 6; i++) {
    let key = randomKey();
    dict[key] = true;
    map.add(key, true);

    map.print();
    console.log("--------------------------------------------------------");
}