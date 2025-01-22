// search: it takes a substring as an argument and it returns the index of the first match.
// string.search(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'


// Search for the first occurrence of 'love' (case-sensitive)
console.log(string.search('love'));  // Output: 2

// Search for the first occurrence of 'javascript' (case-insensitive)
console.log(string.search(/javascript/i));  // Output: 7

// Search for all occurrences of 'javascript' globally and case-insensitively
let matches = string.match(/javascript/gi);
console.log(matches);  // Output: [ 'JavaScript', 'JavaScript' ]

// If no 'g' flag, it matches only the first occurrence
console.log(string.search(/javascript/i));  // Output: 7
