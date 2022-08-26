if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

if (-1 || 0) alert("first"); // -1
if (-1 && 0) alert("second"); // 0
if (null || (-1 && 1)) alert("third"); // 1

let inputLogin = prompt("Введите логин", "");

if (inputLogin) {
    if (inputLogin === "Админ") {
        let inputPassword = prompt("Введите пароль", "");

        if (inputPassword) {
            inputPassword == "Я Главный"
                ? alert("Здравствуйте!")
                : alert("Неверный пароль");
        } else {
            alert("Отменено");
        }
    } else {
        alert('Я вас не знаю');
    }
} else {
    alert('Отменено');
}
