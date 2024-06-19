// 1. Scope:

function doSomething() {
  // 'var' has function scope (accessible within the entire function)
  var message = 'Hello from inside the function (var)';

  // 'let' has block scope (accessible only within this block)
  let greeting = 'Greetings from inside the function (let)';

  // 'const' has block scope (accessible only within this block)
  const PI = 3.14159;

  console.log(message); // Accessible
  console.log(greeting); // Accessible
  console.log(PI); // Accessible
}

doSomething();

// Trying to access these variables outside the function will result in errors
// console.log(message); // ReferenceError: message is not defined
// console.log(greeting); // ReferenceError: greeting is not defined
// console.log(PI);       // ReferenceError: PI is not defined

// 2. Re-declaration and Re-assignment:

// 'var' can be re-declared and re-assigned within the same scope
var globalVar = 'This is global';
var globalVar = 'This is also global'; // Re-declared
console.log(globalVar); // Output: "This is also global"

globalVar = 'Re-assigned value'; // Re-assigned
console.log(globalVar); // Output: "Re-assigned value"

// 'let' cannot be re-declared but can be re-assigned within the same block
let blockVar = 'This is in a block';
// let blockVar = "This will cause an error"; // Re-declaration error
blockVar = 'Re-assigned value';
console.log(blockVar); // Output: "Re-assigned value"

// 'const' cannot be re-declared or re-assigned
const CONSTANT_VALUE = 'This is a constant';
// CONSTANT_VALUE = "This will cause an error"; // Re-assignment error

// 3. Hoisting:

// 'var' variables are hoisted to the top of their scope (function or global) with a default value of `undefined`.
//You can access them before they are declared.
console.log(hoistedVar); // Output: undefined (hoisted but not initialized)
var hoistedVar = 'This is hoisted';

// 'let' and 'const' variables are not hoisted. Accessing them before declaration results in a reference error.
// console.log(hoistedLet); // ReferenceError: hoistedLet is not defined
// let hoistedLet = "This will cause an error";
// console.log(hoistedConst); // ReferenceError: hoistedConst is not defined
// const hoistedConst = "This will cause an error";

// Best Practices:

//   - Use `const` by default for variables that don't need to be re-assigned.
//   - Use `let` when you need to re-assign a variable within a block.
//   - Avoid using `var` in modern JavaScript
