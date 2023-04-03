/** @format */

import loadItems from './loadItems.js';

function removeCompleted() {
  const clear = document.querySelector('.clear');

  clear.addEventListener('click', () => {
    const items = JSON.parse(localStorage.getItem('items')) || [];

    const filteredItems = items.filter((item) => !item.completed);

    localStorage.setItem('items', JSON.stringify(filteredItems));

    loadItems();
  });
}

export default removeCompleted;
