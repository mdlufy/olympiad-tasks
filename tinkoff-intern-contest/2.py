yearsCount = int(input())

winners = {}

for i in range(yearsCount):

    command = input().split()

    commandSet = set(command)
    commandMemo = str(commandSet)

    if commandMemo not in winners:
        winners[commandMemo] = 1
    else: 
        winners[commandMemo] += 1

print(max(winners.values()))