// Our variables
var submitButton = document.querySelector('.button');
var task = document.getElementById('task');
var description = document.getElementById('description');
var date = document.getElementById('date');
var taskContainer = document.getElementById('task-container');

// Declaring an empty array
let allTasks = []; 
let id = 0;

// Creating our Task Object
class Task {
    constructor(task, description, date) {
        this.task = task;
        this.description = description;
        this.date = date;
        this.id = id++;
    }
}

// Set up our tasks

// our submit handler
function submitTask(event) {
    // Prevents default browser behaviour
    event.preventDefault();
    // Creating a new instance of a TASK object
    const newTask = new Task(task.value, description.value, date.value);

    // Creating new elements on our page
    var singleTask = document.createElement('div');
    var taskTitle = document.createElement('h3');
    var taskDescription = document.createElement('p');
    var taskDate = document.createElement('span');

    // Add a new class to our newly-created div element
    singleTask.classList.add('single-task');
    singleTask.classList.add(`task-id-${newTask.id}`);

    // Set inner text of each text element
    taskTitle.innerText = newTask.task;
    taskDescription.innerText = newTask.description;
    taskDate.innerText = newTask.date;

    singleTask.appendChild(taskTitle);
    singleTask.appendChild(taskDescription);
    singleTask.appendChild(taskDate);

    console.log(newTask);
    allTasks.push(newTask);

    taskContainer.appendChild(singleTask);

    console.log(allTasks);
}

console.log(allTasks);

function deleteTask(event) {
    console.log(event.target.classList);
    const selectedId = document.querySelector(`task-id-${id}`);
    return allTasks.filter((task) => {
        task.id !== event.target.classList[1].split('-')[2];
        event.target.style.display = 'none';
    });

    // event.target.style.display = 'none';
}

// function deleteTask(id) {
//     return document.querySelector(`task-id-${id}`)
// }

submitButton.addEventListener('click', submitTask);
taskContainer.addEventListener('click', deleteTask);



