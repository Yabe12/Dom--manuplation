// Traditional function
function multiply(a, b) {
  return a * b;
}

// Arrow function
const multiply = (a, b) => a * b;

// High-order function
function operation(a, b, func) {
  return func(a, b);
}
console.log(operation(3, 4, multiply)); // Output: 12
