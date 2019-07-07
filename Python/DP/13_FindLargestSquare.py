
matrix = [
    [0, 0, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1],
]


def FindLargestSquare(matrix):
    res = []
    max = 0

    # build result matrix
    for i in range(len(matrix) + 1):
        row = []
        for i in range(len(matrix[0]) + 1):
            row.append(0)
        res.append(row)

    # loop over input matrix
    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if matrix[r][c] == 1:
                power = min(res[r][c+1], res[r+1][c], res[r][c]) + 1
                res[r+1][c+1] = power

                if power > max:
                    max = power

    return max

print(FindLargestSquare(matrix))