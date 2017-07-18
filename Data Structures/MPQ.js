function MPQNode(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
}

MPQNode.prototype.enqueue = function(node){
    if (this.next){
        if (node.priority < this.next.priority){
            node.next = this.next;
            this.next = node;
        } else this.next.enqueue(node);
    } else this.next = node;
};

// ======================  Queue  =========================

function MPQ(){
  this.head = null;
}

MPQ.prototype.update = function(value, priority){
    found = false;
    if (this.head.value == value){
        this.head = this.head.next;
        found = true;
    } else {
        var current = this.head;
        while(current.next){
            if (value == current.next.value){
                current.next = current.next.next;
                found = true;
                break
            }
            current = current.next;
        }
    }
    if (found) this.enqueue(value, priority);
}

MPQ.prototype.enqueue = function(virt, priority){
    var node = new MPQNode(virt, priority);
    if (this.head){
        if (priority < this.head.priority){
            node.next = this.head;
            this.head = node;
        } else this.head.enqueue(node);
    } else this.head = node;
    return this;
};

MPQ.prototype.dequeue = function(){
    var node = this.head;
    if (node){
        node = {
            value: this.head.value, 
            priority: this.head.priority
        };
        this.head = this.head.next;
    }
    return node;
};

MPQ.prototype.print = function(){
    var cur = this.head;
    var str = "";
    while(cur) {
        str += cur.priority+":"+cur.value;
        cur = cur.next;
        if (cur){ str += " > "; }
    }
    console.log(str);
};


module.exports = {
    MPQ: MPQ
};

// var q = new MPQ();
// q.enqueue(0,5)
// q.enqueue(1,5)
// q.enqueue(2,3)
// q.enqueue(3,2)
// q.enqueue(4,Infinity)
// q.print()

// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// q.print()

// q.update(4,2);
// q.print();
