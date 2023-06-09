/** @format */

import './style.css';
import addItem from './modules/addItem.js';
import updateItem from './modules/UpdateItem.js';
import removeCompleted from './modules/removeCompleted.js';
import loadItems from './modules/loadItems.js';

if (localStorage.getItem('items') === null) {
  localStorage.setItem('items', '');
}

document.getElementById('formCreate').addEventListener('submit', (e) => {
  e.preventDefault();
  addItem();
});

document.getElementById('formUpdate').addEventListener('submit', (e) => {
  e.preventDefault();
  updateItem();
});

removeCompleted();
loadItems();
