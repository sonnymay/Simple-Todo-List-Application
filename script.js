document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const todoInput = document.getElementById("todo-input");
    const task = todoInput.value;
    
    if (task) {
        const todoList = document.getElementById("todo-list");
        const listItem = document.createElement("li");
        listItem.textContent = task;
        listItem.addEventListener("click", toggleTask);
        listItem.addEventListener("dblclick", removeTask);

        todoList.appendChild(listItem);
        todoInput.value = "";
    }
}

function toggleTask(event) {
    event.target.classList.toggle("completed");
}

function removeTask(event) {
    event.target.remove();
}