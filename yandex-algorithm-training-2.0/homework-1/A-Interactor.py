taskCode = int(input())
interactorVerdict = int(input())
checkerVerdict = int(input())

match interactorVerdict:
    case 0:
        print(3) if taskCode != 0 else print(checkerVerdict)
    case 1:
        print(checkerVerdict)
    case 4:
        print(3) if taskCode != 0 else print(4)
    case 6:
        print(0)
    case 7:
        print(1)
    case other: 
        print(interactorVerdict)


