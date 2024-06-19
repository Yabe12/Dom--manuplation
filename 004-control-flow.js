// Conditional statements
let age = 20;

if (age >= 18) {
  // If the age is greater than or equal to 18
  console.log('You are eligible to vote.');
} else {
  // Otherwise
  console.log('You are not eligible to vote yet.');
}

// Switch statement
let day = 'Monday';

switch (
  day // Evaluates the value of 'day'
) {
  case 'Monday': // If 'day' is "Monday"
    console.log('Today is Monday.');
    break;
  case 'Tuesday': // If 'day' is "Tuesday"
    console.log('Today is Tuesday.');
    break;
  default: // If 'day' doesn't match any case
    console.log('Unknown day.');
}
