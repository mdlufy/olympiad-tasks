let lis = document.querySelectorAll('li');

for (let li of lis) {
    let descedantsCount = li.querySelectorAll('li').length;

    if (!descedantsCount) continue;

    li.firstChild.data += ' [' + descedantsCount + ']';
}
