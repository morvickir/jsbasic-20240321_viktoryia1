class UserTable {
  constructor(rows) {
    this.rows = rowsData;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = [ 'Имя', 'Возраст', 'Зарплата', 'Город', ''];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    this.rowsData.forEach(rowData => {
      const row = document.createElement('tr');
      Object.values(rowData).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
      const deleteButtonCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => {
        table.deleteRow(row.rowIndex);
      });
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
  }
}
