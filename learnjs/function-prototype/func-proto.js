function Rabbit() {}
Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; => true
// Rabbit.prototype.eats = false; => false

// delete rabbit.eats; => true
// delete Rabbit.prototype.eats;  => undefined


console.log(rabbit.eats); // ?
