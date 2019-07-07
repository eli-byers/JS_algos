class Solution(object):

    def findSeeds(self, s):
        seeds = []
        for i in range(len(s) - 1):
            if s[i] + s[i+1] == '()':
                if seeds and seeds[-1][1] == i - 1:
                    seeds[-1][1] = i+1
                else:
                    seeds.append([i,i+1])
        return seeds

    def notverygood(self, s, map=None, l=None, r=None):
        """
        :type s: str
        :rtype: int
        """
        if len(s) < 2:
            return 0

        seeds = self.findSeeds(s)
        if not seeds:
            return 0

        i = 0
        while i < len(seeds):
            (l, r) = seeds[i]

            # grow
            if l > 0 and r < len(s) - 1 and s[l-1]+s[r+1] == '()':
                seeds[i] = [l-1, r+1]

                # merge left
                if i > 0 and seeds[i][0] - 1 == seeds[i-1][1]:
                    seeds[i][0] = seeds[i-1][0]
                    seeds.pop(i-1)
                    i -= 1

                # merge right
                if i < len(seeds) - 1 and seeds[i][1] + 1 == seeds[i+1][0]:
                    seeds[i][1] = seeds[i+1][1]
                    seeds.pop(i+1)

            else:
                i += 1

        max = seeds[0][1] - seeds[0][0]
        for i in range(1, len(seeds)):
            if seeds[i][1] - seeds[i][0] > max:
                max = seeds[i][1] - seeds[i][0]

        return max + 1



        # )()((()()())()()))(
        # 1,2
        # 5,10
        # 12,15
        # -- ------------
        # 1,2
        # 4,11
        # 12,15
        # -- ------------
        # 1,2
        # 4,15
        # ----------------
        # 1,2
        # 3,16
        # ----------------
        # 1,16 => 15


        # if map is None:
        #     l = 0
        #     r = len(s) - 1
        #     map = self.genMap(s)

        # difference = map['('] - map[')']
        # if difference == 0 and self.valid(s, l, r):
        #     return l - r

        # for d in range(difference):
        #     tempMap = map.copy()
        #     for lDif in d:
        #         paren = s[l + lDif]
        #         tempMap[paren] -= 1
        #     for rDif in difference - d:
        #         paren = s[r - rDif]
        #         tempMap[paren] -= 1
        #     newDif =
        #     if self.valid(s, l + d, r - (difference - d) ):
        #         return d - l

    def longestValidParentheses(self, s):
        dp = [0 for _ in range(len(s))]
        max = 0
        for i in range(1, len(s)):
            if s[i] == ")":
                if s[i-1] == "(":
                    dp[i] = (dp[i-2] if i > 1 else 0) + 2
                elif s[i-1] == ")":
                    start = i-dp[i-1]-1
                    dp[i] = (dp[start-1] if start > 0 else 0) + dp[i-1] + 2 if start >= 0 and s[start] == '(' else 0
                if dp[i] > max:
                    max = dp[i]
        return max

s = "(((()())"
s = ")()((()()())()()))("
s = ")("
s = ")(())))(())())"
s = "()(())"
print(Solution().longestValidParentheses(s))