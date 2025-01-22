
<div align="center">
  <h1> JavaScript: Introduction</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/yeabsira-behailu-19504b285/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/yeabsira-behailu-19504b285/" target="_blank">Yeabsira Behailu</a><br>
<small> January, 2025</small>
</sub>

</div>

[<< 1](../readMe.md) | [ 3 >>](../03_Booleans_operators_date/03_booleans_operators_date.md)


# **Primitive and Non-Primitive Data Types**

---

## **1. Primitive Data Types**

### **Definition:**
Primitive data types are the most basic and immutable data types provided by a programming language. They store a single value directly in memory.

### **Examples in JavaScript:**
1. **Number**: Numeric values (e.g., `42`, `3.14`).
2. **String**: Textual data (e.g., `"Hello"`).
3. **Boolean**: Logical values (`true` or `false`).
4. **Undefined**: A variable declared but not assigned a value.
5. **Null**: Represents an intentional absence of value.
6. **BigInt**: Numbers beyond the safe integer range.
7. **Symbol**: Unique and immutable identifiers.

---

## **2. Non-Primitive Data Types**

### **Definition:**
Non-primitive data types are complex and mutable data structures that can store multiple values or methods. They store values by reference rather than directly.

### **Examples in JavaScript:**
1. **Object**: Key-value pairs (e.g., `{ name: "John", age: 30 }`).
   - **Explanation**: An object is a collection of properties, where each property has a name (key) and a value. For example, `{ name: "John", age: 30 }` represents a person with a name and age.

2. **Array**: Ordered list of elements (e.g., `[1, 2, 3]`).
   - **Explanation**: An array is a collection of elements stored in a specific order. For example, `[1, 2, 3]` represents a list of numbers, and each element can be accessed by its index.

3. **Function**: A block of reusable code.
   - **Explanation**: A function is a set of instructions that can be executed when called. For example, `function greet() { console.log("Hello!"); }` defines a reusable block of code that prints a greeting.

4. **Date**: Represents date and time.
   - **Explanation**: The `Date` object allows you to work with dates and times. For example, `new Date()` gives the current date and time.

---

## **3. Differences Between Primitive and Non-Primitive Data Types**

| **Aspect**                | **Primitive**                             | **Non-Primitive**                             |
|---------------------------|------------------------------------------|----------------------------------------------|
| **Storage**               | Stored directly in the variable.          | Stored by reference (memory address).         |
| **Mutability**            | Immutable (cannot be changed directly).   | Mutable (can be modified).                    |
| **Type**                  | Single value (simple).                    | Complex (can contain multiple values).        |
| **Memory**                | Requires less memory.                     | Requires more memory due to references.       |
| **Copying**               | Copying creates a new independent value.  | Copying shares the same reference unless deep copied. |
| **Example**               | `let x = 5;`                              | `let obj = { name: "Alice" };`               |

---

## **4. Examples for Each Difference**

### **Difference 1: Storage**

- **Primitive Example:**
```javascript
let a = 10; // Value is stored directly in the variable
a = 20; // Modifying 'a' doesn't impact any other variable
```
**Explanation:**
The variable `a` stores the value `10` directly. When `a` is updated to `20`, only the value in `a` is changed.

- **Non-Primitive Example:**
```javascript
let obj = { name: "Alice" }; // obj stores a reference to the object
```
**Explanation:**
The variable `obj` stores a reference (memory address) to the object `{ name: "Alice" }`. The object itself is not stored directly in `obj`. Instead, `obj` points to where the object is located in memory.

### **Difference 2: Mutability**

- **Primitive Example:**
```javascript
let str = "Hello";
str[0] = "Y"; // No effect, strings are immutable
console.log(str); // Output: "Hello"
```
**Explanation:**
Strings in JavaScript are immutable, so attempting to change `str[0]` has no effect. The original string remains unchanged.

- **Non-Primitive Example:**
```javascript
let arr = [1, 2, 3];
arr[0] = 10; // Modifies the array
console.log(arr); // Output: [10, 2, 3]
```
**Explanation:**
Arrays are mutable, so modifying `arr[0]` directly updates the array. The change is reflected when the array is logged.

Another Example:
```javascript
let person = { name: "John", age: 25 };
person.age = 26; // Modifies the 'age' property of the object
console.log(person); // Output: { name: "John", age: 26 }
```
**Explanation:**
Objects are also mutable. Changing the `age` property of the `person` object directly updates the same object.

### **Difference 3: Copying**

- **Primitive Example:**
```javascript
let x = 10;
let y = x; // y gets a copy of x's value
y = 20;
console.log(x); // Output: 10
console.log(y); // Output: 20
```
**Explanation:**
When `y` is assigned the value of `x`, it creates a separate copy. Changing `y` does not affect `x`, as they are independent.

- **Non-Primitive Example:**
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 gets the same reference as obj1
obj2.name = "Bob";
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob
```
**Explanation:**
Both `obj1` and `obj2` point to the same object in memory. Modifying the object using `obj2` also affects `obj1`, as they share the same reference.

Another Example:
```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to the same array as arr1
arr2.push(4); // Modifies the shared array
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
```
**Explanation:**
Since `arr1` and `arr2` refer to the same array, adding an element to `arr2` also affects `arr1` because they share the same reference.

---

## **5. Generalization**

1. **Primitive Data Types**: Simple, immutable, and directly store a single value. They are ideal for straightforward data like numbers, strings, and logical values.
2. **Non-Primitive Data Types**: Complex, mutable, and stored by reference. They are best suited for structured or large data like objects, arrays, and functions.

---



## Numbers

Numbers are integers and decimal values which can do all the arithmetic operations.
Let's see some examples of Numbers.

### Declaring Number Data Types

```js
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### Math Object

In JavaScript the Math Object provides a lots of methods to work with numbers.

```js
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```
### Example: Working with Floats and Performing Operations

In this example, we’ll declare a floating-point (decimal) number and perform various arithmetic operations and Math object methods.

```js
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
```

### Output:
For `decimalNumber = 15.75`, the program will produce outputs like:

```
Original Decimal: 15.75
Sum: 25.75
Difference: 10.75
Product: 31.5
Quotient: 5.25
Remainder: 3.75
Rounded (nearest): 16
Rounded down: 15
Rounded up: 16
Square Root: 3.968626966596886
Power (2^3): 8
Absolute Value: 15.75
Random Float (0 to decimalNumber): 12.483210659547236
Random Integer (0 to decimalNumber): 8
```

This demonstrates the use of arithmetic operations and Math methods with a decimal number.
#### Random Number Generator

The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...

```js
let randomNum = Math.random() // generates 0 to 0.999...
```

Now, let us see how we can use random() method to generate a random number between 0 and 10:

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

## Strings

Strings are texts, which are under **_single_**  , **_double_**, **_back-tick_** quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.
Let's see some examples of strings:

```js
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
```

### String Concatenation

Connecting two or more strings together is called concatenation.
Using the strings declared in the previous String section:

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

We can concatenate strings in different ways.

#### Concatenating Using Addition Operator

Concatenating using the addition operator is an old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenate this way, but I strongly suggest to use the ES6 template strings (explained later on).

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'yeabsira'
let lastName = 'behailu'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### Long Literal Strings

A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\\) at the end of each line to indicate that the string will continue on the next line.
**Example:**

```js
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
```

#### Escape Sequences in Strings

In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

- \n: new line
- \t: Tab, means 8 spaces
- \\\\: Back slash
- \\': Single quote (')
- \\": Double quote (")
  
```js
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```

Output in console:

```sh
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Template Literals (Template Strings)

To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Example: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Example:2**

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### String Methods

Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

1. *length*: The string *length* method returns the number of characters in a string included empty space.

**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *Accessing characters in a string*: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.

  ![Accessing sting by index](../images/string_indexes.png)
  
Let us access different characters in 'JavaScript' string.

```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: this method changes the string to uppercase letters.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: this method changes the string to lowercase letters.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: It takes two arguments, the starting index and number of characters to slice.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land
```

7. *split()*: The split method splits a string at a specified place.

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: Removes trailing space in the beginning or the end of a string.

```js
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: It takes a substring argument and it checks if substring argument exists in the string. *includes()* returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
```

10. *replace()*: takes as a parameter the old substring and a new substring.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Takes index and it returns the value at that index

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Takes index and it returns char code (ASCII number) of the value at that index

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13.  *indexOf()*: Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1


```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: it takes many substrings and joins them.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

```js
string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *search*: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or  a regular expression pattern.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

```js
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
```

Match syntax

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

The regular expression /\d+/g matches all sequences of one or more consecutive digits (0-9) in a string, searching globally throughout the string due to the g flag.


20. *repeat()*: it takes a number as argument and it returns the repeated version of the string.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Checking Data Types and Casting

### Checking Data Types

To check the data type of a certain variable we use the _typeof_ method.

**Example:**

```js
// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Changing Data Type (Casting)

- Casting: Converting one data type to another data type. We use _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

#### String to Int

We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc.
We can convert string to number using the following methods:

- parseInt()
- Number()
- Plus sign(+)
The methods `parseInt()`, `Number()`, and the **plus sign** (`+`) are used in JavaScript to convert strings or other values into numbers, but they differ in behavior and use cases. Here's a detailed comparison:

---

### 1. **`parseInt()`**
- **Purpose**: Parses a string and converts it to an integer by reading characters until a non-numeric character is found.
- **Returns**: An integer value or `NaN` if the string cannot be converted.
- **Behavior**:
  - Ignores leading/trailing spaces.
  - Stops parsing at the first non-numeric character.
  - Does not handle decimals properly; truncates the fractional part.
  - Can accept a second argument, `radix`, which specifies the base (e.g., binary, octal, decimal).

#### Example:
```js
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42 (stops at "px")
console.log(parseInt("3.14"));     // 3 (truncates decimal part)
console.log(parseInt("abc42"));    // NaN (starts with non-numeric)
console.log(parseInt("101", 2));   // 5 (binary to decimal)
```

---

### 2. **`Number()`**
- **Purpose**: Converts a value to a number, including integers and floating-point numbers.
- **Returns**: A number or `NaN` if the value cannot be converted.
- **Behavior**:
  - Converts the entire string into a number.
  - Handles decimals and exponential notation.
  - Does not stop parsing at non-numeric characters; if the string contains invalid characters, it returns `NaN`.

#### Example:
```js
console.log(Number("42"));         // 42
console.log(Number("3.14"));       // 3.14
console.log(Number("42px"));       // NaN (invalid characters)
console.log(Number("   42  "));    // 42 (trims whitespace)
console.log(Number(""));           // 0 (empty string)
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN
```

---

### 3. **Plus Sign (`+`)**
- **Purpose**: Similar to `Number()`, it attempts to convert a value to a number.
- **Returns**: A number or `NaN` if the value cannot be converted.
- **Behavior**:
  - Converts strings to numbers, including floating-point numbers.
  - Handles `null`, `undefined`, and whitespace like `Number()`.
  - Often used as a shorthand for number conversion.
  - Works slightly faster than `Number()` because it's a unary operator.

#### Example:
```js
console.log(+"42");                // 42
console.log(+"3.14");              // 3.14
console.log(+"42px");              // NaN
console.log(+("   42  "));         // 42 (trims whitespace)
console.log(+"");                  // 0
console.log(+null);                // 0
console.log(+undefined);           // NaN
```

---

### Key Differences at a Glance:

| Feature                  | **`parseInt()`**         | **`Number()`**         | **`+` (Plus Sign)**       |
|--------------------------|--------------------------|-------------------------|---------------------------|
| **Primary Use**          | Converts to integer only | Converts to number      | Converts to number        |
| **Handles Decimals**     | No (truncates decimals)  | Yes                     | Yes                       |
| **Stops at Non-Numeric** | Yes                     | No                      | No                        |
| **Empty String**         | `NaN`                   | `0`                     | `0`                       |
| **Handles `null`**       | `NaN`                   | `0`                     | `0`                       |
| **Handles `undefined`**  | `NaN`                   | `NaN`                   | `NaN`                     |
| **Radix Argument**       | Yes (e.g., binary)       | No                      | No                        |
| **Performance**          | Slower                  | Medium                  | Fast                      |

---

### Combined Example:

```js
console.log(parseInt("42.5"));      // 42 (integer only)
console.log(Number("42.5"));        // 42.5
console.log(+"42.5");               // 42.5

console.log(parseInt("42px"));      // 42 (stops at "px")
console.log(Number("42px"));        // NaN
console.log(+"42px");               // NaN

console.log(parseInt("   42  "));   // 42
console.log(Number("   42  "));     // 42
console.log(+("   42  "));          // 42
```

---

### Use Cases:
- Use **`parseInt()`** when you only need the **integer part** of a number or when working with specific numeric bases (e.g., binary, octal).
- Use **`Number()`** or **`+`** when you need to convert values to full **floating-point numbers**.
- Use the **`+`** operator as a shorthand for quick number conversion.

#### String to Float

We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc.
We can convert string float to number using the following methods:

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```

#### Float to Int

We can convert float numbers to integers.
We use the following method to convert float to int:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  You are awesome. You have just completed day 2 challenges and you are two steps ahead on your way to greatness. Now do some exercises for your brain and for your muscle.  

## 💻 Day 2: Exercises

### Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
2. Print the string on the browser console using __console.log()__
3. Print the __length__ of the string on the browser console using _console.log()_
4. Change all the string characters to capital letters using __toUpperCase()__ method
5. Change all the string characters to lowercase letters using __toLowerCase()__ method
6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
8. Check if the string contains a word __Script__ using __includes()__ method
9. Split the __string__ into an __array__ using __split()__ method
10. Split the string 30 Days Of JavaScript at the space using __split()__ method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times

### Exercise: Level 2

1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10. Access the 'JavaScript' string characters using a random number.
11. Use console.log() and escape characters to print the following pattern.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

### Exercises: Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'



[<< 1](../readMe.md) | [ 3 >>](../03_Booleans_operators_date/03_booleans_operators_date.md)
