def evenFibNums(num):
    sum = 0
    fib = [0, 1]
    while fib[0] < num:
        if fib[0] % 2 == 0:
            sum += fib[0]        
        temp = fib[0] + fib[1]
        fib[0] = fib[1]
        fib[1] = temp
    return sum

total = evenFibNums(4000000)
print total
