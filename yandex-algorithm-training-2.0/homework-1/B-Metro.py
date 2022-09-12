stationsCount, i, j = [int(number) for number in input().split()]

straigh = abs(i - j) - 1

around = stationsCount - (abs(i - j) + 1)

print(min(straigh, around))