// Get references to DOM elements
const todoInput = document.getElementById('todo-text');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Function to create a new to-do item
function createTodoItem(task) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const completeButton = document.createElement('button');
  completeButton.className = 'button complete-btn';
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    taskText.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'button delete-btn';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.appendChild(taskText);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);
}

// Add event listener for "Add" button
addButton.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task !== '') {
    createTodoItem(task);
    todoInput.value = ''; // Clear input
  } else {
    alert('Please enter a task.');
  }
});

// Optional: Add task on pressing Enter key
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});
