def numToText(num):
    parts = []
    while num > 0:
        part = num % 1000
        parts.append(part)
        num = int(num / 1000)

    parts.reverse()
    count = len(parts)
    string = ""
    for part in parts:
        suffix = ['','','thousand ','million ', 'billion ', 'trillion ']
        if part:
            string += "{} {}".format(hundrenToText(part), suffix[count])
        count -= 1

    return string


def hundrenToText(numStr):
    while (len(str(numStr)) < 3):
        numStr = "0" + str(numStr)

    nums = [int(x) for x in str(numStr)]
    numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight','nine']
    tens = ['','','twenty','thirt', 'fourty','fifty', 'sixty','seventy', 'eighty','ninety']
    teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen','ninteen']

    string = ""
    if nums[0]:
        string += "{} hundred".format(numbers[nums[0]])
        string += " and " if nums[1] or nums[2] else ""
    if nums[1] == 1:
        string += "{}".format( teens[nums[2]] )
    else:
        if nums[1]:
            print 1, nums[1], tens[nums[1]]
            string += "{}".format( tens[nums[1]] )
        if nums[2]:
            print 2, nums[2], numbers[nums[2]]
            string += "{}".format( numbers[nums[2]] )

    return string

print numToText(101101)
