/** @format */

import loadItems from './loadItems.js';

function updateItem() {
  const items = JSON.parse(localStorage.getItem('items'));

  const updatedValue = document.getElementById('updateId').value;
  const itemIndex = document
    .getElementById('updateId')
    .getAttribute('elementid');

  items[itemIndex].description = updatedValue;

  localStorage.setItem('items', JSON.stringify(items));

  loadItems();

  document.getElementById('formCreate').style.display = 'block';
  document.getElementById('formUpdate').style.display = 'none';
}

export default updateItem;
