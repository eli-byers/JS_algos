//: Playground - noun: a place where people can play

import UIKit


class SLQNode<T> {
    var value: T
    var next: SLQNode?
    
    init(_ value: T) {
        self.value = value
    }
}

class SLQ<T> {
    var head: SLQNode<T>?
    var tail: SLQNode<T>?
    
    func enqueue(_ value: T) -> Self {
        var node = SLQNode(value)
        // no head
        if head == nil {
            head = node
            tail = node
        }
        // yes head
        else {
            tail?.next = node
            tail = tail?.next
        }
        return self
    }
    
    func dequeue() -> T? {
        var val:T? = nil
        if head == nil {
            return nil
        }
        else if head === tail {
            val = head!.value
            head = nil
            tail = nil
        }
            
        else {
            val = head!.value
            head = head?.next
        }
        return val
    }
    
    func show() -> Self {
        var str = "Head -> "
        var cur = head
        while cur != nil {
            
            if cur === tail {
                str += "tail:\(cur!.value) -> "
            }
            else {
                str += "\(cur!.value) -> "
            }
            cur = cur?.next
        }
        str += "nil"
        print(str)
        return self
    }
}

var q = SLQ<Int>()
q.enqueue(4).enqueue(3).enqueue(2).dequeue()
q.show().enqueue(1).dequeue()
q.show().dequeue()
q.show().dequeue()
q.show()
