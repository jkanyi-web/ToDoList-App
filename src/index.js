/** @format */

import './style.css';
import addItem from './modules/addItem.js';

localStorage.setItem('items', '');

document.getElementById('formCreate').addEventListener('submit', (e) => {
  e.preventDefault();
  addItem();
});
