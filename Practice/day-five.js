var myButton = document.querySelector('.my-button');
var myDiv = document.getElementById('my-div');

// DOM Manipulation

myButton.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerText = 'Hello World';

    myDiv.appendChild(newParagraph);
});

// Functions - Breaking things down

// Original JS syntax 
function printMessage(name, age){
    // concatenation of a string
    return "Hi, my name is "+ name + ". And I am "+ age + " years old."
}

// ES6 Arrow Function Syntax 
const printTotal = (num1, num2, num3) => {
    return num1 + num2 + num3
}

// Our function calls:

console.log(printMessage("Jonny", "16"))

console.log(printTotal(2,6,7))
