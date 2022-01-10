import sys
sys.stdin = open("input.txt", "rt")

n = int(input())
for i in range(n):
    s = input()
    s = s.lower()    # 문자를 할당해주어야 값이 적용된다.
    size = len(s)

    # 인프런 강의 풀이(더 좋은 풀이)
    # for j in range(size//2):    # 양 끝을 비교하기 때문에 길이의 반토막만 탐색하면 된다.
    #     if s[j] != s[-1-j]:    # 문자열의 마지막 부분부터 돌 수 있다. -1, -2, -3, -4 ... 이런식으로 진행.
    #         print("#%d NO" %(i+1))
    #         break
    # else:
    #     print("#%d YES" %(i+1))

    # 나의 풀이
    tmp = s[::-1]    # [::-1] 문자열 리버스 프로그램.
    if s == tmp:
        print("#%d YES" %(i+1))
    else:
        print("#%d NO" %(i+1))

