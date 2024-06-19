// Single line comment

/*
    Multi-line comment
*/

// Declaring variables using let and const
let variable1 = 10; // Variable declaration using let (mutable)
const constantVariable = 'Hello'; // Variable declaration using const (immutable)

// Print output to console
console.log('Hello, world!'); // Outputting a message to the console

// Conditional statement (if-else)
if (variable1 > 5) {
  // If the condition is true
  console.log('Variable1 is greater than 5'); // Output this message
} else {
  // Otherwise
  console.log('Variable1 is not greater than 5'); // Output this message
}

// Loops (for loop)
for (let i = 0; i < 5; i++) {
  // Loop from i=0 to i<5, increment i by 1 in each iteration
  console.log('Loop iteration: ' + i); // Output current loop iteration
}

// Function declaration
function greet(name) {
  // Declaring a function named 'greet' with parameter 'name'
  console.log('Hello, ' + name + '!'); // Output a personalized greeting message
}

// Function call
greet('Daggy'); // Call the 'greet' function with argument "John"
