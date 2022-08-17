x1, y1, x2, y2 = [int(number) for number in input().split()]
x3, y3, x4, y4 = [int(number) for number in input().split()]

minByX = min(x1, x2, x3, x4)
maxByX = max(x1, x2, x3, x4)

minByY = min(y1, y2, y3, y4)
maxByY = min(y1, y2, y3, y4)

disByX = maxByX - minByX
disByY = maxByY - minByY

result = max(disByX, disByY)

print(result ** 2)