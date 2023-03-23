// Our variables
var submitButton = document.querySelector('.button');

// Creating our Task Object
class Task {
    constructor(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
    }
}

var task1 = new Task(
    'Wash Dishes',
    'I need to add soap and then rinse the plate.',
    '03-23-2023'
);

console.log(task1);
