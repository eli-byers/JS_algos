function Node(val) {
	this.value = val;
	this.next = null;
}

function SLL(){
	this.head = null;

	this.push  = function (val) {
		if (this.head == null) {
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

	this.pushArray = function(arr){
		for (var i in arr) {
			this.push(arr[i]);
		}
		return this;
	};

	this.pop  = function () {
		var val = null;
		if (this.head == null) {
			return val;
		} else if (this.head.next == null){
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

	this.removeVal = function (val) {
		this.length -= 1;
		if(this.head.value == val) {
			this.head = this.head.next;
		} else {
			var current = this.head;
			while(current.next.value != val && current.next) {
				current = current.next;
			}
			if (current.next != null){
				temp = current.next.next;
				current.next = temp;
			}
		}
		return this;
	};

	this.length(){
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
	}

	this.find = function (val) {
		var current = this.head;
		while(current != null) {
			if(current.value == val) {
				return current;
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
}
