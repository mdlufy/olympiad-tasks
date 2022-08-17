shopPlan = input()
subSectionsCount = int(input())

for i in range(subSectionsCount):
    leftBorder, rightBorder = map(int, input().split())

    subSection = shopPlan[leftBorder - 1 : rightBorder]

    sortedSubSection = sorted(subSection, reverse=True)

    operationsCount = 0
    index = 0

    while True:
        letter = sortedSubSection[-1]

        if subSection[index] == letter:
            sortedSubSection.pop()

        if not sortedSubSection:
            break

        index += 1
        operationsCount += 1

        if index >= len(subSection):
            index = 0

    print(operationsCount)