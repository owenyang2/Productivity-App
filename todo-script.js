const taskAddButton = document.getElementById("task-add-button");
const taskList = document.getElementById("checklist");
const taskAddInput = document.getElementById("add-task-input");

function createTask()
{
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    const taskText = document.createElement("span");
    taskText.innerText = taskAddInput.value;
    
    const taskButton = document.createElement("button");
    taskButton.innerText = "X";

    taskItem.insertAdjacentElement("beforeend", taskText);
    taskItem.insertAdjacentElement("beforeend", taskButton);

    taskList.insertAdjacentElement("beforeend", taskItem);

    taskButton.addEventListener("click", () => {
        taskItem.remove();
    })
}

taskAddButton.addEventListener("click", createTask);