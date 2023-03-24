import './style.css';

const listContainer = document.querySelector('.list');

const tasks = [
  {
    description: 'Cook',
    completed: false,
    index: 1,
  },
  {
    description: 'complete project',
    completed: false,
    index: 2,
  },
  {
    description: 'rest',
    completed: false,
    index: 3,
  },
];

tasks.sort((a, b) => a.index - b.index);

tasks.forEach((task) => {
  const li = document.createElement('li');
  li.classList.add('task');
  li.innerHTML = `
        <label for="${task.index}">
          <input type="checkbox" name="checkbox" id="${task.index}">
          <p>${task.description}</p>
        </label>
        <i class="fa-solid fa-trash"></i>      
  `;
  listContainer.append(li);
});