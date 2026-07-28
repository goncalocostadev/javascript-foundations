const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')

const createTask = (task) => {
    const li = document.createElement('li')
    li.textContent = task
    tasks.appendChild(li)
    clearInput();
    createDeleteTask(li);
    saveTasks();
    return;
}

function clearInput() {
    inputTask.value = "";
}

function createDeleteTask(li) {
    li.innerText += ' '
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete'
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.setAttribute('title', 'Delete this task');
    li.appendChild(deleteBtn);
}

inputTask.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
})

btnTask.addEventListener('click', function (e) {
    if (!inputTask.value) return;
    createTask(inputTask.value)
})



document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('delete')) {
        element.parentElement.remove();
    }
    saveTasks();
})

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const listOfTasks = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Delete', '').trim();
        listOfTasks.push(textTask);
    }

    const tasksJSON = JSON.stringify(listOfTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const listOfTasks = JSON.parse(tasks);
    if (!tasks) return;
    
    for (let task of listOfTasks) {
        createTask(task);
    }
}
addSavedTasks();