firstString = input()
secondString = input()

counter = 0

for symbol in secondString:
	if symbol in firstString:
		counter = counter + 1

print(counter)