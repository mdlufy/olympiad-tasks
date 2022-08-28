function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(ucFirst("ваcя"))
console.log(ucFirst(""))


function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.included('viagra') || lowerStr.includes('XXX')
}


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + "…" : str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))



function extractCurrencyValue(str) {
    return +str.slice(1)
}

console.log(extractCurrencyValue('$120'));