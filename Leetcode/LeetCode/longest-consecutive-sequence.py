class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0

        map = {}
        max = 1
        for num in nums:

            map[num] = map[num+1] + 1 if num+1 in map else 1

            num -= 1
            while num in map:
                map[num] = 1 + map[num+1]
                num -= 1
            else:
                if map[num+1] > max:
                    max = map[num+1]

        return max


print(Solution().longestConsecutive([100, 4, 200, 1, 3, 2]))