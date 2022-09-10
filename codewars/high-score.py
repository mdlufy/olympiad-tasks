class HighScoreTable:
    
    def __init__(self, count):
        self.scores = []
        self.count = count

    def update(self, value): 
        if (len(self.scores) < self.count):
            self.scores.append(value)
        else:
            for i in range(len(self.scores) - 1, -1, -1):
                if (self.scores[i] < value):
                    self.scores[i] = value

        self.scores.sort(reverse=True)

    def reset(self):
        self.scores = []


highScoreTable = HighScoreTable(3)
print(highScoreTable.scores) # evaluates to True

highScoreTable.update(10)

print(highScoreTable.scores)

highScoreTable.update(8)
highScoreTable.update(12)
highScoreTable.update(5)
highScoreTable.update(10)

print(highScoreTable.scores)

highScoreTable.reset()

print(highScoreTable.scores)