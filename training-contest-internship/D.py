def bracketGenerator(count, string = '', left = 0, right = 0):
    if left == count and right == count:
        print(string)
    else:
        if left < count:
            bracketGenerator(count, string + '(', left + 1, right)
        if right < left:
            bracketGenerator(count, string + ')', left, right + 1)


n = int(input())
bracketGenerator(n)
