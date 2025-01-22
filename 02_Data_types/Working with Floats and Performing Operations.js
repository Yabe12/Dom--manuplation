// Declare a float (decimal number)
let decimalNumber = 15.75;

// Perform basic arithmetic operations
let sum = decimalNumber + 10;          // Add 10
let difference = decimalNumber - 5;    // Subtract 5
let product = decimalNumber * 2;       // Multiply by 2
let quotient = decimalNumber / 3;      // Divide by 3
let remainder = decimalNumber % 4;     // Modulus operation

console.log('Original Decimal:', decimalNumber);
console.log('Sum:', sum);              // 25.75
console.log('Difference:', difference); // 10.75
console.log('Product:', product);       // 31.5
console.log('Quotient:', quotient);     // 5.25
console.log('Remainder:', remainder);   // 3.75

// Use Math object methods
console.log('Rounded (nearest):', Math.round(decimalNumber)); // 16
console.log('Rounded down:', Math.floor(decimalNumber));      // 15
console.log('Rounded up:', Math.ceil(decimalNumber));         // 16
console.log('Square Root:', Math.sqrt(decimalNumber));        // 3.968626966596886
console.log('Power (2^3):', Math.pow(2, 3));                  // 8
console.log('Absolute Value:', Math.abs(-decimalNumber));     // 15.75

// Generate a random float between 0 and the decimal number
let randomFloat = Math.random() * decimalNumber;
console.log('Random Float (0 to decimalNumber):', randomFloat);

// Generate a random integer between 0 and the decimal number
let randomInteger = Math.floor(Math.random() * decimalNumber);
console.log('Random Integer (0 to decimalNumber):', randomInteger);