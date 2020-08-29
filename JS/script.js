//Color Change App 
/*Pressing one of the buttons will change the background based on the color the button displays.
The buttons can be accessed using the DOM by their individual id's.
We can use the eventlistener "click" within a function to change the background when the button is clicked, to the buttons colour. 
Random button is clicked function produces a random colour by using Math.random saved to a variable to generate a hex number and then setting it to background. 
*/
const body = document.querySelector('body');
const redButton = document.getElementById('red-button');
redButton.addEventListener('click', changeBackgroundRed);

function changeBackgroundRed() {
    body.style.background = 'red';
}

const greenButton = document.getElementById('green-button');
greenButton.addEventListener('click', changeBackgroundGreen);

function changeBackgroundGreen() {
    body.style.background = 'green';
}

const blueButton = document.getElementById('blue-button');
blueButton.addEventListener('click', changeBackgroundBlue);

function changeBackgroundBlue() {
    body.style.background = 'blue';
}

const randomColourButton = document.getElementById('random-button');
randomColourButton.addEventListener('click', generateRandomColour);

function generateRandomColour() {
    let randomColour = '#' + Math.random().toString(16).substr(-6);
    body.style.background = randomColour;
    console.log(randomColour);
}
















