function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function(str) {
        let splitStr = str.split(' ');
        const a = +splitStr[0]
        const oper = splitStr[1]
        const b = +splitStr[2]

        if (!this.methods[oper] || isNaN(a) || isNaN(b)) return NaN;

        return this.methods[oper](a, b);
        
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7'))