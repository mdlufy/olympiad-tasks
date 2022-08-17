# 1) Найти минимальный start из всех
# 2) Среди всех с минимальным стартом ищем с наименьшей разницей end - start
# 3) Увеличиваем длину цепи, воспользовавшись этим лифтом, вычеркиваем этот лифт
# 4) Ищем следующий лифт, у которого start = end предыдущего лифта и повторяем шаг 2, 
#    если такого лифта нет, то возвращаем длину цепи

elevatorsCount = int(input())

startsArr = []
endsArr = []

for i in range(elevatorsCount):
    start, end = map(int, input().split())     

    startsArr.append(start)
    endsArr.append(end)

def profitableElevator(chain, minFloor = min(startsArr)):
    minDiff = float('inf')

    index = -1

    for i in range(elevatorsCount):
        if (startsArr[i] == minFloor) and (float(endsArr[i] - startsArr[i]) < minDiff):
                minDiff = endsArr[i] - startsArr[i]
                index = i

    if index == -1:
        return chain
    else:
        chain += 1

        startsArr[index] = float('inf')

        return profitableElevator(chain, endsArr[index])

print(profitableElevator(0))