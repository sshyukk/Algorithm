import sys
sys.stdin = open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))
score = 0
tmp = 0

for i in range(n):
    if a[i] == 1:
        tmp += 1
        score += tmp
    else:
        tmp = 0

print(score)


