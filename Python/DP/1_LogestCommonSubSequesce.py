# X: BDCABA
# Y: ABCBDAB

#       0  1  2  3  4  5
#       B  D  C  A  B  A
#       _  _  _  _  _  _
# 0 A | 0  0  0  1  0  1
# 1 B | 1  0  0  0  1  0
# 2 C | 0  0  1  0  0  0
# 3 B | 1  0  0  0  1  0
# 4 D | 0  1  0  0  0  0
# 5 A | 0  0  0  1  0  1
# 6 B | 1  0  0  0  1  0


#              X
#        0  1  2  3  4  5  6
#        +  B  D  C  A  B  A
#        _  _  _  _  _  _  _
#   0 + |0  0  0  0  0  0  0
#   1 A |0  0  0  0  1  1  1
#   2 B |0  1  1  1  1  2  2
#   3 C |0  1  1  2  2  2  2
#Y  4 B |0  1  1  2  2  3  3
#   5 D |0  1  2  2  2  3  3
#   6 A |0  1  2  2  3  3  4
#   7 B |0  1  2  2  3  4  4

#              X
#        0  1  2  3  4  5  6
#        +  B  D  C  A  B  A        A = A
#        _  _  _  _  _  _  _        B = B
#   0 + |0  0  0  0  0  0  0        C = A B
#   1 A |0  0  0  0  A  A  A        D = A B AB
#   2 B |0  B  B  B  C  D  D        E = B BC
#   3 C |0  B  B  E  F  G  G        F = A B BC
#Y  4 B |0  B  B  E  F  H  H        G = A B BC AB
#   5 D |0                          H = A B BC AB BB BCB
#   6 A |0  
#   7 B |0  

# max of top left topleft

# if match m[x] == m[y] && x > y
    # add 1
    # max at min(x,y)

def LogestCommonSubsequence(seqX, seqY):

    matrix = [ 
        [ 0 for _ in range(len(seqX)+1)] for _ in range(len(seqY)+1)
    ]
    sets = [
        [ set([""]) for _ in range(len(seqX)+1)] for _ in range(len(seqY)+1)
    ]

    for y in range(1, len(seqY)+1):
        for x in range(1, len(seqX)+1):

            if seqX[x-1] == seqY[y-1]:
                ulset = sets[y-1][x-1]
                sets[y][x] = {str+seqX[x-1] for str in ulset}

                matrix[y][x] = matrix[y-1][x-1] + 1;
            else:
                sets[y][x] = sets[y-1][x].union(sets[y][x-1])
                
                matrix[y][x] = max(matrix[y-1][x], matrix[y][x-1])

    # print longest sets
    css = list(sets[len(seqY)][len(seqX)])
    css.sort(key = lambda s: -len(s))
    lcss = filter(lambda x: len(x) == len(css[0]), css)
    print(lcss)

    return matrix[len(seqY)][len(seqX)]


def LCSLightMem(seqX, seqY):
    matrix = [ None, [ 0 for _ in range(len(seqX)+1)] ]
    sets = [ None, [ set([""]) for _ in range(len(seqX)+1)] ]

    for y in range(1, len(seqY)+1):

        # shift mem
        matrix[0] = matrix[1]
        matrix[1] = [ 0 for _ in range(len(seqX)+1)]
        sets[0] = sets[1]
        sets[1] = [ set([""]) for _ in range(len(seqX)+1)]

        for x in range(1, len(seqX)+1):
            if seqX[x-1] == seqY[y-1]:
                sets[1][x] = {str+seqX[x-1] for str in sets[0][x-1]}
                matrix[1][x] = matrix[0][x-1] + 1;
            else:
                sets[1][x] = sets[0][x] | sets[1][x-1]
                matrix[1][x] = max(matrix[0][x], matrix[1][x-1])

    # print longest sets
    css = list(sets[0][len(seqX)])
    css.sort(key = lambda s: -len(s))
    lcss = filter(lambda x: len(x) == len(css[0]), css)
    print(lcss)

    return matrix[0][len(seqX)]

# ==============================================================

def LCS3(seqX, seqY, seqZ):
    matrix = [
        [ 
            [
                0 for _ in range(len(seqX)+1)
            ] for _ in range(len(seqY)+1)
        ] for _ in range(len(seqZ)+1)
    ]
    # sets = [
    #     [
    #         [ 
    #             set([""]) for _ in range(len(seqX)+1)
    #         ] for _ in range(len(seqY)+1)
    #     ] for _ in range(len(seqZ)+1)
    # ]

    for z in range(1, len(seqZ)+1):
        for y in range(1, len(seqY)+1):
            for x in range(1, len(seqX)+1):

                if seqZ[z-1] == seqX[x-1] == seqY[y-1]:
                    # sets[z][y][x] = {str+seqX[x-1] for str in sets[z-1][y-1][x-1]}
                    matrix[z][y][x] = matrix[z-1][y-1][x-1] + 1;
                else:
                    # sets[z][y][x] = sets[z-1][y][x] | sets[z][y-1][x] | sets[z][y][x-1]
                    matrix[z][y][x] = max(matrix[z-1][y][x], matrix[z][y-1][x], matrix[z][y][x-1])

    # print longest sets
    # css = list(sets[len(seqZ)][len(seqY)][len(seqX)])
    # css.sort(key = lambda s: -len(s))
    # lcss = filter(lambda x: len(x) == len(css[0]), css)
    # print(lcss)

    return matrix[len(seqZ)][len(seqY)][len(seqX)]


def LCS3LightMem(seqX, seqY, seqZ):
    matrix = [
        [ 
            [ 
                0 for _ in range(len(seqX)+1)
            ] for _ in range(len(seqY)+1)
        ] for _ in range(len(seqZ)+1)
    ]

    for z in range(1, len(seqZ)+1):
        for y in range(1, len(seqY)+1):
            for x in range(1, len(seqX)+1):
                if seqZ[z-1] == seqX[x-1] == seqY[y-1]:
                    matrix[z][y][x] = matrix[z-1][y-1][x-1] + 1;
                else:
                    matrix[z][y][x] = max(matrix[z-1][y][x], matrix[z][y-1][x], matrix[z][y][x-1])

    # print longest sets
    print(LCSFromMatrix(matrix, seqX, seqY, seqZ))

    return matrix[len(seqZ)][len(seqY)][len(seqX)]


def LCSFromMatrix(matrix, seqX, seqY, seqZ, x=None, y=None, z=None, substring=None, strings=None):
    if x is None:
        x = len(seqX)
        y = len(seqY)
        z = len(seqZ)
        strings = []
        substring = ""

    print(z, y, x, matrix[z][y][x] == 1)
    if seqZ[z-1] == seqY[y-1] == seqX[x-1]:
        if matrix[z][y][x] == 1:
            strings.append(seqZ[z-1]+substring)
            return

        LCSFromMatrix(matrix, seqX, seqY, seqZ, x-1, y-1, z-1, seqZ[z-1] + substring, strings)

    else:
        maxdir = max(matrix[z-1][y][x], matrix[z][y-1][x], matrix[z][y][x-1])
        if matrix[z-1][y][x] == maxdir and z > 0:
            LCSFromMatrix(matrix, seqX, seqY, seqZ, x, y, z-1, substring, strings)
        if matrix[z][y-1][x] == maxdir and y > 0:
            LCSFromMatrix(matrix, seqX, seqY, seqZ, x, y-1, z, substring, strings)
        if matrix[z][y][x-1] == maxdir and x > 0:
            LCSFromMatrix(matrix, seqX, seqY, seqZ, x-1, y, z, substring, strings)

    return strings

# print(LCS3LightMem("ABCBDAB", "BDCABA", "BADACB"))

# ===================================================================

def buildMem(sequences, i=None):
    if i is None:
        i = 0

    if i == len(sequences)-1:
        return [0 for _ in range(len(sequences[i])+1)]

    return [ buildMem(sequences, i+1) for _ in range(len(sequences[i])+1) ]


def populateMem(mem, sequences, memlevel=None, chars=None, index=None, s=None):
    # mem: mdlist - full memory object
    # sequences: string list - full sequence list
    # memlevel: md list - current memory array,
    #           int list - when basecase hits
    # chars: set - characters at current index
    # diag: md list - diagonal value
    #       int list - when basecase hits
    # index: int list - list containing indexes to current position in mem
    # s: int - index of current level sequence
    # i: int - index in current sequence

    if s is None:           
        s = 0
    if chars is None:
        chars = set([])
    if index is None:
        index = []
    if memlevel is None:
        memlevel = mem

    # populate mem
    if s == len(sequences)-1:
        # same char
        if len(chars) == 1:
            # TODO: make not suck
            diagIdx = [x - 1 for x in index]
            print(diagIdx)
            print(readMem(mem, diagIdx))
            # print(readMem(mem, diagIdx) + 1)
            # memlevel[i] = readMem(mem, diagIdx) + 1
        # different
        # else: 
        #     newIdx = index[:] + [i]
        #     memlevel[i] = getMaxNeighbor(mem, newIdx)
        return

    # recursive call
    for k in range(1, len(sequences[s])+1):
        char = sequences[s][k-1]
        newChars = chars | {char}
        newIdx = index[:] + [k]
        populateMem(mem, sequences, memlevel[k], newChars, newIdx, s+1)


def getMaxNeighbor(memlevel, indexes):
    # returns the max of all neighbors given an index array
    neighbors = []
    for i in range(len(indexes)):
        neighborIdexes = indexes[:i] + [indexes[i]-1] + indexes[i+1:]
        neighbors.append(readMem(memlevel, neighborIdexes))
    return max(neighbors)


def readMem(memlevel, indexes, i=None):
    # returns the value from mem at the given index array
    # returns none if indexes out of bounds
    if i is None:
        i = 0
    idx = indexes[i]
    if idx < 0 or idx >= len(memlevel):
        return None
    if i == len(indexes)-1:
        return memlevel[idx]
    return readMem(memlevel[idx], indexes, i+1)


def readRes(mem):
    # returns value in the lowers corner of mem
    if type(mem) is list:
        return readRes(mem[len(mem)-1])
    return mem


def LCSN(sequences):

    mem = buildMem(sequences)

    for row in mem:
        print(row)

    populateMem(mem, sequences)
    return readRes(mem)

print(LCSN(['aa', 'aa']))