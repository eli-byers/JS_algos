class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if not matrix or not matrix[0] or matrix[0][0] > target:
            return False

        lenX = len(matrix[0])
        lenY = len(matrix)
        x = y = 0

        while 0 <= y < lenY and 0 <= x < lenX:
            cur = matrix[y][x]

            if cur == target:
                return True

            if x < (lenX - 1) and matrix[y][x + 1] <= target:
                x += 1
                continue

            if y < (lenY - 1) and matrix[y + 1][x] <= target:
                y += 1
                continue

            if y == (lenY - 1) and x == (lenX - 1):
                return False

            if y < (lenY - 1):
                x -= 1
                while x >= 0:
                    if matrix[y + 1][x] <= target:
                        y += 1
                        break
                    x -= 1
                else:
                    return False
                continue
            return False




matrix =[
    [ 1, 4, 7,11,15],
    [ 2, 5, 8,12,19],
    [ 3, 6, 9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]

matrix = [
    [ 1, 3, 5, 7, 9],
    [ 2, 4, 6, 8,10],
    [11,13,15,17,19],
    [12,14,16,18,20],
    [21,22,23,24,25]
]
target = 24

# matrix = [
#     [1],
#     [3],
#     [5]
# ]
# target = 2

print(Solution().searchMatrix(matrix, target))