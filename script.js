document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
  
      if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
      }
    });
  
    function addTodoItem(todoText) {
      const li = document.createElement('li');
      li.innerText = todoText;
  
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
  
      todoList.appendChild(li);
    }
  });
  