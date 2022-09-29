let list = document.createElement('ul');
document.body.append(list);


while (true) {
    let inputText = prompt('Введите текст для элемента списка');

    if (!inputText) break;

    let element = document.createElement('li');
    element.textContent = inputText;
    list.append(element);

}
