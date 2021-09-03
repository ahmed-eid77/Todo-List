// Selectors
 const body = document.querySelector('body');
 const todoInput = document.querySelector(".todo-input");
 const todoButton = document.querySelector(".todo-btn");
 const todoList = document.querySelector(".todo-list");
 const colorButton = document.querySelector(".color-btn");
 const submitColorButton = document.querySelector(".submit-color-btn");
 const noTasks = document.querySelector(".no-tasks");
 const myNodelist = document.querySelectorAll(".no-tasks");

 // Event Listeners
 todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteComplete);
submitColorButton.addEventListener('click', changeColor);

 // Fuctions
 function addTodo(event) {
     event.preventDefault();
     
     // Todo Div
     const todoDiv = document.createElement('div');
     todoDiv.classList.add("todo");
     // Create Li 
     const newTodo = document.createElement('li');
     if(todoInput.value !== ''){
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
     }else{
         todoDiv.style.display = "none";
         return;
     }
     // Check Button
     const completedButton = document.createElement('button');
     completedButton.innerText = 'Checked';
     completedButton.classList.add("completed-btn", "btn", "btn-success");
     todoDiv.appendChild(completedButton);
      // Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'delete';
      deleteButton.classList.add("delete-btn", "btn", "btn-danger");
      todoDiv.appendChild(deleteButton);
      // Append Div To Todolidt
      todoList.appendChild(todoDiv);
      // clear Input Value
      todoInput.value = '';
      // delet no tasks li
      if(todoList.childNodes.length > 1){
        noTasks.style.display = "none"
     }
 }

function deleteComplete(e) {
    const item = e.target;
    // Delete li
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        //todo.remove();
    }

    // check li 
    if (item.classList[0] === 'completed-btn'){
        const todo = item.previousElementSibling;
        todo.classList.toggle("completed");
    }
}


function changeColor(event){
    event.preventDefault();
    body.style.backgroundColor = colorButton.value;
}