function highlight(table) {
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      let cells = row.cells;
      let statusCell = cells[cells.length - 1];
      let dataAvailable = statusCell.getAttribute('data-available');
  
      if (dataAvailable === 'true') {
        row.classList.add('available');
      } else if (dataAvailable === 'false') {
        row.classList.add('unavailable');
      } else {
        row.setAttribute('hidden', '');
      }
      let genderCell = cells[2];
      let gender = genderCell.textContent;
  
      if (gender === 'm') {
        row.classList.add('male');
      } else if (gender === 'f') {
        row.classList.add('female');
      }
      let ageCell = cells[1];
      let age = parseInt(ageCell.textContent);
  
      if (age < 18) {
        row.style.textDecoration = 'line-through';
      }
    }
  }
 
  
