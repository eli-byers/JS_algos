def optimizeSequence(sequence):
    wordLen = len(sequence[0])
    for x in range(wordLen):
        # store first words char at x
        maxChar = sequence[0][x]
        # for words starting at 1
        for y in range(1, len(sequence)):
            char = sequence[y][x]

            # maxChar used if the next char up is a '?'
            if char > maxChar:
                maxChar = char
            
            tempY = y
            # next char up or max if it is a '?'
            compairChar =  sequence[tempY-1][x] if sequence[tempY-1][x] != "?" else maxChar 
            # need to move up
            while tempY > 0 and char < compairChar:
                # it might not be able to move but also be a ? and not have to
                canMove = True
                # check each character before it
                for x2 in range(x - 1, -1, -1):
                    # can we move it up
                    if sequence[tempY][x2] != sequence[tempY-1][x2] and sequence[tempY-1][x2] != "?" and sequence[tempY][x2] != "?":
                        if char == "?":
                            canMove = False
                            break
                        return False
                        
                if canMove:
                    sequence[tempY], sequence[tempY-1] = sequence[tempY-1], sequence[tempY]
                    tempY -= 1
                # if it can't move but it wasn't a break condition, stop trying to bubble it up
                else:
                    break
                    
                compairChar =  sequence[tempY-1][x] if sequence[tempY-1][x] != "?" else maxChar
    
    for x in range(wordLen):
        for y in range(len(sequence)):
            if sequence[y][x] == "?":
                left = sequence[y][:x]
                right = sequence[y][x+1:]
                # replace with 'A' if it's the top row else use prev char
                newChar = "A" if y == 0 else sequence[y-1][x]
                sequence[y] = left + newChar + right
        
    return sequence

sequence = [
    "ABC",
    "F?E",
    "?FC",
    "C?D"
]

res = optimizeSequence(sequence)
print ("---")
print ("\n".join(res))