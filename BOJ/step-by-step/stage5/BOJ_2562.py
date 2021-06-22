# index = 0
# max = 0
#
# for i in range(9):
#     num = int(input())
#     if(num > max):
#         max = num
#         index = i
#     else:
#         continue
# print(max)
# print(index+1)

a = []
for i in range(9):
    a.append(int(input()))
print(max(a))
print(a.index(max(a))+1)





