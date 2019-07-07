class Solution(object):
    # def maxSlidingWindow(self, nums, k):
    #     """
    #     :type nums: List[int]
    #     :type k: int
    #     :rtype: List[int]
    #     """
    #     if not nums:
    #         return []

    #     n = len(nums)
    #     mat = [[ 0 for _ in range(n+1)] for _ in range(k+1)]
    #     for y in range(1, k+1):
    #         for x in range(y, n+1):
    #             if y == 1:
    #                 mat[y][x] = nums[x-1];
    #             else:
    #                 mat[y][x] = max(mat[y-1][x], mat[y-1][x-1])

    #     # for row in mat:
    #     #     print(row)

    #     return mat[-1][k:]

    # def maxSlidingWindow(self, nums, k):
        # for _ in range(1, k):
        #     for x in range(len(nums)-1):
        #         nums[x] = max(nums[x], nums[x+1])
        #     nums.pop()
        # return nums

    def maxSlidingWindow(self, nums, k):
        if not nums:
            return []
        if k <= 1:
            return nums

        ret = []
        maxVal = None
        maxIdx = -1
        for j in range(k, len(nums)):
            if maxIdx < j - k:
                maxIdx = j - k
                maxVal = nums[maxIdx]
                for l in range(maxIdx,maxIdx+k-1):
                    if nums[l] > maxVal:
                        maxVal = nums[l];
                        maxIdx = l

            if nums[j] > maxVal:
                maxVal = nums[j];
                maxIdx = j

            ret.append(maxVal)

        return ret


#    1   3  -1  -3   5   3   6   7
#---------------------------------
#  1 1   3  -1  -3   5   3   6   7
#  2     3   3  -1   5   5   6   7
#  3         3   3   5   5   6   7
#  4             3   5   5   6   7
#  5                 5   5   6   7
#  6                     5   6   7
#  7                         6   7
#  8                             7

#    9   2   5   5   0   1   6   2
#   ___.___.___.___


#    9   2   5   5   0   1   6   2
#---------------------------------
#  1 9   2   5   5   0   1   6   2
#  2     9   5   5   5   1   6   2
#  3         9   5   5   5   6   2
#  4 ````````````9   5   5   6   6
#  5                 9   5   6   6
#  6                     9   6   6
#  7                         9   6
#  8                             9


nums = [1,3,-1,-3,5,3,6,7]
k = 3
print(Solution().maxSlidingWindow(nums, k))
