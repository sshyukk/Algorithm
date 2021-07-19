arr = [5, 3, 7, 9, 2, 5, 2, 6]
arrMin = float('inf')    #가장 큰 값 저장하기.
for i in range(len(arr)):
    if arr[i] < arrMin:
        arrMin = arr[i]
print(arrMin)

#같은 원리_1
arr = [5, 3, 7, 9, 2, 5, 2, 6]
arrMin = arr[0]    #임의의 첫 번째 값 저장하기.
for i in range(1, len(arr)):
    if arr[i] < arrMin:
        arrMin = arr[i]
print(arrMin)

#같은 원리_2
arr = [5, 3, 7, 9, 2, 5, 2, 6]
arrMin = float('inf')
for x in arr:
    if x < arrMin:
        arrMin = x
print(arrMin)