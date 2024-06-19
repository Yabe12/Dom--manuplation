// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically
//             change the content, structure, and style of a web page.
// document is a built-in global object in the browser's JavaScript environment.
console.log(document);
// The entire HTML document displayed in a nested, tree-like structure.

// console.dir(document);

// A list of properties and methods of the document object, such as body, title, URL, forms, head, etc.
document.title = 'My website';
document.body.style.backgroundColor = 'hsl(0, 0%, 15%)';
document.getElementById('welcome-msg').style.backgroundColor = 'yellow';

const username = '';
const welcomeMsg = document.getElementById('welcome-msg');
welcomeMsg.textContent += username === '' ? `yeabsira` : username;
// The ternary operator username === '' ? 'yeabsira' : username is used to determine what text to append:
// If username is an empty string (username === ''), it appends 'yeabsira'.
// Otherwise, it appends the value of username.



// const username = '';
// const welcomeMsg = document.getElementById('welcome-msg');
// welcomeMsg.textContent = username === '' ? `yeabsira` : username;