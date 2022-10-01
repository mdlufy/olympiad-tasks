<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>Smith</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Pete</td>
            <td>Brown</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Ann</td>
            <td>Lee</td>
            <td>5</td>
        </tr>
        <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
        </tr>
    </tbody>
</table>;

HTMLTableSectionElement.prototype.sort = function (cb) {
    Array.from(this.rows)
        .slice(1)
        .sort(cb)
        .forEach((e) => this.appendChild(this.removeChild(e)));
};
document
    .querySelector('table')
    .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));



let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) =>
        rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    );

table.tBodies[0].append(...sortedRows);
