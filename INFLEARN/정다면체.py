import sys
sys.stdin = open("input.txt", 'rt')

n, m = map(int, input().split())

# a = list()
# for i in range(n+m+1):
#     a.append(0)
# print(a)
a = [0] * (n+m+1)    #0으로 초기화할 때는 이렇게.

for i in range(1, n+1):
    for j in range(1, m+1):
        a[i+j] += 1    #++말고 +=는 가능하다.

max = -2147000000
# for x in a:
#     if x > max:
#         max = x
for i in range(n+m+1):    #되도록이면 리스트 안에서 돌리는 것보다 인덱스로 돌리자.
    if a[i] > max:
        max = a[i]

# res = list()    #필요 이상으로 리스트를 만들 생각 말기.
# for idx, x in enumerate(a):    #필요 이상으로 enumerate()함수 사용하지 말기.
#     if max == x:
#         res.append(idx)
# print(res)
for i in range(n+m+1):
    if a[i] == max:
        print(i, end=' ')




