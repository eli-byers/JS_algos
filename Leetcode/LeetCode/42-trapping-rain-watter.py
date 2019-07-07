class Solution(object):

    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        if not height or len(height) < 3:
            return 0

        water = 0
        lPeak = 0
        rPeak = len(height) - 1

        while lPeak < rPeak and height[lPeak] < height[lPeak + 1]:
            lPeak += 1
        while rPeak >= lPeak and height[rPeak] < height[rPeak - 1]:
            rPeak -= 1

        if lPeak == rPeak:
            return 0

        l = lPeak
        r = rPeak
        while l < r:
            if height[rPeak] <= height[lPeak]:
                r -= 1
                if height[r] < height[rPeak]:
                    water += height[rPeak] - height[r]
                else:
                    rPeak = r
            else:
                l += 1
                if height[l] < height[lPeak]:
                    water += height[lPeak] - height[l]
                else:
                    lPeak = l

        return water


# 0  1  2  3  4  5  6  7
#         [ ]
#         [ ] # [ ]
#   [ ] # [ ] # [ ]
#   [ ] # [ ] # [ ] # [ ]
#   [ ] # [ ] # [ ] # [ ]
#   [ ][ ][ ] # [ ] # [ ]
#[ ][ ][ ][ ][ ][ ][ ][ ]
#[ ][ ][ ][ ][ ][ ][ ][ ]
#========================
# 2  6  3  8  2  7  2  5  0]
# water 11
height = [2,6,3,8,2,7,2,5,0]
print(Solution().trap(height) == 11)

#                  [ ]
#      [ ] #  #  # [ ][ ] # [ ]
#[ ] # [ ][ ] # [ ][ ][ ][ ][ ][ ]
#=================================
# 1  0  2  1  0  1  3  2  1  2  1
#  water 6
height = [0,1,0,2,1,0,1,3,2,1,2,1]
print(Solution().trap(height) == 6)

#[ ] #  #  #  # [ ]
#[ ] #  #  #  # [ ]
#[ ] #  #  #  # [ ]
#[ ][ ] # [ ] # [ ]
#[ ][ ][ ][ ][ ][ ]
#==================
# 5  2  1  2  1  5]
# water 14
height = [5,2,1,2,1,5]
print(Solution().trap(height) == 14)

#[ ]
#[ ] # [ ][ ]
#[ ] # [ ][ ]
#[ ][ ][ ][ ] # [ ]
#[ ][ ][ ][ ][ ][ ]
#[ ][ ][ ][ ][ ][ ]
#[ ][ ][ ][ ][ ][ ][ ]
#[ ][ ][ ][ ][ ][ ][ ]
#[ ][ ][ ][ ][ ][ ][ ]
#=====================
# 9  6  8  8  5  6  3]
# water 3
height = [9,6,8,8,5,6,3]
print(Solution().trap(height) == 3)
