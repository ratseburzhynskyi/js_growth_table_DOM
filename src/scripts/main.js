'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;

let rows = 4;
let columns = 4;

const table = document.querySelector('.container');

const field = table.querySelector('.field');

const appendRowButton = table.querySelector('.append-row');
const removeRowButton = table.querySelector('.remove-row');
const appendColumnButton = table.querySelector('.append-column');
const removeColumnButton = table.querySelector('.remove-column');

const getTbody = () => {
  if (field.tBodies.length) {
    return field.tBodies[0];
  }

  return field.appendChild(document.createElement('tbody'));
};

const renderTable = () => {
  const tbody = getTbody();

  tbody.innerHTML = '';

  for (let r = 0; r < rows; r++) {
    const tr = document.createElement('tr');

    for (let c = 0; c < columns; c++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
};

const updateButtons = () => {
  appendRowButton.disabled = rows === MAX_SIZE;
  removeRowButton.disabled = rows === MIN_SIZE;
  appendColumnButton.disabled = columns === MAX_SIZE;
  removeColumnButton.disabled = columns === MIN_SIZE;
};

appendRowButton.addEventListener('click', () => {
  if (rows < MAX_SIZE) {
    rows++;
  }

  renderTable();
  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (rows > MIN_SIZE) {
    rows--;
  }

  renderTable();
  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  if (columns < MAX_SIZE) {
    columns++;
  }

  renderTable();
  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (columns > MIN_SIZE) {
    columns--;
  }

  renderTable();
  updateButtons();
});
