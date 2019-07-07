import math

def generatePrimes(n):
    nums = [i for i in range(2, n)]

def isPrime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

def largestPrimeFactor(num):
    pass



# num = largestPrimeFactor(600851475143)
# print num

print math.sqrt(600851475143)