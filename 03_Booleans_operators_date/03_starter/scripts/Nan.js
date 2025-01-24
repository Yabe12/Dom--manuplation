// this is your main.js script
// Example 1: Invalid arithmetic operation
let result = 0 / 0; // Dividing zero by zero
console.log(result); // Output: NaN

// Example 2: Parsing a non-numeric string
let value = parseInt("hello");
console.log(value); // Output: NaN

// Example 3: Mathematical operations with undefined or invalid inputs
let invalidOperation = Math.sqrt(-1); // Square root of a negative number
console.log(invalidOperation); // Output: NaN

// Example 4: Performing arithmetic with non-numeric strings
let number = 10;
let invalidSum = number + "abc" * 2;
console.log(invalidSum); // Output: NaN

// console.log(NaN);              // NaN
// console.log(typeof NaN);       // "number"
// console.log(0 / 0);            // NaN (invalid math)
// console.log(Number("abc"));    // NaN (invalid conversion)
// console.log(isNaN(NaN));       // true
// console.log(NaN === NaN);      // false (special behavior of NaN)