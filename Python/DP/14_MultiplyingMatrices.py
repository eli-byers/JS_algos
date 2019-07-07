import numpy as np

def printm(matrix):
    print(np.matrix(matrix))

def MultiplyingMatrices(list, map = None):
    if map is None:
        map = {}

    if len(list) < 3:
        return None
    if len(list) == 3:
        return list[0] * list[1] * list[2]

    results = []
    for i in range(1, len(list) - 1):

        # look up or create key
        key = "{}-{}-{}".format(*list[i-1:i+2])
        val = map.get(key)
        if not val:
            val = list[i-1] * list[i] * list[i+1]
            map[key] = val

        # recursive call
        newList = list[:i] + list[i+1:]
        res = MultiplyingMatrices(newList, map)
        if res: 
            results.append(res + val)

    return min(*results)


def MultiplyingMatricesDynamic(list, map = None):
    matrix = []
    for _ in range(len(list)):
        row = []
        for _ in range(len(list)):
            row.append(0)
        matrix.append(row)

    for sublength in range(2, len(list)):

        for i in range(len(list) - sublength):
            j = i + sublength

            minval = None
            for k in range(1, sublength):
                leftval = matrix[i][j-(sublength-k)]
                downval = matrix[i+k][j]
                curval = list[i] * list[j] * list[i+k]
                curmin = leftval + downval + curval
                if not minval or curmin < minval:
                    minval = curmin

            matrix[i][j] = minval
    
    for row in matrix:
        print(row)

    return matrix[0][len(list)-1]
    


def test(arr):
    print("")
    answer = MultiplyingMatricesDynamic(arr)
    state = "Pass" if answer == MultiplyingMatrices(arr) else "Fail"
    print("Test {} > {} : {}".format(arr, state, answer))
    
test([10,30,5,60])
test([3,5,2,6,3])
test([2,4,5,7])
test([2,4,3,2,5])




