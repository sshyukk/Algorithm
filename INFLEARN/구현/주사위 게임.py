import sys
sys.stdin = open("input.txt", "rt")

n = int(input())
res = 0
for i in range(n):
    tmp = input().split()    # 이렇게 리스트로 묶어서 값을 할당하지 않아도 문자화된 숫자로 값이 들어간다.
    tmp.sort()    # 값의 오름차순 정렬.
    a, b, c = map(int, tmp)
    if a == b and b == c:
        money = 10000 + (a * 1000)
    elif a == b or a == c:
        money = 1000 + (a * 100)
    elif b == c:
        money = 1000 + (b * 100)
    else:
        money = c * 100
    if money > res:
        res = money

print(res)
