function SLNode(val) {
	this.value = val;
	this.next = null;
}


function SLL(val, isArray){
	this.head = null;
	this.tail = null;
	this.count = 0;
	if (val){
		this.push(val, isArray);
	}
}

function makeCallback(val){
	if (typeof(val) != 'function'){
		callback = function(x){ return x == val; };
	} else callback = val;
	return callback;
}
//======================================
//               PUSH
//======================================
SLL.prototype.pushArr = function(arr){
	this.push(arr, true);
}

SLL.prototype.push = function(val, isArray) {
    if (isArray && val.constructor == Array){
		for (var i in val) {
			this.push(val[i]);
		}
	} else {
		let newNode = val.constructor == SLNode ? val : new SLNode(val);
        this.count += 1;
        if (this.head === null) {
            this.head = newNode;
			this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }
	return this;
};

SLL.prototype.pushFrontArr = function(arr){
	this.pushFront(arr, true);
}

SLL.prototype.pushFront = function(val, isArray){
    if (isArray && val.constructor == Array){
		for (var i in val) {
			this.pushFront(val[i]);
		}
	} else {
		this.count += 1;
		if (val.constructor != SLNode){
			node = new SLNode(val);
		} else node = val;
		node.next = this.head;
		this.head = node;
		if (!this.tail) this.tail = node;
	}
	return this;
};

SLL.prototype.insertBefore = function(val, before){
    let newNode = new SLNode(val);
    this.count += 1;
    if(this.head){
        if (this.head.value == before){
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next && current.next.value != before){
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
			if (!newNode.next) this.tail = newNode;
        }
    } else {
        this.head = newNode;
		this.tail = newNode;
    }
};

SLL.prototype.insertAfter = function(val, after){
    let newNode = new SLNode(val);
    this.count += 1;
    if(this.head){
        let current = this.head;
        while(current.next && current.value != after){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
		if (!newNode.next) this.tail = newNode;
    } else {
        this.head = newNode;
		this.tail = newNode;
    }
}

SLL.prototype.concat = function(list){
	if (this.head){
		if (list.head){
			this.tail.next = list.head;
			this.tail = list.tail;
			this.count += list.count;
		}
	} else {
		this.count = list.count;
		this.head = list.head;
		this.tail = list.tail;
	}
	return this;
}

//======================================
//               POP
//======================================
SLL.prototype.pop  = function (returnNode) {
	var val = null;
	if (this.head) {
		this.count -= 1;
		if (!this.head.next){
			val = returnNode ? this.head : this.head.val;
			this.head = null;
			this.tail = null;
		} else {
			var current = this.head;
			while(current.next.next) {
				current = current.next;
			}
			val = returnNode ? current.next : current.next.val;
			current.next = null;
			this.tail = current;
		}
	}
	return val;
};

SLL.prototype.popFront = function(returnNode){
	var val = null;
	if (this.head){
		val = returnNode ? this.head : this.head.value;
		this.head = this.head.next;
		if (!this.head) this.tail = null;
		if (returnNode) val.next = null;
		this.count -= 1;
	}
	return val;
};

//======================================
//               REMOVE
//======================================
SLL.prototype.remove = function(val) {
	callback = makeCallback(val);
	var node = null;
	if(callback(this.head.value)) {
		node = this.head;
		this.head = this.head.next;
		if (!this.head) this.tail = null;
	} else {
		var current = this.head;
		while(current.next && !callback(current.next.value)) {
			current = current.next;
		}
		if (current.next !== null){
			node = current.next
			current.next = current.next.next;
			if (!current.next) this.tail = current;
		}
	}
	if (node) this.count -= 1;
	return node;
};

//======================================
//               ATTR
//======================================
SLL.prototype.length = function(){
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

SLL.prototype.find = function (val) {
	callback = makeCallback(val);
	var current = this.head;
	while(current !== null) {
		if(callback(current.value)) {
			return current;
		}
		current = current.next;
	}
	return false;
};

SLL.prototype.contains = function (val) {
	callback = makeCallback(val);
	var current = this.head;
	while(current !== null) {
		if(callback(current.value)) return true;
		current = current.next;
	}
	return null;
};

SLL.prototype.isEmpty = function () {
	return this.head ? false : true;
};

SLL.prototype.clear = function(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}

SLL.prototype.isCircular = function(){
	if (this.head) {
		var slow = this.head;
		var fast = this.head;
		while (fast.next) {
			fast = fast.next;
			if (fast == slow) return true;
			fast = fast.next;
			slow = slow.next;
		}
	}
	return false;
};

//======================================
//               VIEW
//======================================
SLL.prototype.print = function (callback, end) {
	end = end !== undefined ? end : "<null>";
	callback = typeof(callback) == 'function' ? callback : function(x){
		return x+"  ->  ";		
	};	
	var current = this.head;
	var str = "";
	while(current) {
		str += callback(current.value);
		current = current.next;
	}
	str += end;
	console.log(str);
	return this;
};


module.exports = {
	SLL: SLL,
    SLNode: SLNode,
};


//=============================================================
// Test
//=============================================================

// var list = new SLL();
// var list2 = new SLL();
// list2.pushArr(['one', 'two','three']);
// // // console.log(list.constructor);


// list.push("Bob").push("Tim").push([1,2]).pushArr(["cat","dog"])
// console.log( list.count == list.length());
// list.print();
// list.concat(list2);
// list.print();

