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

## 📔 Day 1: Setup  

### Getting Started  

To start, all you need is motivation, a computer, and an internet connection. Let’s begin!  

---

### Install Node.js  

While Node.js might not be essential immediately, it’s helpful later. Download and install Node.js from [here](https://nodejs.org/en/).  

After downloading, install it:  

![Node Installation](images/install_node.png)  

Verify installation in your terminal:  

```sh  
$ node -v  
v12.14.0  
```  

> **Note:** The version might differ. Use the latest stable version recommended on the Node.js website.  

---

### Writing JavaScript Code  

#### Using Browser Console  

You can write JavaScript code directly in a browser console. Let’s focus on Google Chrome. Open the console with:  

- **Mac**: `Command + Option + I`  
- **Windows**: `Ctrl + Shift + I`  

##### Using `console.log()`  

To display outputs, we use the `console.log()` function. For example:  

```js  
console.log('Hello, World!')  
```  

---

### Adding JavaScript to Web Pages  

JavaScript can be included in a webpage in three ways:  

1. **Inline Script**  
2. **Internal Script**  
3. **External Script**  

#### Inline Script  

```html  
<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <title>Inline Script</title>  
  </head>  
  <body>  
    <button onclick="alert('Welcome to 30 Days of JavaScript!')">Click Me</button>  
  </body>  
</html>  
```  

#### Internal Script  

Internal scripts can be included in the `<head>` or `<body>`. Preferred placement is at the end of the `<body>`.  

```html  
<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <title>Internal Script</title>  
  </head>  
  <body>  
    <script>  
      console.log('Welcome to 30 Days of JavaScript')  
    </script>  
  </body>  
</html>  
```  

#### External Script  

For cleaner and reusable code, use external `.js` files. Create a file (e.g., `script.js`) and include it in your HTML:  

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

In `script.js`:  

```js  
console.log('Welcome to 30 Days of JavaScript!')  
```  

---

This layout improves clarity and ensures proper structure for easy reading.