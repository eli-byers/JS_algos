function Node(val) {
  this.value = val;
  this.next = null;
}


function SLL(val){
  this.head = null;

  //======================================
  //               PUSH
  //======================================
  this.pushVal = function(val) {
    if (this.head === null) {
      this.head = new Node(val);
    } else {
      var current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    }
    return this;
  };

  this.push = function(val){
    if (val instanceof Array){
      for (var i in val) {
        this.pushVal(val[i]);
      }
    }
    else {
      this.pushVal(val);
    }
  };

  this.pushFront = function(val){
    var head = this.head;
    this.head = new Node(val);
    this.head.next = head;
    return this;
  };

  //======================================
  //               POP
  //======================================
  this.pop  = function () {
    var val = null;
    if (this.head === null) {
      return val;
    } else if (this.head.next === null){
      val = this.head.value;
      this.head = null;
    } else {
      var current = this.head;
      while(current.next.next) {
        current = current.next;
      }
      val = current.next.value;
      current.next = null;
    }
    return val;
  };

  this.popFront = function(){
    if (this.head !== null){
      var head = this.head.value;
      this.head = this.head.next;
      return head;
    }
    return null;
  };

  //======================================
  //               REMOVE
  //======================================
  this.removeVal = function(val) {
    this.length -= 1;
    if(this.head.value == val) {
      this.head = this.head.next;
    } else {
      var current = this.head;
      while(current.next.value != val && current.next) {
        current = current.next;
      }
      if (current.next !== null){
        temp = current.next.next;
        current.next = temp;
      }
    }
    return this;
  };

  //======================================
  //               ATTR
  //======================================
  this.length = function(){
    var count = 0;
    var current = this.head;
    if (current){
      count ++;
      while (current.next){
        current = current.next;
        count ++;
      }
    }
    return count;
  };

  this.find = function (val) {
    var current = this.head;
    while(current !== null) {
      if(current.value == val) {
        return current;
      }
      current = current.next;
    }
    return false;
  };

  this.contains = function (val) {
    var current = this.head;
    while(current !== null) {
      if(current.value == val) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  this.isEmpty = function () {
    if (this.head) {
      return FALSE;
    } else {
      return TRUE;
    }
  };

  this.isCircular = function(){
    if (this.head) {
      var slow = this.head;
      var fast = this.head;
      while (fast.next) {
        fast = fast.next;
        if (fast == slow || fast.next == slow) return true;
        fast = fast.next;
        slow = slow.next;
      }
    }
    return false;
  };

  //======================================
  //               VIEW
  //======================================
  this.print = function () {
    var current = this.head;
    var str = "";
    while(current) {
      str += current.value+" -> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
    return this;
  };

  this.string = function () {
    var current = this.head;
    var str = "";
    while(current) {
      str += current.value;
      current = current.next;
      if (current){ str += " > "; }
    }
    return str;
  };

  // init
  //===========================================
  if (val){
    this.push(val);
  }
}

module.exports = {
  SLL: SLL
};
