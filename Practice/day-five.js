var myButton = document.querySelector('.my-button');
var myDiv = document.getElementById('my-div');

myButton.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerText = 'Hello World';

    myDiv.appendChild(newParagraph);
});
