function Calculator() {
    this.read = function() {
        this.first = +prompt('Введите первое значение');
        this.second = +prompt('Введите второе значение');
    }

    this.sum = function() {
        return this.first + this.second
    }

    this.mul = function() {
        return this.first * this.second
    }

}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );