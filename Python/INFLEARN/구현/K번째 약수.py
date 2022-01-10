# 내가 푼 풀이
N, K = map(int, input().split())
count = 0
for i in range(1, N+1):
    if N % i == 0:
        if i == K:
            print(i)
        count = count + 1
if count < K:
    print(-1)

# 강의 풀이
import sys
sys.stdin = open("input.txt", "rt")
n, k = map(int, input().split())
cnt = 0
for i in range(1, n+1):
    if n%i == 0:
        cnt += 1
    if cnt == k:
        print(i)
        break
else:
    print(-1)



