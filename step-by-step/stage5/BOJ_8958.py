import sys

# 변수 설정
N = int(input())
OX = []
count = 0
final = 0

# 함수 설정
def cal(num):
    res = 0
    for i in range(1, num+1):
        res += i
    return res

# 메인
for i in range(N):
    OX = list(sys.stdin.readline())
    for j in OX:
        if j == 'O':
            count += 1
        else:
            final += cal(count)
            count = 0
    print(final)
    final = 0


