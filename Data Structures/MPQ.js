function Node(index, virt) {
  this.value = virt;
  this.index = index;
  this.next = null;
  this.prev = null;
}
Node.prototype.enqueue = function(node){
  if (this.next){
    if (node.value[0] < this.next.value[0]){
      this.next.prev = node;
      node.next = this.next;
      this.next = node;
      node.prev = this;
      return true;
    } else {
      return this.next.enqueue(node);
    }
  }
  return false;
};
Node.prototype.sort = function(){
  value = this.value;
  index = this.index;
  if (this.prev && this.value[0] < this.prev.value[0]){
    this.value = this.prev.value;
    this.index = this.prev.index;
    this.prev.value = value;
    this.prev.index = index;
    this.prev.sort();
  } else if (this.next && this.value[0] > this.next.value[0]){
    this.index = this.next.index;
    this.value = this.next.value;
    this.next.value = value;
    this.next.index = index;
    this.next.sort();
  }
};

function Queue(){
  this.head = null;
  this.tail = null;
}
Queue.prototype.update = function(index, virt){
  var cur = this.head;
  while (cur){
    if (index == cur.index){
      cur.value = virt;
      cur.index = index;
      cur.sort();
    }
    cur = cur.next;
  }
};
Queue.prototype.enqueue = function(index, virt){
  var node = new Node(index, virt);
  if (this.head){
    if (virt[0] < this.head.value[0]){
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else if (!this.head.enqueue(node)){
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  } else{
    this.head = node;
    this.tail = node;
  }
  return this;
};
Queue.prototype.dequeue = function(){
  var virt = this.head;
  if (virt){
    virt = {vert: this.head.value, index: this.head.index};
    if (this.head.next) this.head.next.prev = null;
    this.head = this.head.next;
  }
  if(!this.head) this.tail = null;
  return virt;
};
Queue.prototype.print = function(print){
  var cur = this.head;
  var str = "";
  while(cur) {
    str += cur.value[0]+"-"+cur.index;
    cur = cur.next;
    if (cur){ str += " > "; }
  }
  if (print !== false){
    console.log(str);
  }
  return str;
};

module.exports = {
  MPQ: Queue
};
