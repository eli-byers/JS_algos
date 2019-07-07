class MyCalendarThree(object):

    def __init__(self):
        self.rangeList = None
        self.maxK = 0

    def book(self, start, end):
        c = EventRange(start, end)
        if not self.rangeList:
            self.rangeList = c
            self.maxK = 1
        else:
            curK = 1
            prevMax = []
            
            insertAfter = None
            prev = None
            r = self.rangeList
            while r and c.max > r.min:

                if not insertAfter and r.min > c.min:
                    insertAfter = prev
                    if not insertAfter:
                        insertAfter = True

                minInRange = c.min >= r.min and c.min < r.max
                surroundingRange = c.min <= r.min and c.max >= r.max
                maxInRange = c.max > r.min and c.max < r.max
                if minInRange or surroundingRange or maxInRange:
                    curK += 1
                    prevMax.append(r.max)
                    
                # remove counters for previous ended ranges
                prevMax.sort(reverse=True)
                while len(prevMax):
                    if prevMax[-1] <= r.min:
                        prevMax.pop()
                        curK -= 1
                    else:
                        break

                if curK > self.maxK:
                    self.maxK = curK
                    
                prev = r
                r = r.next
            
            insertAfter = insertAfter or prev
            if insertAfter == True or not insertAfter:
                c.next = self.rangeList
                self.rangeList = c
            else:
                c.next = insertAfter.next
                insertAfter.next = c
        
        return self.maxK
        
        
class EventRange(object):
    
    def __init__(self, start, end):
        self.min = start
        self.max = end
        self.next = None
        
    def show(self):
        print "{} {} -> ".format(self.min, self.max)
        if self.next:
            self.next.show()


obj = MyCalendarThree()
print obj.book()
# print obj.book(50, 60)
# print obj.book(10, 40)
# print obj.book(5, 15)
# print obj.book(5, 10)
# print obj.book(30, 40)
# print obj.book(25, 55)


# obj.rangeList.show()





