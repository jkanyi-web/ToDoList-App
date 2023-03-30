/** @format */

import editItem from './editItem.js';

function checkStatus() {
  const items = JSON.parse(localStorage.getItem('items'));
  const checkBoxes = document.querySelectorAll('.check');

  checkBoxes.forEach((box, index) => {
    const paragraph = box.nextElementSibling;

    if (
      paragraph.contentEditable !== 'true'
      && paragraph.textContent !== items[index].description
    ) {
      paragraph.textContent = items[index].description;
    }

    box.checked = items[index].completed;
    if (items[index].completed) {
      paragraph.style.textDecoration = 'line-through';
      paragraph.style.color = '#999';
    } else {
      paragraph.style.textDecoration = 'none';
      paragraph.style.color = 'black';
    }

    box.addEventListener('click', () => {
      items[index].completed = box.checked;
      if (items[index].completed) {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = '#999';
      } else {
        paragraph.style.textDecoration = 'none';
        paragraph.style.color = 'black';
      }
      localStorage.setItem('items', JSON.stringify(items));
    });
  });

  editItem();
}

export default checkStatus;
