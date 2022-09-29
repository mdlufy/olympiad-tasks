function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let [key, value] of Object.entries(obj)) {
        let li = document.createElement('li');
        li.innerHTML = key; 

        let childrenUl = createTreeDom(value);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);

    }

    return ul;
}



function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) {
    let li = '';
    let ul;

    for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li';

    }

    if (li) {
        ul = '<ul>' + li + '</ul>';
    }

    return ul || '';
}
