string = input()
myList = string.split()

lengthArr = []

for i in range(0, len(myList)):
    lengthArr.append(len(myList[i]))


numbersSum = 0
count = len(lengthArr)

for i in range(0, len(lengthArr)):
    numbersSum += lengthArr[i]

print (numbersSum / count)