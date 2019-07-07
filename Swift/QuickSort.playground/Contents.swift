//: Playground - noun: a place where people can play

import UIKit

func quickSort(arr: inout [Int], start s: Int? = nil, end e: Int? = nil) -> [Int] {
    var s = s
    var e = e
    
    
    if s == nil {
        s = 0
        e = arr.count-1
    }
    let end = e!
    let start = s!
    
    // base-case
    if start >= end { return arr }
    
    // small step toward goal
    let pivot = arr[start]
    var i = start
    for j in start+1...end {
        if arr[j] < pivot {
            i += 1
            arr.swapAt(i, j)
        }
    }
    arr.swapAt(start, i)
    
    // recursive calls
    // left
    quickSort(arr: &arr, start: start, end: i-1)
    // right
    quickSort(arr: &arr, start: i+1, end: end)
    
    return arr
}


var x = [1,5,9,0, -4, 3, 2, 7]
quickSort(arr: &x)




