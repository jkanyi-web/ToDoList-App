/** @format */
import reOrder from './reorder.js';

function checkNull(item) {
  return item.description !== null;
}

function deleteItem() {
  const items = JSON.parse(localStorage.getItem('items'));

  const deleteBtnz = document.querySelectorAll('.trash');
  deleteBtnz.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      delete items[index];
      const clean = items.filter(checkNull);
      localStorage.setItem('items', JSON.stringify(clean));
      reOrder();
      e.target.parentElement.style.display = 'none';
    });
  });
}

export default deleteItem;
