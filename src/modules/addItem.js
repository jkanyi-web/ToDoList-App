/** @format */
import reOrder from './reorder.js';
import loadItems from './loadItems.js';

function addItem() {
  const userInputValue = document.getElementById('input').value;

  const item = {
    description: userInputValue,
    completed: false,
    index: 0,
  };

  const itemArray = [];

  if (localStorage.getItem('items').length) {
    const currentItems = JSON.parse(localStorage.getItem('items'));

    if (currentItems.length > 0) {
      currentItems.forEach((item) => {
        itemArray.push(item);
      });
    }
  }

  if (item.description.trim().length > 0) {
    item.index = itemArray.length; // set the new item's index property
    itemArray.push(item);
  }

  localStorage.setItem('items', JSON.stringify(itemArray));

  reOrder();
  loadItems();

  document.getElementById('input').value = '';
}

export default addItem;
