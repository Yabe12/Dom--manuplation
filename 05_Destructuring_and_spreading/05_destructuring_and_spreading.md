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

[<< 04](../04_Conditionals/04_Conditionals.md) | [06>>](../06_JSON/06_JSON.md)
# Destructuring and Spread



---

## **Destructuring Arrays in JavaScript**

Array destructuring is a concise way to extract values from an array and assign them to variables. This technique simplifies code readability and makes it easier to work with array elements.

### **1. Basic Array Destructuring**
We can extract values from an array and assign them to variables using array destructuring:

```js
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);
```

**Output:**
```sh
1 2 3
```
Here:
- `numOne` gets the first element (`1`)
- `numTwo` gets the second element (`2`)
- `numThree` gets the third element (`3`)

---

### **2. Destructuring an Array of Strings**
We can also destructure an array containing string elements:

```js
const names = ['Asabeneh', 'Brook', 'David', 'John'];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
```

**Output:**
```sh
Asabeneh Brook David John
```

Each variable gets the corresponding value in the array.

---

### **3. Destructuring an Array of Scientific Constants**
We can destructure arrays of numbers to extract multiple values:

```js
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);
```

**Output:**
```sh
2.72 3.14 9.81 37 100
```
Here, each variable (`e`, `pi`, `gravity`, etc.) is assigned to its corresponding value from the `scientificConstants` array.

---

### **4. Destructuring Nested Arrays**
When an array contains other arrays, we can destructure them into separate variables:

```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);
```

**Output:**
```sh
["HTML", "CSS", "JS", "React"]
["Node", "Express", "MongoDB"]
```
Here:
- `frontEnd` is assigned the first nested array: `['HTML', 'CSS', 'JS', 'React']`
- `backEnd` is assigned the second nested array: `['Node', 'Express', 'MongoDB']`

---

### **5. Skipping Elements in an Array**
We can use commas (`,`) to skip values that we don't need:

```js
const numbers = [1, 2, 3];
let [numOne, , numThree] = numbers; // Skips the second element (2)

console.log(numOne, numThree);
```

**Output:**
```sh
1 3
```

Another example:

```js
const names = ['Asabeneh', 'Brook', 'David', 'John'];
let [, secondPerson, , fourthPerson] = names; // Skips first and third person

console.log(secondPerson, fourthPerson);
```

**Output:**
```sh
Brook John
```
In this case:
- The **first** value is skipped (`Asabeneh`)
- The **third** value is skipped (`David`)

---

### **6. Using Default Values**
If an element in the array is `undefined`, we can provide a **default value** to fall back on:

```js
const names = [undefined, 'Bro', 'David'];
let [
  firstPerson = 'luna',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
```

**Output:**
```sh
luna Bro David John
```

Explanation:
- `firstPerson` is `undefined`, so it takes the **default value** `'Asabeneh'`
- `fourthPerson` is missing in the array, so it takes the **default value** `'John'`

---

### **7. Destructuring with the Spread Operator (`...`)**
We can assign only the first few elements to variables and collect the **remaining elements** into a separate array using the **spread operator (`...`)**:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);
```

**Output:**
```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

- `num1 = 1`
- `num2 = 2`
- `num3 = 3`
- `rest = [4, 5, 6, 7, 8, 9, 10]` (an array of the remaining numbers)

---

## **Conclusion**
Array destructuring is a powerful feature in JavaScript that simplifies working with arrays. It allows us to:
✅ Assign multiple values from an array into variables  
✅ Skip elements using commas  
✅ Provide default values for missing elements  
✅ Use the spread operator (`...`) to capture the remaining elements  
# **Destructuring During Iteration in JavaScript**

In JavaScript, **array destructuring** can be used not only for assigning values to variables but also within loops to extract elements efficiently. This is particularly useful when iterating over **nested arrays** (arrays of arrays).

---

## **1. Destructuring Inside a `for...of` Loop**
A `for...of` loop allows us to iterate over an array, and destructuring enables us to directly extract values from each element of the array.

### **Example: Iterating Over an Array of Arrays**
Consider the following **array of country-capital pairs**:

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
];
let[some,something,other]= countries
for (const [country, city] of countries) {
  console.log(country, city);
}
```

**Output:**
```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

### **Explanation:**
- `countries` is an **array of arrays**, where each sub-array contains a country name and its capital.
- The `for...of` loop iterates through each sub-array.
- **Array destructuring** inside the loop:
  - The first value (`country`) is assigned to the country name.
  - The second value (`city`) is assigned to the capital.
- Each country-capital pair is printed in each iteration.

---

## **2. Destructuring Nested Arrays During Iteration**
We can apply the same concept to more complex arrays, such as an array representing **front-end and back-end technologies**.

### **Example: Iterating Over a Multi-Level Array**
```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}
```

**Output:**
```sh
HTML CSS JS
Node Express MongoDB
```

### **Explanation:**
- `fullStack` is a **nested array**, where:
  - The **first sub-array** represents front-end technologies: `['HTML', 'CSS', 'JS', 'React']`
  - The **second sub-array** represents back-end technologies: `['Node', 'Express', 'MongoDB']`
- Inside the loop:
  - `first`, `second`, and `third` get the first, second, and third values from each sub-array.
  - The remaining elements are **ignored** because only three variables (`first, second, third`) are defined.
- When looping through:
  - The first iteration prints: **HTML, CSS, JS** (React is ignored)
  - The second iteration prints: **Node, Express, MongoDB** (MongoDB is ignored)

---

## **3. Handling Extra or Missing Elements**
If the sub-arrays contain **more or fewer** elements than expected, we can use:
- **Skipping values** using `,`
- **Default values** for missing elements
- **The spread operator (`...`)** to capture extra values

### **Example: Handling Extra Values with Spread Operator**
```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const [first, second, ...others] of fullStack) {
  console.log(first, second, others);
}
```

**Output:**
```sh
HTML CSS ['JS', 'React']
Node Express ['MongoDB']
```

### **Explanation:**
- The first two values (`first` and `second`) are assigned normally.
- The rest of the values (`...others`) are collected into an **array**.

---

## **4. Providing Default Values for Missing Elements**
If some sub-arrays have fewer elements than expected, we can set **default values**:

```js
const data = [
  ['Alice', 'Developer'],
  ['Bob'], // Missing job title
  ['Charlie', 'Designer']
];

for (const [name, role = 'Unknown'] of data) {
  console.log(name, role);
}
```

**Output:**
```sh
Alice Developer
Bob Unknown
Charlie Designer
```

### **Explanation:**
- `role = 'Unknown'` ensures that if a sub-array **lacks a second value**, the variable `role` defaults to `"Unknown"` instead of `undefined`.

---

## **Conclusion**
✅ **Destructuring during iteration** simplifies working with **nested arrays**.  
✅ It helps **extract values directly** from sub-arrays while looping.  
✅ We can **skip values, provide defaults, or capture extra elements** using `,`, `=`, and `...`.  


# **Destructuring Objects in JavaScript**

In JavaScript, **object destructuring** allows us to extract properties from an object and assign them to variables in a concise way. This technique improves readability and reduces the need to access object properties using dot notation (`object.property`).

---

## **1. Basic Object Destructuring**
When destructuring an object, the variable names **must match** the keys (property names) of the object.

### **Example: Destructuring an Object**
```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);
```

**Output:**
```sh
20 10 200 undefined
```

### **Explanation:**
- `width`, `height`, and `area` exist in `rectangle`, so they are assigned their respective values.
- `perimeter` **does not exist** in the object, so it is assigned `undefined`.

---

## **2. Renaming Variables During Destructuring**
We can rename variables while destructuring using the syntax:  
```js
{ propertyName: newVariableName }
```

### **Example: Renaming Variables**
```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);
```

**Output:**
```sh
20 10 200 undefined
```

### **Explanation:**
- `width` is renamed to `w`
- `height` is renamed to `h`
- `area` is renamed to `a`
- `perimeter` does not exist, so `p` is `undefined`

---

## **3. Providing Default Values**
If a property **does not exist** in the object, we can assign a **default value**.

### **Example: Using Default Values**
```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

let { width, height, area, perimeter = 60 } = rectangle;

console.log(width, height, area, perimeter);
```

**Output:**
```sh
20 10 200 60
```

### **Explanation:**
- `perimeter` is not found in `rectangle`, so the **default value** of `60` is assigned.

---

## **4. Modifying Object Properties**
If the object is modified **before destructuring**, the new values will be used.

### **Example: Modifying Object Properties**
```js
const rectangle = {
  width: 30,  // Updated from 20 to 30
  height: 10,
  area: 200,
  perimeter: 80  // Added new property
};

let { width, height, area, perimeter = 60 } = rectangle;

console.log(width, height, area, perimeter);
```

**Output:**
```sh
30 10 200 80
```

### **Explanation:**
- Since `perimeter` **exists in the object** (`80`), it **overrides** the default value (`60`).

---

## **5. Destructuring Object Properties as Function Parameters**
We can **pass an object** to a function and use **destructuring** inside the function parameters to extract specific properties.

### **Example: Function Using Object Destructuring**
Let's create a function to **calculate the perimeter** of a rectangle using the formula:

\[
\text{Perimeter} = 2 \times (\text{width} + \text{height})
\]

```js
function calculatePerimeter({ width, height }) {
  return 2 * (width + height);
}

const rectangle = {
  width: 20,
  height: 10,
  area: 200
};

console.log(calculatePerimeter(rectangle)); // 60
```

**Output:**
```sh
60
```

### **Explanation:**
- The function `calculatePerimeter` takes an **object** as an argument.
- Inside the parameter list, we use **destructuring** `{ width, height }` to extract `width` and `height`.
- The function then calculates the **perimeter** using the formula.

---

## **6. Providing Default Values in Function Parameters**
We can provide **default values** for missing properties in function parameters.

### **Example: Handling Missing Properties**
```js
function calculatePerimeter({ width = 10, height = 5 }) {
  return 2 * (width + height);
}

const rectangle = { width: 20 }; // No 'height' property

console.log(calculatePerimeter(rectangle)); // 50
console.log(calculatePerimeter({})); // 30 (uses default width = 10, height = 5)
```

**Output:**
```sh
50
30
```

### **Explanation:**
- When `rectangle = { width: 20 }`, `height` is **missing**, so the default value `5` is used.
- When an **empty object `{}`** is passed, both `width = 10` and `height = 5` are used as defaults.

---

## **Conclusion**
✅ **Object destructuring** allows easy extraction of values from objects.  
✅ We can **rename variables** while destructuring.  
✅ **Default values** help handle missing properties.  
✅ **Destructuring in function parameters** makes function definitions cleaner.  
# **Object Parameters Without and With Destructuring in JavaScript**

In JavaScript, when we pass an **object** to a function, we can **access its properties** using either **dot notation** (`obj.property`) or **destructuring**.

### **1. Object Parameter Without Destructuring**
In this approach, we **pass an object** to a function and access its properties using **dot notation**.

#### **Example 1: Calculating Perimeter Without Destructuring**
```js
// Without destructuring
const rect = {
  width: 20,
  height: 10
};

const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // Output: 60
```

### **Explanation**
1. The function `calculatePerimeter(rectangle)` **accepts an object** as a parameter.
2. Inside the function, we access the properties using `rectangle.width` and `rectangle.height`.
3. The formula used is:  
   \[
   \text{Perimeter} = 2 \times (\text{width} + \text{height})
   \]
4. Since `width = 20` and `height = 10`, the result is `60`.

---

## **2. Object Parameter Without Destructuring – A More Complex Example**
Here, we create a function that processes an **object** without using destructuring.

### **Example 2: Extracting Person Information Without Destructuring**
```js
// Another Example: Person Object
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
};

// Function without destructuring
const getPersonInfo = obj => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(', '); // Join all except last skill
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(', '); // Join all except last language

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[languages.length - 1]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));
```

### **Output:**
```sh
Asabeneh Yetayeh lives in Finland. He is 250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish).
```

---

### **Explanation**
1. The function `getPersonInfo(obj)` accepts an object.
2. Inside the function, we access properties using **dot notation**:
   - `obj.firstName`, `obj.lastName`, `obj.age`, etc.
3. We **extract skills** from `obj.skills`:
   - `skills.slice(0, -1).join(', ')` joins all except the last skill.
   - `skills[skills.length - 1]` gets the last skill.
4. Similarly, we **extract languages** from `obj.languages`.
5. Finally, we construct a formatted string with all details.

---

## **3. Object Parameter With Destructuring**
Instead of accessing properties using `obj.property`, we can **directly extract** values using **destructuring**.

### **Example 3: Calculating Perimeter With Destructuring**
```js
// With destructuring
const calculatePerimeterDestructured = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeterDestructured(rect)); // Output: 60
```

### **Explanation**
1. Instead of using `rectangle.width` and `rectangle.height`, we **destructure** `{ width, height }` in the function parameter.
2. This makes the function **cleaner and more readable**.

---

## **4. Converting getPersonInfo to Use Destructuring**
Now, let's **modify** `getPersonInfo` to use **destructuring**.

### **Example 4: Extracting Person Information With Destructuring**
```js
// Another Example: Person Object
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
};
const getPersonInfoDestructured = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ');
  const formattedLanguages = languages.slice(0, -1).join(', ');

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. 
  He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. 
  He speaks ${formattedLanguages} and a little bit of ${languages[languages.length - 1]}.`;

  return personInfo;
};

console.log(getPersonInfoDestructured(person));
```

### **Output:**
```sh
Asabeneh Yetayeh lives in Finland. He is 250 years old. 
He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. 
He speaks Amharic, English and a little bit of Suomi(Finnish).
```

---

### **Key Improvements With Destructuring**
✅ **Less Repetition** – No need to repeatedly use `obj.property`.  
✅ **Improved Readability** – We know what properties are expected from the object.  
✅ **Cleaner Code** – Less dot notation (`obj.`) makes it neater.

---

## **Summary Table: Without vs. With Destructuring**
| Feature               | Without Destructuring                          | With Destructuring                         |
|-----------------------|--------------------------------|--------------------------------|
| **How to access properties?** | `obj.property` (dot notation) | `{ property }` in parameters |
| **Code length**       | Longer                        | Shorter and cleaner |
| **Readability**       | Less readable                 | More readable |
| **Flexibility**       | Requires `obj.` everywhere | Extracts only needed values |

---

## **Final Thoughts**
🔹 **Without destructuring**, we access object properties using `obj.property`.  
🔹 **With destructuring**, we extract values directly in the function parameter.  
🔹 **Destructuring improves readability, reduces repetition, and makes functions cleaner.**  

This content covers **destructuring objects during iteration** and the **spread/rest operator** in JavaScript. Below is a detailed explanation of each section:

---

## **1. Destructuring Objects During Iteration**
When iterating over an array of **objects**, we can **destructure** properties directly in the loop.

### **Example 1: Iterating Over an Array of Objects**
```js
const todoList = [
  {
    task: 'Prepare JS Test',
    time: '4/1/2020 8:30',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '4/1/2020 10:00',
    completed: false
  },
  {
    task: 'Assess Test Result',
    time: '4/1/2020 1:00',
    completed: false
  }
];

// Destructuring inside the loop
for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
```

### **Output:**
```sh
Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false
```

### **Explanation**
1. The `todoList` array contains **objects**.
2. Inside the `for...of` loop, we **destructure** `{ task, time, completed }` directly from each object.
3. This avoids using dot notation (`todo.task`) inside the loop.
4. The loop prints **each task with its time and completion status**.

---

## **2. Spread and Rest Operator (`...`)**
The **spread (`...`) and rest (`...`) operators** allow us to work with **arrays and objects** more efficiently.

### **2.1 Spread Operator to Get the Rest of Array Elements**
We can extract the **first few elements** and use the `...rest` operator to collect the remaining elements in an array.

#### **Example 2: Using Spread Operator with an Array**
```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]
```

### **Output:**
```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

### **Explanation**
- The first three values (`1, 2, 3`) are assigned to `num1, num2, num3`.
- The remaining values are **collected into `rest` as an array**.

---

### **2.2 Skipping Elements While Destructuring**
We can **skip** elements by adding extra commas.

#### **Example 3: Skipping Elements**
```js
const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
];

let [gem, fra, , ...nordicCountries] = countries;

console.log(gem); // Germany
console.log(fra); // France
console.log(nordicCountries); // ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
```

### **Explanation**
- `gem` gets **Germany**.
- `fra` gets **France**.
- The `,` **skips "Belgium"**.
- The `...nordicCountries` collects the **remaining countries into an array**.

---

## **3. Spread Operator to Copy Arrays**
The spread operator can be used to **create a copy of an array**.

#### **Example 4: Copying an Array**
```js
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers); // [0, 2, 4, 6, 8, 10]
console.log(oddNumbers); // [1, 3, 5, 7, 9]
console.log(wholeNumbers); // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
```

### **Explanation**
- `evenNumbers = [...evens]` creates a **copy** of `evens` array.
- `oddNumbers = [...odds]` copies `odds` array.
- `wholeNumbers = [...evens, ...odds]` **merges both arrays**.

---

### **3.1 Merging Arrays Using Spread Operator**
We can use the **spread operator** to combine multiple arrays.

#### **Example 5: Merging Two Arrays**
```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);
```

### **Output:**
```sh
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```

### **Explanation**
- `[...frontEnd, ...backEnd]` **combines both arrays** into `fullStack`.

---

## **4. Spread Operator to Copy Objects**
We can use the **spread operator** to **copy an object**.

#### **Example 6: Copying an Object**
```js
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
};

const copiedUser = { ...user };
console.log(copiedUser);
```

### **Output:**
```sh
{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}
```

### **Explanation**
- `{ ...user }` creates a **new object** with the **same properties** as `user`.

---

### **4.1 Modifying While Copying an Object**
We can **modify properties** while copying an object.

#### **Example 7: Modifying Object While Copying**
```js
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
};

const copiedUser = { ...user, title: 'Instructor' };
console.log(copiedUser);
```

### **Output:**
```sh
{name: "Asabeneh", title: "Instructor", country: "Finland", city: "Helsinki"}
```

### **Explanation**
- `{ ...user, title: 'Instructor' }` **copies all properties**, but **overwrites** `title`.

---

## **Summary Table: Destructuring and Spread/Rest Operators**
| Feature | Description | Example |
|---------|------------|---------|
| **Destructuring Objects in Loop** | Extracts values while looping | `for (const {task, time} of todoList) {...}` |
| **Spread in Arrays** | Copies arrays | `const newArr = [...oldArr]` |
| **Spread in Objects** | Copies objects | `const newObj = {...oldObj}` |
| **Rest in Arrays** | Collects remaining items | `[first, second, ...rest] = array` |
| **Merging Arrays** | Combines arrays | `[...arr1, ...arr2]` |
| **Modifying Object While Copying** | Updates a property | `{...oldObj, newProp: value}` |

---

### **Final Thoughts**
✅ **Destructuring** simplifies object iteration.  
✅ **Spread operator** makes copying and merging easy.  
✅ **Rest operator** helps handle remaining items.  
### **Spread Operator with Arrow Functions**
The **spread operator (`...`)** allows an arrow function to accept an **unlimited number of arguments** and convert them into an array.

---

## **Example 1: Using the Spread Operator in an Arrow Function**
```js
const sumAllNums = (...args) => {
  console.log(args);
}

sumAllNums(1, 2, 3, 4, 5);
```

### **Output:**
```sh
[1, 2, 3, 4, 5]
```

### **Explanation**
- The `...args` **collects all arguments** into an **array**.
- `sumAllNums(1, 2, 3, 4, 5)` passes five arguments.
- The function **prints the array `[1, 2, 3, 4, 5]`**.

---

## **Example 2: Calculating the Sum of All Arguments**
```js
const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4, 5));
```

### **Output:**
```sh
15
```

### **Explanation**
1. `...args` collects all arguments into an array.
2. The function initializes `sum = 0`.
3. It iterates through the array and adds each number to `sum`.
4. The function returns `15`, which is the sum of `1 + 2 + 3 + 4 + 5`.

---

## **Why Use the Spread Operator with Arrow Functions?**
✅ **Allows unlimited parameters**  
✅ **Converts arguments into an array**  
✅ **Simplifies working with variable-length input**  


🌕 You achieved quite a lot so far. Now, your level of JavaScript is upper intermediate. Keep going! You have just completed day 11 challenges and you are 11 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

## Exercises

### Exercises: Level 1

```js
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
```

1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
3. Destructure the rectangle object by its properties or keys.

### Exercises: Level 2

1. Iterate through the users array and get all the keys of the object using destructuring
2. Find the persons who have less than two skills

### Exercises: Level 3

1. Destructure the countries object print name, capital, population and languages of all countries
2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

  ```js
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    console.log(name, skills, jsScore, reactScore)
  ```

  ```sh
  David (4) ["HTM", "CSS", "JS", "React"] 90 95
  ```

3. Write a function called *convertArrayToObject* which can convert the array to a structure object.

  ```js
      const students = [
          ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
          ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
        ]

      console.log(convertArrayToObject(students))
      [
        {
          name: 'David',
          skills: ['HTM','CSS','JS','React'],
          scores: [98,85,90,95]
        },
        {
          name: 'John',
          skills: ['HTM','CSS','JS','React'],
          scores: [85, 80,85,80]
        }
      ]
  ```

4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

- Add Bootstrap with level 8 to the front end skill sets
- Add Express with level 9 to the back end skill sets
- Add SQL with level 8 to the data base skill sets
- Add SQL without level to the data science skill sets

```js
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
  ```

 The copied object output should look like this:

```js
    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }

```

🎉 CONGRATULATIONS ! 🎉
s
[<< 04](../04_Conditionals/04_Conditionals.md) | [06>>](../06_JSON/06_JSON.md)
