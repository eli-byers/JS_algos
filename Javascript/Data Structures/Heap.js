Array.prototype.swapAt = function (x, y) {
    if (x >= this.length || y >= this.length) return false;
    [this[x], this[y]] = [this[y], this[x]];
    return true;
}

class MinHeap {
    constructor(arr = []) {
        this.heapify(arr);
    }

    size() {
        return this.arr.length - 1;
    }

    isEmpty() {
        return this.arr.length == 1;
    }

    insert(val) {
        let arr = this.arr;
        let idx = arr.length;
        arr.push(val);
        while (idx > 1) {
            let pIdx = Math.floor(idx / 2);
            if (arr[pIdx] > arr[idx]) {
                arr.swapAt(pIdx, idx)
            } else {
                break;
            }
            idx = pIdx;
        }
        return this;
    }

    extract() {
        let arr = this.arr;
        let minVal = arr[1] ? arr[1] : null;
        if (arr.length == 1) return minVal;
        arr.swapAt(1, arr.length - 1);
        arr.pop();
        this.shiftDown(1);
        return minVal;
    }

    heapify(arr) {
        arr.push(0)
        arr.swapAt(0, arr.length - 1);
        if (arr.length <= 2) {
            this.arr = arr;
            return this;
        }
        this.arr = arr;
        for (var idx = arr.length / 2; idx >= 1; idx--) {
            this.shiftDown(idx)
        }
        this.arr = arr;
    }

    shiftDown(i, offset = false) {
        let idx = offset ? 1 : i;
        let arr = this.arr;
        while (idx * 2 < arr.length) {
            let lIdx = idx * 2 + i;
            let minIdx = lIdx;
            if ((idx * 2) + 1 < arr.length) {
                let rIdx = (idx * 2) + 1 + i;
                minIdx = arr[lIdx] < arr[rIdx] ? lIdx : rIdx;
            }
            if (arr[idx] > arr[minIdx]) {
                arr.swapAt(minIdx, idx);
            }
            idx = minIdx;
        }
    }

    static sort(arr) {
        if (arr.length < 2) return arr;
        let heap = new MinHeap(arr);
        for (var i = 1; i < arr.length - 1; i++) {
            heap.arr.swapAt(i - 1, i);
            heap.shiftDown(i + 1)
        }
        heap.arr.pop();
        return arr;
    }

}

// let heap = new MinHeap();
// heap.insert(5).insert(4).insert(3).insert(2).insert(1).insert(6);
// heap.heapify([5,4,3,2,1,6,1,7,8,-5,3]);
// console.log(heap.arr);

let arr = [5, 4, 3, 2, 1, 6, 1, 7, 8, -5, -3];
MinHeap.sort(arr)
console.log(arr);



