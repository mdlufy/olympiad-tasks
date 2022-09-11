function solution(value) {

    const roman = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ];

    const thousands = roman[3][Math.floor(value / 1000) % 10]
    const hundreds = roman[2][Math.floor((value / 100) % 10)];
    const dozens = roman[1][Math.floor((value / 10) % 10)];
    const units = roman[0][Math.floor(value % 10)];

    const romanValue = thousands + hundreds + dozens + units;

    return romanValue;
}

console.log(solution(1990));
