function createCalendar(elem, year, month) {
    const yearLeap = isYearLeap(year);
    const februaryDaysCount = yearLeap ? 29 : 28;

    const monthDaysCountArray = new Array(12);
    for (let i = 0; i < 12; i++) {
        monthDaysCountArray[i] = getMonthDaysCount(i + 1);
    }

    monthDaysCountArray[1] = februaryDaysCount;

    const monthDaysCount = monthDaysCountArray[month - 1];

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let headTr = document.createElement('tr');

    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    for (let i = 0; i < days.length; i++) {
        let th = document.createElement('th');
        th.textContent = days[i];

        headTr.append(th);
    }

    thead.append(headTr);
    table.append(thead);

    const tableRowsCount = Math.ceil(monthDaysCount / 7);

    const date = new Date(year, month - 1);

    const startDay = date.getDay();
    let currDay = 1;
    for (let i = 0; i < tableRowsCount; i++) {
        let tableRow = document.createElement('tr');

        for (let i = 0; i < 7; i++) {
            let day = document.createElement('td');
            day.textContent =
                currDay < startDay
                    ? ''
                    : currDay - startDay + 1 <= monthDaysCount
                    ? currDay - startDay + 1
                    : '';

            tableRow.append(day);

            currDay++;
        }

        table.append(tableRow);
    }

    elem.append(table);
}

function isYearLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getMonthDaysCount(x) {
    return 28 + ((x + Math.floor(x / 8)) % 2) + (2 % x) + 2 * Math.floor(1 / x);
}




function createCalendar(elem, year, month) {
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table =
        '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}
