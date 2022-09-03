function printNumbers(from, to) {
    console.log(from);

    if (from < to) {
        from++;
        return setTimeout(printNumbers, 5000, from, to);
    }
}

function printNumbers(from, to) {
    let current = from;

    setTimeout(function timer() {
        console.log(current);
        
        if (current < to) {
            setTimeout(timer, 1000)
        }

        current++
    }, 1000)


}

function printNumbers(from, to) {
    let timerId = setInterval(() => {
        console.log(from);

        if (from < to) {
            from++;
        } else {
            clearInterval(timerId);
        }
    }, 500);

    return timerId;
}

printNumbers(1, 5);
