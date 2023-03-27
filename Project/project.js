// Our variables
var submitButton = document.querySelector('.button');
var task = document.getElementById('task');
var description = document.getElementById('description');
var date = document.getElementById('date');
var taskContainer = document.getElementById('task-container');

// Creating our Task Object
class Task {
    constructor(task, description, date) {
        this.task = task;
        this.description = description;
        this.date = date;
    }
}

// Set up our tasks

// our submit handler
function submitTask(event) {
    event.preventDefault();
    const newTask = new Task(task.value, description.value, date.value);

    var singleTask = document.createElement('div');
    var taskTitle = document.createElement('h3');
    var taskDescription = document.createElement('p');
    var taskDate = document.createElement('span');

    singleTask.classList.add('single-task');

    taskTitle.innerText = newTask.task;
    taskDescription.innerText = newTask.description;
    taskDate.innerText = newTask.date;

    singleTask.appendChild(taskTitle);
    singleTask.appendChild(taskDescription);
    singleTask.appendChild(taskDate);

    console.log(newTask);

    taskContainer.appendChild(singleTask);
}

submitButton.addEventListener('click', submitTask);

