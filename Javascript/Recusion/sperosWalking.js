function sperosWalking(n, arr=[], curArr=[]){
    if (n >= 2) {
        let twoCur = curArr.slice(0);
        twoCur.push(2)
        sperosWalking(n - 2, arr, twoCur);
    }

    if (n >= 1) {
        curArr.push(1);
        sperosWalking(n - 1, arr, curArr);    
    }

    if (n == 0){
        arr.push(curArr);
    }

    return arr;
}





for (var index = 0; index < 10; index++) {
    
    console.log(sperosWalking(index).length);
}