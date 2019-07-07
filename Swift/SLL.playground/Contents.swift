//: Playground - noun: a place where people can play

import UIKit


class SLNode {
    var value:Int
    var next:SLNode?
    
    init(_ value: Int) {
        self.value = value
    }
}

var node = SLNode(3)


class SLL {
    var head: SLNode?
    
    func add(_ value: Int) -> SLL {
        let newNode = SLNode(value)
        if var runner = head {
            while runner.next != nil {
                runner = runner.next!
            }
            runner.next = newNode
        } else {
            head = newNode
        }
        return self
    }
    
    func remove(byValue value: Int) -> Bool {
        if var runner = head {
            if runner.value == value {
                head = head!.next
                return true
            } else {
                while runner.next != nil {
                    if runner.next!.value == value {
                        runner.next = runner.next!.next
                        return true
                    } else {
                        runner = runner.next!
                    }
                }
            }
        }
        return false
    }
    
    func show() -> SLL {
        var str = "head -> "
        var runner = self.head
        while runner != nil {
            str += "\(runner!.value) -> "
            runner = runner!.next
        }
        
        str += "nil"
        print(str)
        return self
    }
}

let sll = SLL()
sll.add(4).add(8).add(2)
sll.remove(byValue: 2)
sll.show()





