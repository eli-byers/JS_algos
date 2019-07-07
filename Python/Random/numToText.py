def numToText(num):
    parts = []
    while num > 0:
        part = num % 1000
        parts.append(part)
        num = int(num / 1000)

    parts.reverse()
    count = len(parts)
    suffix = ['','','thousand','million', 'billion', 'trillion']
    numArr = []
    for part in parts:
        if part:
            numArr += hundrenToText(part) + [suffix[count]] + ['-']
        count -= 1

    return " ".join(numArr)


def hundrenToText(numStr):
    while (len(str(numStr)) < 3):
        numStr = "0" + str(numStr)

    nums = [int(x) for x in str(numStr)]

    numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight','nine']
    tens = ['','','twenty','thirty', 'fourty','fifty', 'sixty','seventy', 'eighty','ninety']
    teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen','ninteen']

    numArr = []
    if nums[0]:
        numArr += [numbers[nums[0]], "hundred"]
        numArr += ["and"] if nums[1] or nums[2] else []
    if nums[1] == 1:
        numArr.append( teens[nums[2]] )
    else:
        if nums[1]:
            numArr.append( tens[nums[1]] )
        if nums[2]:
            numArr.append( numbers[nums[2]] )

    return numArr

print numToText(345678934512515)
