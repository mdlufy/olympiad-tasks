function copySorted(arr) {
    return [...arr].sort()
    return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr))