// Function Declaration
function greet(name) {
  // This function greets the user with the provided name
  console.log('Hello, ' + name + '!');
}

greet('Daggy'); // Output: Hello, Daggy!

// Function with Parameters and Return Value
function add(a, b) {
  // This function adds two numbers and returns the result
  return a + b;
}

let result = add(3, 5); // Calling the add function with arguments 3 and 5
console.log('Result of addition:', result); // Output: Result of addition: 8

// Function with Default Parameters
function greetUser(name = 'Guest') {
  // This function greets the user with a default name of "Guest"
  console.log('Hello, ' + name + '!');
}

greetUser(); // Output: Hello, Guest!
greetUser('John'); // Output: Hello, Alice!

// Function Expression (Anonymous Function)
let sayHello = function () {
  // This is an anonymous function that says hello
  console.log('Hello!');
};

sayHello(); // Output: Hello!

// Arrow Function
let square = (num) => {
  // This arrow function returns the square of a number
  return num * num;
};

console.log('Square of 5:', square(5)); // Output: Square of 5: 25

// Higher-Order Functions
function double(x) {
  // This function doubles a number
  return x * 2;
}

function applyOperation(num, operation) {
  // This function applies the specified operation to the given number
  return operation(num);
}

let resultDouble = applyOperation(3, double); // Passing double function as an argument
console.log('Result of applying double:', resultDouble); // Output: Result of applying double: 6

// Nested Functions
function outerFunction() {
  // This is the outer function
  console.log('Outer function');

  function innerFunction() {
    // This is the inner function
    console.log('Inner function');
  }

  innerFunction(); // Calling the inner function
}

outerFunction(); // Output: Outer function, Inner function

// Closure
function createCounter() {
  // This function creates a counter using closure
  let count = 0;

  return function () {
    // This inner function increments the counter
    count++;
    console.log('Count:', count);
  };
}

let counter = createCounter(); // Creating a counter function
counter(); // Output: Count: 1
counter(); // Output: Count: 2

// Recursion
function factorial(n) {
  // This function calculates the factorial of a number recursively
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log('Factorial of 5:', factorial(5)); // Output: Factorial of 5: 120
