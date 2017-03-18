Array.prototype.swap = function(x,y){
    let temp = this[x];
    this[x] = this[y];
    this[y] = temp;
}

function MergeSort(arr, start, end){
    if (start == undefined) { start = 0; end = arr.length-1; }
    if ((end - start) <  1) return arr;
    let mid = Math.floor((start + end) / 2);
    MergeSort(arr, start, mid);
    MergeSort(arr, mid + 1, end);
    return inplaceCombine(arr, start, mid, mid+1, end);
}

function inplaceCombine(arr, s1, e1, s2, e2){
    while(s1 <= e1 || s2 < e2){
        if (s1 <= e1){
            if (arr[s1] > arr[s2]){
                arr.swap(s1,s2)
                let ts2 = s2
                while(ts2 < e2 && arr[ts2] > arr[ts2+1]){
                    arr.swap(ts2, ts2+1)
                    ts2++;
                }
            }
            s1++;
        } else {
            if (arr[s2] > arr[s2+1]) arr.swap(s2, s2+1)
            s2++;
        }
    }
    return arr;
}

var arr = [6,3,4,7,2,1,9,11,8,5,10];
console.log(MergeSort(arr));