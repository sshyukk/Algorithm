def solution(x):
    answer = True
    tmp = list(str(x))
    res = 0
    for i in range(len(tmp)):
        res += int(tmp[i])
    if x%res == 0:
        answer = True
    else:
        answer = False

    return answer