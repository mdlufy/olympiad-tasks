vectorLength = int(input())

if vectorLength != 0:
    firstNumber = int(input())
    print(firstNumber)

    unique = [firstNumber]

    for i in range(vectorLength - 1):
        number = int(input())

        if number > unique[0]:
            print(number)
            unique[0] = number 