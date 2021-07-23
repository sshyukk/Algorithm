import sys
sys.stdin = open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))

# 숫자 뒤집기_1(나의 방식)
def reverse_1(x):
    x = str(x)
    x = x[::-1]    # 하나의 숫자를 리스트화 시켜서 역순으로 바꾼다.
    return int(x)

# 숫자 뒤집기_2(강의 자료)
def reverse(x):
    res = 0
    while x>0:
        t = x % 10
        res = res * 10 + t
        x = x // 10
    return res

# 소수 판별하기
def isPrime(x):
    if x == 1:    # 1일 때 예외처리
        return False
    for i in range(2, x//2 +1):    # 어떤 수가 소수인지 판단할 때, 그 수의 절반까지만 조사하면 된다.
        if x%i == 0:
            return False
    else:
        return True
for x in a:
    tmp = reverse(x)
    if isPrime(tmp):
        print(tmp, end=' ')








