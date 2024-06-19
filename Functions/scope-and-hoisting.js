function example() {
  console.log(x); // Output: undefined
  var x = 5;
  console.log(x); // Output: 5
}
example();
// Variable hoisting example
console.log(myVar); // undefined
var myVar = 5; // Variable declaration is hoisted, but initialization remains here
console.log(myVar); // 5

// Function hoisting example
sayHello(); // "Hello!"

function sayHello() {
  console.log('Hello!');
}
