/** @format */
function edit() {
  const editItems = document.querySelectorAll('.fa-edit');

  editItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      document.getElementById('formCreate').style.display = 'none';
      document.getElementById('formUpdate').style.display = 'block';
      document.getElementById('updateId').setAttribute('elementid', index);

      const previousSibling = item.previousElementSibling;

      document.getElementById('updateId').value = previousSibling.textContent;
    });
  });
}

export default edit;
