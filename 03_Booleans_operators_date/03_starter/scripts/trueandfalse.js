// Truthy and Falsy Examples Using Boolean()

console.log("Truthy Values:");
console.log(Boolean(42));         // true, non-zero number
console.log(Boolean(-42));        // true, negative non-zero number
console.log(Boolean("Hello"));    // true, non-empty string
console.log(Boolean(" "));        // true, string with spaces
console.log(Boolean([]));         // true, empty array
console.log(Boolean({}));         // true, empty object
console.log(Boolean(true));       // true, boolean true

console.log("\nFalsy Values:");
console.log(Boolean(0));          // false, zero
console.log(Boolean(0n));         // false, BigInt zero
console.log(Boolean(null));       // false, null
console.log(Boolean(undefined));  // false, undefined
console.log(Boolean(NaN));        // false, Not-a-Number
console.log(Boolean(false));      // false, boolean false
console.log(Boolean(""));         // false, empty string (single quotes)
console.log(Boolean(""));         // false, empty string (double quotes)
console.log(Boolean(``));         // false, empty string (backticks)

// Extra Examples
console.log("\nAdditional Examples:");
console.log(Boolean("false"));    // true, non-empty string
console.log(Boolean("0"));        // true, non-empty string
console.log(Boolean(Infinity));   // true, Infinity
console.log(Boolean(-Infinity));  // true, negative Infinity
