
class SLL:
    def __init__(self):
        self.root = None

    def add(self, val):
        node = SLNode(val)

        if not self.root:
            self.root = node
        else:
            cur = self.root
            while cur.next:
                cur = cur.next
            cur.next = node
        return self

    def show(self):
        out = "ROOT -> "
        cur = self.root
        while cur:
            out += "{} -> ".format(cur.value)
            cur = cur.next
        out += 'None'
        print(out)
        return self

    def doubleValues(self):
        cur = self.root
        while cur:
            cur.value *= 2
            cur = cur.next
        return self

    def removeNegatives(self):
        # remove values at the root
        while self.root and self.root.value < 0:
            self.root = self.root.next

        if self.root:
            cur = self.root
            while cur.next:
                if cur.next.value < 0:
                    cur.next = cur.next.next
                else:
                    cur = cur.next

        return self

    # iterative
    def len(self):
        count = 0
        cur = self.root
        while cur:
            count += 1
            cur = cur.next
        return count

    # recusive
    def length(self):
        return 0 if not self.root else self.root.length()

    def hasLoop(self):
        fast = self.root
        slow = self.root

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return True

        return False



class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

    # recusive
    def length(self):
        # return 1 if not self.next else 1 + self.next.length()
        if not self.next:
            return 1
        else:
            return 1 + self.next.length()



sllist = SLL()
sllist.add(2).add(3).add(4).doubleValues().show()
print(sllist.length())