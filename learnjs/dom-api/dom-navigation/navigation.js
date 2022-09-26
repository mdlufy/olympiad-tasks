<html>
    <body>
        <div>Пользователи:</div>
        <ul>
            <li>Джон</li>
            <li>Пит</li>
        </ul>
    </body>
</html>;

// div:
document.body.children[0];
document.body.firstElementChild;
document.body.childNotes[1];

// ul
document.body.lastElementChild;
document.body.children[1];


// second li
document.body.lastElementChild.lastElementChild;




// Правда, что elem.lastChild.nextSibling всегда равен null? - Да
// Правда, что elem.children[0].previousSibling всегда равен null ? - Нет




for (let i = 0; i < table.rows; i++) {
    let curr = table.rows[i].cells[i];

    makeItRed(curr);
}

function makeItRed(node) {
    node.style.backgroundColor = 'red';
}