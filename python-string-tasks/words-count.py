delimiterCharacters = "!.?, "

# myString = "привет, Вася !вот!!!!!"
myString = input()

count = 1

prevWords = False

for i in range(0, len(myString)):
    if ((myString[i] in delimiterCharacters) and (words == True) and (i != len(myString) - 1)):
        count += 1
        words = False
    elif (myString[i] not in delimiterCharacters):
        words = True

if (myString[len(myString) - 1] in delimiterCharacters):
    count -= 1

print(count)
