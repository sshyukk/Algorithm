def plusEachNumber(num):
    new = str(num)
    sum = 0
    for i in range(len(new)):
        sum += int(new[i])
    return sum

def d(n):
    num = 0
    num = n + plusEachNumber(n)
    return num

a = [0] * 10001

for i in range(1, 10001):
    a[i] = d(i)

a.sort()

for i in range(1, 10001):
    if i not in a:
        print(i)









