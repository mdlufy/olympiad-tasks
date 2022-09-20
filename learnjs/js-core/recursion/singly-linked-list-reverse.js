function printList(list) {
    let curr = list;

    const res = [];

    while (curr) {
        res.push(curr.value);
        curr = curr.next;
    }

    return res.reverse();
}

function printList(list) {
    let curr = list;

    if (curr.next) {
        printList(curr.next);
    }

    console.log(curr.value);
}

list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

console.log(printList(list));
