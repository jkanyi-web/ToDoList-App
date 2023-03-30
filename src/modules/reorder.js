/** @format */

function reOrder() {
  if (localStorage.getItem('items').length > 0) {
    const list = [];

    const items = JSON.parse(localStorage.getItem('items'));

    items.forEach((item, index) => {
      item.index = index;
      list.push(item);
    });

    localStorage.setItem('items', JSON.stringify(list));
  }
}

export default reOrder;
