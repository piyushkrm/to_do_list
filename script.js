function addTask() {
    const taskInput = document.getElementById("taskInput").value;
  
    // Only add the task if input is not empty
    if (taskInput.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskInput;
  
      // Add the new task to the list
      const taskList = document.getElementById("taskList");
      taskList.appendChild(newTask);
  
      // Clear the input field after adding the task
      document.getElementById("taskInput").value = "";
  
      // Add delete button to the task
      deleteTask(newTask);
    }
  }
  
  function deleteTask(newTask) {
    // Create a delete button and append it to the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newTask.appendChild(deleteButton);
  
    // Remove the task when the delete button is clicked
    deleteButton.addEventListener("click", () => {
      newTask.remove();  // A simpler way to remove the task
    });
  }
  