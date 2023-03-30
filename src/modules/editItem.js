/** @format */

function editItem() {
  const items = JSON.parse(localStorage.getItem('items'));
  const paragraphs = document.querySelectorAll('.description');
  paragraphs.forEach((paragraph, index) => {
    paragraph.addEventListener('click', () => {
      paragraph.contentEditable = true;
      paragraph.addEventListener('blur', () => {
        items[index].description = paragraph.textContent;
        localStorage.setItem('items', JSON.stringify(items));
      });
    });
  });
}

export default editItem;
