function makeDiagonalRed(table) {
  let rowCount = table.rows.length;
  for (let i = 0; i < rowCount; i++) {
    let cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'red';
  }
}
