const taskAddButton = document.getElementById("task-add-button");
const taskList = document.getElementById("checklist");
const taskAddInput = document.getElementById("add-task-input");

function createTask()
{
    taskList.insertAdjacentHTML("beforeend", `
        <div class="task-item">
            <span>${taskAddInput.value}</span>
        </div>
    `);
}

taskAddButton.addEventListener("click", createTask);