var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formE1.reset();

    // packages up the data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // sends it as an argument to createTaskE1
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {

    // creates the list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    // creates a div to hold task info and add it to the list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemE1.appendChild(taskInfoE1);

    // adds entire list item to list 
    tasksToDoE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", taskFormHandler);