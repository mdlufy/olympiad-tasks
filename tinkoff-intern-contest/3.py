# первый день - подключались, второй день - отменялись 
# каждый день число приобретенных подписок равно (-1)^(i-1) * a_i

# в днях - подключения: нечетные дни
# в днях - отключения: четные дни

# в массиве - подключения: четные дни
# в массиве - отключения: нечетные дни

# ищем наибольшую разницу между двумя элементами, стоящими на разных деневых позициях (подключение/отключение)

n = int(input())

data = list(map(int, input().split()))

minSubCount = data[0]
minSubCountIndex = 0

maxUnSubCount = data[1]
maxUnSubCountIndex = 1 

for day in range(0, len(data)):
    if (day % 2 == 0 and data[day] < minSubCount):
            minSubCount = data[day]
            minSubCountIndex = day
    if (day % 2 == 1 and data[day] > maxUnSubCount):
            maxUnSubCount = data[day]
            maxUnSubCount = day

if (minSubCount < maxUnSubCount):
    data[maxUnSubCountIndex], data[minSubCountIndex] = data[minSubCountIndex], data[maxUnSubCountIndex]

profit = 0

for day in range(0, len(data)):
    if (day % 2 == 0):
        profit += data[day]
    else:
        profit -= data[day]

print(profit)