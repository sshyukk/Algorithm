def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        res = []
        for j in range(len(arr1[0])):
            res.append(arr1[i][j] + arr2[i][j])
        answer.append(res)
    return answer

#테스트 케이스
arr1 = [[1,2],[2,3]]
arr2 = [[3,4],[5,6]]
print(solution(arr1, arr2))