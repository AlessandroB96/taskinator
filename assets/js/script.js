var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do")


var taskFormHandler = function(event) {  


  //event occuring is the form submission of taskFormHandler. form submission always defaults to reloading page, so this prevents the default loading so we can store the new task
  event.preventDefault();

    //querySelector("element[attributeOfThatElement]")     selects an attribute of an HTML element 
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


  //Package up the data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as an arguement to createTaskEl
  createTaskEl(taskDataObj);
  };


    //function that holds the code that creates a new task HTML element
    var createTaskEl = function(taskDataObj) {
      // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";

        // create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

      listItemEl.appendChild(taskInfoEl);

      // add entire list item to list
      tasksToDoEl.appendChild(listItemEl);
    }

    formEl.addEventListener("submit", taskFormHandler);

