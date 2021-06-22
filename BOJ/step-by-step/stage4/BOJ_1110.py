N = int(input())
if(N < 10):
    N = N * 10

NUM = N
NEW_NUM = 0
C = 0

while True:
    NEW_NUM = (NUM // 10 + NUM % 10)%10 + (NUM % 10) * 10
    C += 1
    NUM = NEW_NUM
    if(N == NUM):
        break

print(C)
