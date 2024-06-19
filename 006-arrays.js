// Array Creation
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let myCampus = ['debre', 'berhan', 'university']; // Array of strings
let mixed = [1, 'two', true]; // Array of mixed data types

// Accessing Elements
console.log('First element of numbers:', numbers[0]); // Accessing the first element
console.log('Second element of fruits:', myCampus[1]); // Accessing the second element

// Array Length
console.log('Length of numbers array:', numbers.length); // Length of the numbers array

// Modifying Elements
myCampus[0] = 'in'; // Modifying the first element
console.log('Modified fruits array:', myCampus); // Output: Modified fruits array: ['pear', 'banana', 'orange']

// Adding Elements
myCampus.push('ethiopia'); // Adding an element at the end
console.log('Fruits array after push:', myCampus); // Output: Fruits array after push: ['pear', 'banana', 'orange', 'grape']

// Removing Elements
let removed = myCampus.pop(); // Removing the last element and storing it
console.log('Removed element:', removed); // Output: Removed element: grape
console.log('Fruits array after pop:', myCampus); // Output: Fruits array after pop: ['pear', 'banana', 'orange']

// Iterating over Arrays
myCampus.forEach(function (fruit) {
  // Iterating over each element and printing it
  console.log('Fruit:', fruit);
});

// Array Methods
let numbersCopy = numbers.slice(); // Creating a copy of the numbers array
console.log('Copy of numbers array:', numbersCopy); // Output: Copy of numbers array: [1, 2, 3, 4, 5]

let sliced = numbers.slice(1, 3); // Slicing a portion of the array
console.log('Sliced numbers array:', sliced); // Output: Sliced numbers array: [2, 3]

let reversed = numbers.reverse(); // Reversing the order of elements
console.log('Reversed numbers array:', reversed); // Output: Reversed numbers array: [5, 4, 3, 2, 1]

let sorted = numbers.sort(); // Sorting the array (in lexicographic order by default)
console.log('Sorted numbers array:', sorted); // Output: Sorted numbers array: [1, 2, 3, 4, 5]

let filtered = numbers.filter(function (num) {
  // Filtering even numbers
  return num % 2 === 0;
});
console.log('Filtered numbers array:', filtered); // Output: Filtered numbers array: [2, 4]

let mapped = numbers.map(function (num) {
  // Mapping each number to its square
  return num * num;
});
console.log('Mapped numbers array:', mapped); // Output: Mapped numbers array: [1, 4, 9, 16, 25]
