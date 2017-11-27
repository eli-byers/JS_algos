
def multiplesof3and5(num):
    sum = 0
    for i in range(num):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum

sum = multiplesof3and5(1000)
print(sum)