// eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback);

const myBox = document.getElementById("myBox");

// Click event listener
myBox.addEventListener("click", event => {
    // Change background color to tomato
    event.target.style.backgroundColor = "tomato";
    // Change text content to indicate click action
    event.target.textContent = "OUCH! 🤕";
});

// Mouseover event listener
myBox.addEventListener("mouseover", event => {
    // Change background color to yellow
    event.target.style.backgroundColor = "yellow";
    // Change text content to warn against action
    event.target.textContent = "Don't do it 😲";
});

// Mouseout event listener
myBox.addEventListener("mouseout", event => {
    // Change background color to lightgreen
    event.target.style.backgroundColor = "lightgreen";
    // Reset text content for normal state
    event.target.textContent = "Click Me 😀";
});

// Keydown event listener on the whole document
document.addEventListener("keydown", event => {
    // Change text content during key press
    myBox.textContent = "Let go, Please 😲";
    // Change background color to tomato during key press
    myBox.style.backgroundColor = "tomato";
});

// Keyup event listener on the whole document
document.addEventListener('keyup', event => {
    // Reset text content after key release
    myBox.textContent = "thank you 😲";
    // Reset background color to lightgreen after key release
    myBox.style.backgroundColor = "lightgreen";
});

