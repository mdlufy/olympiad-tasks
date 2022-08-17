vectorLength = int(input())

maxSequenceLength = 0
localSequenceLength = 0

for i in range(vectorLength):
    symbol = int(input())
    
    if symbol == 1:
        localSequenceLength += 1 
    else:
        localSequenceLength = 0

    if localSequenceLength > maxSequenceLength:
        maxSequenceLength = localSequenceLength
                   
print(maxSequenceLength)