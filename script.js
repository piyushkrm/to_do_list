

// task adding
function addTask() {
    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTask);

    newTask.textContent = document.getElementById('taskInput').value;
    document.getElementById('taskInput').value = '';

    // delete old tasks
    deleteTask(newTask);

}


function deleteTask(newTask) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        newTask.parentNode.removeChild(newTask);
    });
}
