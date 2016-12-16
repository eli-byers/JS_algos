function Node(val) {
  this.value = val;
  this.next = null;
}

function Queue(){
  this.head = null;
  this.tail = null;

  this.enqueue = function(val){
    var node = new Node(val);
    if (this.tail){
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.head = node;
      this.tail = node;
    }
    return this;
  };

  this.dequeue = function(val){
    var head = this.head;
    if (head){
      head = head.value;
      this.head = this.head.next;
    }
    if (!this.head){ this.tail = null; }
    return head;
  };

  //======================================
  //               VIEW
  //======================================
  this.print = function(print){
    var current = this.head;
    var str = "";
    while(current) {
      str += current.value;
      current = current.next;
      if (current){ str += " > "; }
    }
    if (print !== false){
      console.log(str);
    }
    return str;
  };
}

module.exports = {
  Queue: Queue
};
