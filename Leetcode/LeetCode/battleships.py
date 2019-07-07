def countBattleships(board):
    count = 0
    for y, row in enumerate(board):
        for x, val in enumerate(row):
            if val == "X":
                if x > 0 and row[x-1] == "X":
                    continue
                if y > 0 and board[y-1][x] == "X":
                    continue
                if new:
                count += 1

    return count


board = [
    ['X','.','.','X'],
    ['.','.','.','X'],
    ['.','.','.','X'],
]


print countBattleships(board)
    