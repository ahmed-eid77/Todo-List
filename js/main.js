//plugins 
$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '38px' });





// Selectors
 const addSection = document.querySelector('.add-section');
 const headerSection = document.querySelector('.header-section');
 const todoInput = document.querySelector(".todo-input");
 const todoButton = document.querySelector(".todo-btn");
 const todoList = document.querySelector(".todo-list");
 const colorButton = document.querySelector(".color-btn");
 const submitColorButton = document.querySelector(".submit-color-btn");
 const noTasks = document.querySelector(".no-tasks");
 const filter = document.querySelector(".filter");

 // Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteComplete);
submitColorButton.addEventListener('click', changeColor);
filter.addEventListener('click',filterList)

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
         alert("Invalid Data. Try Again");
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
      noTasks.style.display = "none";
     
 }


 // To delete OR completed tasks
function deleteComplete(e,) {
    const item = e.target;
    // Delete li
    if(item.classList.contains("delete-btn")){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        
        if(todoList.children.length <= 1){
            noTasks.style.display = "flex"
        }
    }

    // check li 
    if (item.classList.contains('completed-btn')){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function changeColor(event){
    event.preventDefault();
    addSection.style.backgroundColor = colorButton.value;
    headerSection.style.backgroundColor = colorButton.value;
}

function filterList(e){
     const todos = todoList.childNodes[0];
     
     todos.foreach(function(todos){
        switch(e.target.value){
            case "all":
                todos.style.display = "flex"
                break;
            case "completed":
                if (todos.classList.contains("completed")){
                    todos.style.display = "flex";
                }else{
                    todos.style.display = "none";
                }
                break;
        }
     })
}