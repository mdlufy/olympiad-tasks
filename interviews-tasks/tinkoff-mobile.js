// Кейс 1
for (var i = 0; i < 10; i++) {
    setTimeout((function () {
        //console.log(i);
    })(i), 1000);
}

// // Кейс 2
const obj = {
  a: 1,
  foo () {
    // console.log(this.a);
  } 
};

obj.foo.call({ a: 2 }); // 2

// Кейс 3
const obj2 = {
  a: 1,
  foo () {
    // console.log(this.a);
  } 
};

const foo = obj2.foo.bind(obj);
foo.call({ a: 2 }); // 1


// Кейс 4
console.log(1)
  
setTimeout(function() {
  console.log(2)
})
  
Promise.resolve(3).then(console.log)
  
console.log(4)
  
setTimeout(function() {
  console.log(5)
}, 0)
  
console.log(6)

// 146325

// Кейс 5
/* 
   Функция проверяет правильность расстановки скобок (в математическом смысле) в переданной строке
   Каждая открытая скобка должна быть закрыта в правильном порядке
   @param {string} str - Строка из скобок, которую мы хотим проверить.
   @return {boolean} true - если скобки расставлены правильно, false - если неправильно. 
*/ 

function testBrackets(str) { 
    // Необходимо реализовать тело функции
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '(') {
        stack.push(str[i]);

        return;
      }

      if (!stack.pop()) {
        return false;
      }
    } 
    
    if (stack.length != 0) return false;
    
    return true;
}

console.log(
    testBrackets('()'),       // true
    testBrackets('(()(()))'), // true
    testBrackets(')('),       // false
    testBrackets('(()()'),    // false
    testBrackets('())(()')    // false
);