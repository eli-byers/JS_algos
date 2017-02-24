function btNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

	btNode.prototype.count = function(){
		var left = 0, right = 0;
		if(this.left !== null){ left = this.left.count(); }
		if(this.right !== null){ right = this.right.count(); }
		return 1 + left + right;
	};

	btNode.prototype.valid = function(){
		var left = true, right = true;
		if(this.left !== null){
			if (this.left.val > this.val){ return false; }
			left = left && this.left.valid();
		}
		if(this.right !== null){
			if (this.right.val < this.val){ return false; }
			right = right && this.right.valid();
		}
		return left && right;
	};

	btNode.prototype.maxHeight = function(){
		var L = 0, R = 0;
		if (this.left){ L = this.left.maxHeight(); }
		if (this.right){ L = this.right.maxHeight(); }
		return 1 + (L > R ? L : R);
	};

	btNode.prototype.minHeight = function(){
		var L = 0, R = 0;
		if (this.left){ L = this.left.minHeight(); }
		if (this.right){ R = this.right.minHeight(); }
		return 1 + (L < R ? L : R);
	};

	// using max and min height
	btNode.prototype.isBalanced = function(){
		// break cases
		if (this.isLeaf() || this.isTwig()) return true;
		if (!this.right || !this.left) return false;
		// compair max to min
		var max = this.maxHeight();
		var min = this.minHeight();
		return max - min <= 1;
	};

	// using only maxHeight
	btNode.prototype.isBalancedII = function(){
		// break cases
		if (this.isLeaf() || this.isTwig()) return true;
		if (!this.right || !this.left) return false;
		// check height of children
		var R = this.right.maxHeight();
		var L = this.left.maxHeight();
		var balanced = (-1 <= R - L && R - L <= 1);
		if (!balanced) return false;
		// if this seems balanced check the children
		return this.left.isBalanced() && this.right.isBalanced();
	};

	// no children
	btNode.prototype.isLeaf = function(){
		return !this.right && !this.left;
	};

	// one child who is a leaf
	btNode.prototype.isTwig = function(){
		if (!this.right && this.left.isLeaf()) return true;
		if (!this.left && this.right.isLeaf()) return true;
		return false;
	};

	btNode.prototype.show = function (height) {
		if (this.left) this.left.show(height-1);
		var space = "   ";
		console.log(space.repeat(height-1),this.val);
		if (this.right) this.right.show(height-1);
	};

function BST(){
	this.root = null;
	var self = this;
}

	BST.prototype.isEmpty = function(){
		if (this.root === null){	return true; }
		return false;
	};

	BST.prototype.add = function(val, cur){
		if (this.isEmpty()){
			this.root = new btNode(val);
			return this;
		}
		if (cur === undefined){ cur = this.root; }
		if (val > cur.val){
			if(cur.right === null){
				cur.right = new btNode(val);
				return this;
			}
			cur = cur.right;
		} else if (val < cur.val){
			if(cur.left === null){
				cur.left = new btNode(val);
				return this;
			}
			cur = cur.left;
		} else { return val; }
		return this.add(val, cur);
	};

	BST.prototype.addArr = function(arr){
		for (var i in arr) { this.add(arr[i]); }
		return this;
	};

	BST.prototype.contains = function(val, cur){
		if (this.root === null) return false;
		if (cur === undefined){ cur = this.root; }
		if (val == cur.val){ return true; }
		if (val > cur.val){
			if (cur.right !== null ){ cur = cur.right; }
			else { return false; }
		} else if (val < cur.val){
			if (cur.left !== null ){	cur = cur.left; }
			else { return false; }
		}
		return this.contains(val, cur);
	};

	BST.prototype.min = function(cur){
		if(this.isEmpty()){ return null; }
		if(cur === undefined){ cur = this.root; }
		while (cur.left !== null){ cur = cur.left; }
		return cur.val;
	};

	BST.prototype.max = function(cur){
		if(this.isEmpty()){ return null; }
		if(cur === undefined){ cur = this.root; }
		while (cur.right !== null){ cur = cur.right; }
		return cur.val;
	};

	BST.prototype.size = function(){
		if (this.isEmpty()){ return 0; }
		return this.root.count();
	};

	BST.prototype.isValid = function(){
		if (this.isEmpty()){ return true; }
		return this.root.valid();
	};

	BST.prototype.remove = function (val, cur, parent) {
		if (this.isEmpty()){ return this; }
		if (this.root.val == val && cur === undefined){
			if (this.root.left && this.root.right){
				this.root.val = this.min(this.root.right);
				return this.remove(this.root.val, this.root.right, this.root);
			} else {
				this.root = this.root.left ? this.root.left : this.root.right;
				return this;
			}
		}
		if (cur === undefined){ cur = this.root;}
		if (cur === null){ return this; }
		if (val == cur.val){
			if (cur.left && cur.right){
				cur.val = this.min(cur.right);
				return this.remove(cur.val, cur.right, cur);
			} else if (parent.left == cur) {
				parent.left = cur.right ? cur.right : cur.left;
			} else if (parent.right == cur){
				parent.right = cur.right ? cur.right : cur.left;
			}
			return this;
		}
		parent = cur;
		cur = val < cur.val ? cur.left : cur.right;
		return this.remove(val, cur, parent);
	};

	BST.prototype.maxHeight = function(){
		return this.root ? this.root.maxHeight() : 0;
	};

	// using max and min height
	BST.prototype.isBalanced = function(){
		if (!this.root) return true;
		return this.root.isBalanced();
	};

	// only using max height
	BST.prototype.isBalancedII = function(){
		if (!this.root) return true;
		return this.root.isBalancedII();
	};

	BST.prototype.show = function(){
		if (!this.root) {
			console.log("Empty Tree");
			return this;
		}
		var height = this.maxHeight();
		console.log('----------------------');
		this.root.show(height);
		console.log('----------------------');
	};

var bst = new BST();
bst.addArr([5, 6, 7, 3, 4]);

// bst.show();

console.log("contains(4) true:", bst.contains(4));
console.log("contains(8) false:", bst.contains(8));
console.log("min 5:", bst.min());
console.log("max 7:", bst.max());
console.log("size 5:", bst.size());
console.log("isValid true:", bst.isValid());
//
bst.remove(3).show();
bst.remove(4).show();

console.log("isBalanced false:", bst.isBalanced());
bst.add(1).add(2).show();
console.log("isBalanced true:", bst.isBalanced());
