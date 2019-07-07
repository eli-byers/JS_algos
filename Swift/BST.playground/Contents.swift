import UIKit



class BTNode<T> where T:Comparable {
    var value: T
    var left: BTNode<T>?
    var right: BTNode<T>?
    
    init(value: T) {
        self.value = value
    }
}

class BST<T> where T:Comparable {
    var root: BTNode<T>?
    
    func add(_ value: T) -> Bool {
        let node = BTNode<T>(value: value)
        guard var cur = self.root else {
            self.root = node
            return true
        }
        while true {
            if value == cur.value {
                return false
            }
            if value < cur.value {
                if cur.left == nil {
                    cur.left = node
                    return true
                }
                cur = cur.left!
            }
            else if value > cur.value {
                if cur.right == nil {
                    cur.right = node
                    return true
                }
                cur = cur.right!
            }
        }
    }
    
    func contains(_ value: T, insert: Bool = false) -> Bool {
        let node = BTNode<T>(value: value)
        guard var cur = self.root else {
            if insert {
                self.root = node
            }
            return false
        }
        while true {
            if value == cur.value {
                return true
            }
            if value < cur.value {
                if cur.left == nil {
                    if insert {
                        cur.left = node
                    }
                    return false
                }
                cur = cur.left!
            }
            else if value > cur.value {
                if cur.right == nil {
                    if insert {
                        cur.right = node
                    }
                    return false
                }
                cur = cur.right!
            }
        }
    }
}


var bst = BST<Int>()
bst.contains(5, insert: true)
bst.contains(7, insert: true)
bst.contains(6, insert: true)

bst.add(6)
bst.contains(5)

