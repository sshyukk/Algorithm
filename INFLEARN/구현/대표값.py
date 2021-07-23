import sys
sys.stdin = open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))
ave = round(sum(a)/n)    #소수점 첫 째 자리에서 반올림하는 함수. round(). 리스트의 모든 요소의 합을 구하는 함수. sum().
min = float('inf')    #round()는 round_half_even 방식. 정확히 소수점이 중간을 향하고 있을 때(0.5000), 짝수 쪽으로 반올림 한다.

for idx, x in enumerate(a):    #리스트의 인덱스 값과 해당하는 값을 쌍으로 연결 짓는 함수. enumerate().
    tmp = abs(x - ave)
    if tmp < min:
        min = tmp
        score = x
        res = idx + 1
    elif tmp == min:
        if x > score:
            score = x
            res = idx + 1
print(ave, res)

#반올림 방법2
#위에서 보여줬던 round()방식은 round_half_even 방식이기 때문에 불완전하다.

a = 67.5
a = a+0.5
a = int(a)
