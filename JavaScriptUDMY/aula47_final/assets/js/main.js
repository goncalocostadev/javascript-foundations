const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')

const createTask = (task) => {
    const li = document.createElement('li')
    li.textContent = task
    tasks.appendChild(li)
    clearInput();
    createDeleteTask(li);
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
})