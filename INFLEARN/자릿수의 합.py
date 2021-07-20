import sys
sys.stdin = open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))

# 각 자릿수의 합 구하기_1
def digit_sum(x):
    sum = 0
    while x > 0:
        sum += x%10
        x = x//10
    return sum

# 각 자릿수의 합 구하기_2
def digit_sum_2(x):
    sum = 0
    for i in str(x):
        sum += int(i)
    return sum

max = -2147000000
for x in a:
    tot = digit_sum(x)
    if tot > max:
        max = tot
        res = x

print(res)

