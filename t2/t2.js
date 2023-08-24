// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
for (const i of todoList) {
  const list = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${i.id}`);
  if (i.completed) input.setAttribute('checked', 'checked');
  label.htmlFor = `todo-${i.id}`;
  label.textContent = i.task;
  list.appendChild(input);
  list.appendChild(label);
  document.getElementById('list').appendChild(list);
}
