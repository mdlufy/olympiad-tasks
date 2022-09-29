<ol id="elem">
    <li>Привет</li>
    <li>Мир</li>
</ol>;

function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}

function clear(elem) {
    elem.innerHTML = '';
}

clear(elem); // очищает список
