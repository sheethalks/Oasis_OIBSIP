function addTask() {
    var input = document.getElementById("task-input");
    var task = input.value.trim();
  
    if (task !== "") {
      var taskList = document.getElementById("task-list");
      var listItem = document.createElement("li");
      var taskText = document.createElement("span");
      var deleteButton = document.createElement("button");
  
      taskText.textContent = task;
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        taskList.removeChild(listItem);
      };
  
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
  
      input.value = "";
    }
  }
  