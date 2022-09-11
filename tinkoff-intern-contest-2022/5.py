personsCount, queriesCount = list(map(int, input().split()))

names = []
namesOrder = {}

for i in range(personsCount):
    name = input()
    names.append(name)

    namesOrder[name] = i + 1

names.sort()

for i in range(queriesCount):
    lineNumber, prefix = input().split()
    lineNumber = int(lineNumber)

    subArrLen = len(names)
    index = 0

    while index < subArrLen:
        middle = (index + subArrLen) // 2
        if names[middle] < prefix:
            index = middle + 1
        else:
            subArrLen = middle


    person = names[index + lineNumber - 1]

    if person.startswith(prefix):
        personInOrder = namesOrder[person]
        print(personInOrder)
    else:
        print(-1)