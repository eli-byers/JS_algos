
class DLL:
    def __init__(self):
        self.head = None
        self.tail = None

    def prepend(self, val):
        node = DLNode(val)
        if not self.head:
            self.head = self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
        return self
    
    def append(self, val):
        node = DLNode(val)
        if not self.head:
            self.head = self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        return self

    # assuming there are no duplicates
    def remove(self, val):
        if self.head:
            # I have at least 1 node
            if self.head.value == val:
                if not self.head.next:
                    self.head = self.tail = None
                else:
                    self.head = self.head.next
            elif self.tail.value == val:
                # know there are at least 2 nodes
                self.tail.prev.next = None
                self.tail = self.tail.prev
            else:
                cur = self.head
                while cur.next:
                    if cur.value == val:
                        cur.next.prev = cur.prev
                        cur.prev.next = cur.next
                        break
                    cur = cur.next

        return self

    def show(self):
        out = "None <-> "
        cur = self.head
        while cur:
            out += "{} <-> ".format(cur.value)
            cur = cur.next
        out += "None"
        print(out)
        return self




class DLNode:
    def __init__(self, val):
        self.value = val
        self.next = None
        self.prev = None

dll = DLL()

dll.append(4).append(5).prepend(3).show()
dll.remove(3).show()
dll.remove(5).show()
dll.remove(4).show()