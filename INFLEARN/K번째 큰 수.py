import sys
sys.stdin = open("input.txt", "rt")

n, k = map(int, input().split())
a = list(map(int, input().split()))
res = set()    #set 자료구조는 중복을 제거한다. 잊지말자.
for i in range(n):    #조합을 만드는 방법. 생각보다 쉽 for문(3중 for문)을 이용하여 만들 수 있다. 한 번씩 순회하여 도는 구조를 생각해보자.
    for j in range(i+1, n):
        for m in range(j+1, n):
            res.add(a[i] + a[j] + a[m])    #set 자료구조는 list 자료구조와는 다르게 append()가 아니라 add()로 추가한다. 잊지말자.

res = list(res)    #set 자료구조는 sort() 함수가 없기 때문에 다시 list로 바꿔준다.
res.sort(reverse=True)    #sort() 함수는 기본적으로 오름차순 정렬이다. 내림차순으로 바꾸려면 reverse=True 기입하자.
print(res[k-1])

