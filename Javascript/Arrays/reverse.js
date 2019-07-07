

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
}

var arr = [5,4,3,2,1]
reverse(arr)
console.log(arr);

