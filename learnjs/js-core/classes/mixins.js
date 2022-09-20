const sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

const sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
        super.say(`Hi, ${this.name}`);
    },

    sayBye() {
        super.say(`Bye, ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

new User('Bob').sayHi();