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

[<< 05](../05_Destructuring_and_spreading/05_Destructuring_and_spreading.md) | [7 >>](../07_Closures/07_Closures.md)


---

## **JSON (JavaScript Object Notation) - A Deep Dive**
JSON is widely used for **data exchange** between systems, especially in web development, databases, and APIs. Let's explore how JSON works and how to manipulate it in JavaScript.

---

## **1️⃣ JSON vs JavaScript Object - Key Differences**
| Feature           | JSON                         | JavaScript Object              |
|------------------|----------------------------|--------------------------------|
| **Data Type**     | **String (text format)**   | **Object (in-memory structure)** |
| **Keys**          | **Always in double quotes** | **No quotes needed**           |
| **Data Storage**  | **Text file or string**    | **Stored in memory**           |
| **Use Case**      | **Data transfer (API, DB, files)** | **Manipulation in JS programs** |

### **Example: JSON vs Object**
✅ **JSON (String Format - Used for Data Exchange)**
```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false
}
```
- **Keys and values are in double quotes (except `true`, `false`, `null`, and numbers).**
- **JSON is a string format**, not a JavaScript object.

✅ **JavaScript Object (Used for Manipulation in Code)**
```js
const user = {
  name: "Alice",
  age: 30,
  isStudent: false
};
```
- **Keys do not need double quotes**.
- **Can store functions and variables, unlike JSON**.

---

## **2️⃣ Converting JSON to JavaScript Object (`JSON.parse()`)**
### **What is `JSON.parse()`?**
`JSON.parse()` **converts a JSON string into a JavaScript object**. This is useful when receiving data from a server (as a string) and needing to use it in a JavaScript program.

✅ **Basic Example**
```js
const jsonString = '{"name": "Alice", "age": 30}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // Alice
console.log(obj.age);  // 30
```
📌 **Explanation:**
- The `jsonString` variable holds JSON data as a string.
- `JSON.parse(jsonString)` converts it into a JavaScript object.
- Now, we can access `obj.name` and `obj.age` like a normal object.

Here's the **detailed step-by-step** breakdown of how nested JSON works, including the object at every step:

---
✅ **Handling Nested JSON**
```js
const jsonString = `{
  "name": "Alice",
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}`;
const obj = JSON.parse(jsonString);

console.log(obj.address.city); // New York
console.log(obj.address.zip);  // 10001
```
📌 **Explanation:**
- JSON can contain **nested objects**.
- We access nested properties using **dot notation** (`obj.address.city`).



#### **1️⃣ Initial JSON String**
This is the JSON string we start with:
```js
const jsonString = `{
  "name": "Alice",
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}`;
```
**What happens here:**
- We have a `name` key with a value of `"Alice"`.
- The `address` key holds an **object** with two properties: `city` and `zip`.

#### **2️⃣ Convert JSON to JavaScript Object (`JSON.parse()`)**
We use `JSON.parse()` to convert the JSON string into a JavaScript object:
```js
const obj = JSON.parse(jsonString);
```
**Object after parsing:**
```js
{
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001"
  }
}
```
Now, `obj` is a **JavaScript object** where:
- `obj.name` is `"Alice"`.
- `obj.address` is another **object** that contains the `city` and `zip` values.

#### **3️⃣ Accessing Nested Properties**
Now that we've parsed the JSON into an object, we can access the properties inside the nested object using **dot notation**.

```js
console.log(obj.address.city); // New York
console.log(obj.address.zip);  // 10001
```
**Output:**
- `obj.address.city` returns `"New York"`.
- `obj.address.zip` returns `"10001"`.

**Final Object State:**
```js
{
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001"
  }
}
```


## **4️⃣ Converting JavaScript Object to JSON (`JSON.stringify()`)**
### **What is `JSON.stringify()`?**
`JSON.stringify()` **converts a JavaScript object into a JSON string**. This is useful when sending data to a server.

✅ **Basic Example**
```js
const user = { name: "Alice", age: 30 };
const jsonString = JSON.stringify(user);

console.log(jsonString); // '{"name":"Alice","age":30}'
```
📌 **Explanation:**
- `JSON.stringify(user)` converts the object to a JSON string.
- The output is a **string**, not an object.

✅ **Formatting JSON with Indentation**
```js
const jsonString = JSON.stringify(user, null, 4);
console.log(jsonString);
```
📌 **Explanation:**
- The `4` adds **indentation** for readability.
- Output:
```json
{
    "name": "Alice",
    "age": 30
}
```
In the `JSON.stringify()` method, the second argument can be used as a **replacer** function or an array of keys to filter which properties to include in the resulting JSON string. However, if you pass `null` as the second argument, it means **no filtering** is applied, and all properties of the object will be included in the JSON string.

### **Explanation of Parameters in `JSON.stringify()`**
```js
JSON.stringify(value, replacer, space)
```
1. **`value`**: The object or value to convert to a JSON string.
2. **`replacer`**: (Optional) A function or array used to filter or modify the properties that will be included in the resulting JSON string.
3. **`space`**: (Optional) A number or string used to add indentation (for readability) in the JSON output.

---

### **Example:**
```js
const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const jsonString = JSON.stringify(user, null, 4);
console.log(jsonString);
```

- **`null`** in this case means **no filtering**. All properties from the `user` object will be included in the JSON string.
- **`4`** adds an indentation of **4 spaces** for better readability.

### **Output:**
```json
{
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
```

#### **What happens with `null`?**
- It simply means: **don't filter out anything**. All the properties of the `user` object will be included in the resulting JSON string.

If we wanted to **filter** specific keys, we could pass an array of keys or a custom function in place of `null`. For example:
```js
const jsonString = JSON.stringify(user, ["name", "age"], 4);
console.log(jsonString);
```
This would output only the `name` and `age` properties, leaving out `city`.
---

## **5️⃣ Using a Filter (Replacer) with `JSON.stringify()`**
We can specify which properties to include when converting an object to JSON.

✅ **Example: Keep Only Certain Properties**
```js
const user = {
  name: "Alice",
  age: 30,
  city: "New York",
  isStudent: false
};

const jsonString = JSON.stringify(user, ["name", "age"], 2);
console.log(jsonString);
```
📌 **Explanation:**
- The array `["name", "age"]` **filters out** `city` and `isStudent`.
- Output:
```json
{
  "name": "Alice",
  "age": 30
}
```

---


## **7️⃣ Summary of Key Methods**
| Method              | Purpose | Example |
|---------------------|---------|---------|
| `JSON.parse()`     | Convert JSON string → Object | `JSON.parse('{"name":"Alice"}')` |
| `JSON.stringify()` | Convert Object → JSON string | `JSON.stringify({ name: "Alice" })` |
| `JSON.parse(json, reviver)` | Modify values while parsing | Convert numbers, uppercase strings |
| `JSON.stringify(obj, replacer, space)` | Filter and format JSON output | Keep only certain properties |

---


🌕 You are extraordinary.  Now, you knew a light-weight data format which you may use to store data or to send it an HTTP server. You are 16 steps a head to your way to greatness. Now do some exercises for your brain and for your muscle.

## Exercises

```js
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
```

### Exercises Level 1

1. Change skills array to JSON using JSON.stringify()
1. Stringify the age variable
1. Stringify the isMarried variable
1. Stringify the student object

### Exercises Level 2

1. Stringify the students object with only firstName, lastName and skills properties

### Exercises Level 3

1. Parse the *txt* JSON to object.
2. Find the user who has many skills from the variable stored in *txt*.



[<< 05](../05_Destructuring_and_spreading/05_Destructuring_and_spreading.md) | [7 >>](../07_Day_Closures/07_Day_Closures.md)
