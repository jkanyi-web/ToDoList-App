/** @format */
import checkStatus from './checkStatus.js';
import deleteItem from './deleteItem.js';
import editItem from './editItem.js';

function loadItems() {
  const listContainer = document.querySelector('.list');

  listContainer.innerHTML = '';

  const tasks = [];

  if (localStorage.getItem('items').length > 0) {
    const items = JSON.parse(localStorage.getItem('items'));
    items.forEach((item) => {
      tasks.push(item);
    });
  }

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = `
          <input class="check" id="${task.index}" type="checkbox" name="checkbox">
          <p class="description">${task.description}</p>
          <i class="fa-solid fa-trash trash"></i>
  `;
    listContainer.append(li);
  });
  checkStatus();
  editItem();
  deleteItem();
}

export default loadItems;
