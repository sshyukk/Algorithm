def solution(phone_number):
    answer = ''
    width = len(phone_number) - 4
    for i in range(width):
        answer += '*'
    answer += phone_number[width:]

    return answer

