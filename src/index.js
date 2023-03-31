/** @format */

import './style.css';
import addItem from './modules/addItem.js';
import updateItem from './modules/UpdateItem.js';

localStorage.setItem('items', '');

document.getElementById('formCreate').addEventListener('submit', (e) => {
  e.preventDefault();
  addItem();
});

document.getElementById('formUpdate').addEventListener('submit', (e) => {
  e.preventDefault();
  updateItem();
});