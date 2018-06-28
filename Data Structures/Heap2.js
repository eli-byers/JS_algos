// [undefined, 7, 6, 5,4,3,2,1,7,8,9]

// Children of n
// n = 3
// n * 2
// (n * 2) + 1

// Parrent of m
// m = 10
// Math.floor(m / 2)


class MinHeap {
    constructor(){
        this.arr = [undefined];
    }

    insert(val){
        console.time("timer");
        let arr = this.arr;
        let curIdx = arr.length;
        let parIdx = Math.floor(curIdx / 2);
        arr.push(val);
        while (curIdx > 1 && arr[parIdx] > arr[curIdx]) {
            [arr[parIdx], arr[curIdx]] = [arr[curIdx], arr[parIdx]];
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
        console.timeEnd("timer");
        return this;
    }

    remove(){
        let arr = this.arr;
        if (arr.length == 1) return null;

        [arr[1], arr[arr.length-1]] = [arr[arr.length-1], arr[1]];
        let min = arr.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = leftIdx + 1;

        while(arr[curIdx] > arr[leftIdx] || arr[curIdx] > arr[rightIdx]){
            
            // variable = bool ? if true : if false;
            // let nextIdx = arr[leftIdx] < arr[rightIdx] ? leftIdx : rightIdx;
            let nextIdx = 0;
            if (arr[leftIdx] < arr[rightIdx] || rightIdx >= arr.length){
                nextIdx = leftIdx;
            } else {
                nextIdx = rightIdx;
            }
    
            [arr[curIdx], arr[nextIdx]] = [arr[nextIdx], arr[curIdx]];
            
            curIdx = nextIdx;
            leftIdx = curIdx * 2;
            rightIdx = leftIdx + 1;
        }
        return min;
    }

    heapify(arr){
        // add undefined to the start
        // break out early if its empty or one item
        // start at last parrent -- Math.floor((len-1)/2)
        
        // for every parrent starting from last parrent stop at 1
            // if larger then kids
                // swap with smaller kid
    }

    heapSort(){
        // heapify
        // make new array
        // remove from heap and push into array until heap is empty
    }
}

const heap = new MinHeap();

for (var index = 1000; index >= 0; index--) {
    heap.insert(index);
}

console.log(heap.arr);
