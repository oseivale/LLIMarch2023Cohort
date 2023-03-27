// Our variables
var submitButton = document.querySelector('.button');
var task = document.getElementById('name');
var description = document.getElementById('description');
var date = document.getElementById('date');

// Creating our Task Object
class Task {
    constructor(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
    }
}

// Set up our tasks

// our submit handler
function submitTask(event) {
    event.preventDefault();
    const newTask = new Task(task.value, description.value, date.value);

    console.log(newTask);
}

submitButton.addEventListener('click', submitTask);

