def countHan(num):
    count = 0
    a = list(str(num))


    if num < 10:
        count += num
    if num < 100:
        count += num
    if num < 1000:
        if (a[0]-a[1] == a[1]-a[2]):
            count


    return count


N = int(input())
a = list(str(N))

for i in range(1, N+1):

