class HighScoreTable {
    constructor(count) {
        this.count = count;
        this.scores = [];
    }

    update(value) {
        if (this.scores.length < this.count) {
            this.scores.push(value);
        } else {
            for (let i = this.scores.length - 1; i >= 0; i--) {
                if (this.scores[i] < value) {
                    this.scores[i] = value;
                }
            }

            this.scores.sort((a, b) => b - a);
        }
    }

    reset() {
        this.scores = [];
    }
}

let highScoreTable = new HighScoreTable(3)
console.log(highScoreTable.scores) // evaluates to True

highScoreTable.update(10)

console.log(highScoreTable.scores)

highScoreTable.update(8)
highScoreTable.update(12)
highScoreTable.update(5)
highScoreTable.update(10)

console.log(highScoreTable.scores)

highScoreTable.reset()

console.log(highScoreTable.scores)