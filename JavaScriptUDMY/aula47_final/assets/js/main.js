const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')

const createTask = (task) => {
    const li = document.createElement('li')
    li.textContent = task
    tasks.appendChild(li)
    clearInput();
    deleteTask(li);
    return;
}

function clearInput() {
    inputTask.value = "";
}

function deleteTask(li) {
    li.innerText += ' '
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete'
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
