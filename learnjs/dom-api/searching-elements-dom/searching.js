// 1
let table = document.getElementById('age-table');


// 2
let labels = table.getElementsByTagName('label');
// или 
document.querySelectorAll('#age-table label')


// 3
table.rows[0].cells[0] 
// или
table.getElementsByTagName('td')[0];
// или
table.querySelector('td');


// 4
let form = document.getElementsByName('search')[0];
// или
document.querySelector('form[name="search"]');


// 5
let firstInput = form.getElementsByTagName('input')[0];
// или
form.querySelector('input');


// 6
let inputs = form.querySelectorAll('input');
inputs[inputs.length - 1];
