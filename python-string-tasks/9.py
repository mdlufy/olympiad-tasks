string = input()
myList = string.split()

minimum = len(myList[0])

for i in range(0, len(myList)):
    if (len(myList[i]) <= minimum):
        minimum = len(myList[i])


for i in range(0, len(myList)):
    if (len(myList[i]) == minimum):
        print(myList[i])