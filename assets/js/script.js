var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do")


var createTaskHandler = function(event) {  


  //event occuring is the form submission of createTaskHandler. form submission always defaults to reloading page, so this prevents the default loading so we can store the new task
  event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    }

formEl.addEventListener("submit", createTaskHandler);
