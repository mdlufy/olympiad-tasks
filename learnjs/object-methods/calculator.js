let calculator = {
    read: function() {
        this.first = +prompt('Введите первое значение');
        this.second = +prompt('Введите второе значение');
    },

    sum: function() {
        return this.first + this.second;
    },

    mul: function() {
        return this.first * this.second;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
