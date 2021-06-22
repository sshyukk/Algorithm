a = []
for i in range(10):
    a.append(int(input()) % 42)
a_sorted = set(a)
print(len(a_sorted))