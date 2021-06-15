C = int(input())

for i in range(C):
    score = []
    sum = 0
    average = 0
    count = 0

    score = list(map(int, input().split()))
    for j in range(1, score[0]+1):
        sum += score[j]
    average = sum/score[0]
    for k in range(1, score[0]+1):
        if(score[k] > average):
            count += 1

    print(str(format(count/score[0]*100, ".3f")) + '%')



