const inputName = prompt(`Какое "официальное" название JavaScript?`, '');

if (inputName === "ECMAScrip") alert("Верно!") 
else alert("Не знаете? ECMAScript!");


const inputValue = prompt('Введите число', 0);

if (inputValue > 0) alert(1)
else if (inputValue < 0) alert(-1)
else alert(0)


let result;

result = (a + b < 4) ? 'Мало' : 'Много';




let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';


