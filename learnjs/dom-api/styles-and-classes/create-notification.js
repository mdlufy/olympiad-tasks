function showNotification(options) {
    let div = document.createElement('div');

    div.className = 'notification';

    if (options.className) {
        div.classList.add(options.className);
    }

    div.style.top = options.top + 'px';
    div.style.right = options.right + 'px';

    div.innerHTML = options.html;

    document.body.append(div);

    setTimeout(() => div.remove(), 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: 'welcome',
    });
}, 2000);
