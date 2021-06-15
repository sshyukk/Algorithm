N = int(input())
score = []
average = 0
sum = 0

score = list(map(int, input().split()))
max = max(score)

for i in score:
    sum += i/max*100
average = sum/N
print(average)
