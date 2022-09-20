string = input()
myList = string.split()

numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
count = 0

for i in range(0, len(myList)):
    print(myList[i][0])
    if (myList[i][0] not in numbers):
        count += 1

print(count)

