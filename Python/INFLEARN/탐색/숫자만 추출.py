import sys
sys.stdin = open("input.txt", "rt")

s = input()
res = 0

# 중요!
for x in s:
    if x.isdecimal():    # isdigit()과는 다르게 너 좁은 범위. 내장 함수를 사용.
        res = res*10 + int(x)    # 문자열을 정수형으로 변환. 여기가 핵심.
print(res)

cnt = 0
for i in range(1, res+1):
    if res%i == 0:
        cnt += 1
print(cnt)

