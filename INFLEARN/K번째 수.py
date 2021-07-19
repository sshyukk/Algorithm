import sys
sys.stdin = open("input.txt", "rt")

T = int(input())    #입력 값은 한 줄에 하나씩 받는다고 생각하자
for t in range(T):
    n, s, e, k = map(int, input().split())    #한 줄에 받는 입력 값은 map과 split을 사용하자
    a = list(map(int, input().split()))    #리스트로 한 줄을 한꺼번에 저장하려면 map과 split을 사용하고 마지막에 list로 묶자
    a = a[s-1:e]    #리스트의 요소를 하나씩 처리하지 말고 슬라이스 기능을 이용하자
    a.sort()
    print("#%d %d" %(t+1, a[k-1]))    #프린트 포맷 형식 기억하자. print("%d %d" %(par, par))
