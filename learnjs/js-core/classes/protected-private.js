// protected
class CoffeeMachine {
    _waterAmount = 0;

    setWaterAmount(value) {
        if (value < 0) throw new Error(`Negative amount of water`);
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.power = 200;
console.log(coffeeMachine.power);



// private
class CoffeeMachine2 {

    #waterAmount = 200;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error(`Negative amount of water`);
        this.#waterAmount = value;
    }
}

let coffeeMachine2 = new CoffeeMachine2(100);

coffeeMachine2.waterAmount = 100;
// console.log(coffeeMachine2.#waterAmount);


// private not inheritable
class MegaCoffeeMachine extends CoffeeMachine {
    method() {
        console.log(this.#waterAmount);
    }
}

MegaCoffeeMachine.method();
