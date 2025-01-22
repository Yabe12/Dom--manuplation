Here’s the rewritten version of the provided text with improved formatting, consistency, and clarity:  

---

# 30 Days of JavaScript  

| **Day** | **Topics** |  
|---------|------------|  
| 01      | [Introduction](./readMe.md) |  
| 02      | [Data Types](./02_Data_types/02_data_types.md) |  
| 03      | [Booleans, Operators, Date](./03_Booleans_operators_date/03_booleans_operators_date.md) |  
| 04      | [Conditionals](./04_Conditionals/04_conditionals.md) |  
| 05      | [Destructuring and Spreading](./05_Destructuring_and_spreading/05_destructuring_and_spreading.md) |  
| 06      | [JSON](./06_JSON/06_json.md) |  
| 07      | [Closures](./07_Closures/07_closures.md) |  
| 10      | [DOM](./08_DOM/08_dom.md) |  

---

<div align="center">  
  <h1>JavaScript: Introduction</h1>  
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/yeabsira-behailu-19504b285/">  
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">  
  </a>  
  <sub>Author:  
    <a href="https://www.linkedin.com/in/yeabsira-behailu-19504b285/" target="_blank">Yeabsira Behailu</a>  
    <br><small>January, 2025</small>  
  </sub>  
</div>  

[Day 2 >>](./02_Data_types/02_data_types.md)  

---
## 📔 Day 1: Setting Up JavaScript  

### Getting Started  
Learn how to set up and use JavaScript in your web development projects.

---

### **Module: Introduction to JavaScript**

#### **1. What is JavaScript?**

**Definition:**  
JavaScript is a versatile programming language used to make web pages interactive. It powers animations, dynamic content, and real-time updates in modern web applications.

**Key Features:**
- **Object-Oriented:** Supports creating objects with properties and methods.
- **Cross-Platform:** Works on all modern browsers and with server-side platforms like Node.js.
- **Versatile:** Used in both frontend and backend development.

**Takeaway:**  
JavaScript is one of the core technologies of the web, alongside HTML and CSS.

---

#### **2. Core Concepts of JavaScript**

**a. ECMAScript (ES):**  
ECMAScript is the standard JavaScript follows to ensure consistent behavior across environments.

**b. How JavaScript Works in Web Development:**
- **HTML** provides structure.
- **CSS** provides styling.
- **JavaScript** adds interactivity and behavior.

**c. Linking JavaScript to HTML:**  
JavaScript can be included in two ways:
- **Inline:** Embedded within an HTML file.
- **External:** Referenced via a separate `.js` file.

---

### **3. Why Learn JavaScript?**

- **Universal Compatibility:** Runs on virtually all devices and browsers.
- **Interactive Features:** Enables animations, user interactions, and real-time updates.
- **Full-Stack Use:** Powers both frontend (via the browser) and backend (via Node.js).

---

### **4. Setting Up JavaScript**

#### **1. External JavaScript**

**HTML (index.html):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External JavaScript Example</title>
</head>
<body>
    <h1>External JavaScript Example</h1>
    <button onclick="showMessage()">Click Me</button>
    <script src="script.js"></script>
</body>
</html>
```

**JavaScript (script.js):**
```javascript
function showMessage() {
    alert("Hello! This is an external JavaScript example.");
}
```

**Explanation:**  
The `<script src="script.js"></script>` tag links the external JavaScript file. The `showMessage()` function triggers when the button is clicked.

---

#### **2. Inline JavaScript**

**HTML (index.html):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inline JavaScript Example</title>
</head>
<body>
    <h1>Inline JavaScript Example</h1>
    <button onclick="showMessage()">Click Me</button>
    <script>
        function showMessage() {
            alert("Hello! This is an inline JavaScript example.");
        }
    </script>
</body>
</html>
```

**Explanation:**  
Inline JavaScript is written directly inside a `<script>` tag in the HTML file.

---

### **5. Variables in JavaScript**

JavaScript supports three types of variables: `var`, `let`, and `const`. Each has unique behaviors and use cases.

#### **1. `var` (Function Scope)**

- **Features:**
  - Can be redeclared and updated.
  - Hoisted to the top of its scope.

- **Example:**
```javascript
var x = 5;
console.log(x); // Output: 5
x = 10;
console.log(x); // Output: 10
var x = 15;
console.log(x); // Output: 15
```

**Explanation:**  
`var` allows redeclaration and is function-scoped, which can lead to unexpected behavior.

---

#### **2. `let` (Block Scope)**

- **Features:**
  - Can be updated but not redeclared in the same block.
  - Provides predictable scoping.

- **Example:**
```javascript
let y = 20;
console.log(y); // Output: 20
y = 30;
console.log(y); // Output: 30
```

**Explanation:**  
`let` is block-scoped, reducing the chances of variable conflicts.

---

#### **3. `const` (Block Scope, Immutable)**

- **Features:**
  - Cannot be updated or redeclared.
  - Ideal for constants and unchanging values.

- **Example:**
```javascript
const z = 40;
console.log(z); // Output: 40
// z = 50; // Error: Assignment to constant variable.
```

**Explanation:**  
`const` ensures a variable’s value remains constant after declaration.

---

### **6. Practical Examples of Variables**

#### **Updating Variables:**
```javascript
// Using var
var count = 1;
console.log(count); // Output: 1
count = 2;
console.log(count); // Output: 2

// Using let
let countLet = 1;
console.log(countLet); // Output: 1
countLet = 2;
console.log(countLet); // Output: 2

// Using const
const countConst = 1;
console.log(countConst); // Output: 1
// countConst = 2; // Error: Cannot assign to a constant variable.
```

---

### **7. Writing and Testing JavaScript Code**

#### Using the Browser Console

Write and test JavaScript code in the browser’s console. For Google Chrome:
- **Mac:** `Command + Option + I`
- **Windows:** `Ctrl + Shift + I`

Use `console.log()` to output messages for testing.

**Example:**
```javascript
console.log('Hello, World!');
```

---

### Adding JavaScript to Web Pages

JavaScript can be integrated in three main ways:

#### **1. Inline Script**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to JavaScript!')">Click Me</button>
  </body>
</html>
```

#### **2. Internal Script**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Internal Script</title>
  </head>
  <body>
    <script>
      console.log('Welcome to JavaScript!');
    </script>
  </body>
</html>
```

#### **3. External Script**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>External Script</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

**In script.js:**
```javascript
console.log('Welcome to JavaScript!');
```

---

### **Conclusion and Next Steps**

- JavaScript is essential for creating dynamic and interactive web experiences.
- Understanding variables (`var`, `let`, `const`) is a foundational skill for writing effective JavaScript.
- Practice integrating JavaScript in web pages and experiment with the browser console to enhance your skills.

---

