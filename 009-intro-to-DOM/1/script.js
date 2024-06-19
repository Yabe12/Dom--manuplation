// Function to add a new book to the catalog
function addBook() {
  // Accessing the <ul> element inside the <div> with ID "fiction"
  // The [0] is used to get the first <ul> element found because getElementsByTagName returns a collection of elements.
  var fictionBooks = document
    .getElementById('fiction')
    .getElementsByTagName('ul')[0];

  // Creating a new <li> element for the new book
  var newBook = document.createElement('li');
  newBook.innerText = 'Pride and Prejudice';

  // Adding the new book to the catalog
  fictionBooks.appendChild(newBook);
 
}
addBook();
function remove(){
  var removeBook = document.getElementById('fiction').getElementsByTagName('ul')[0];
  removeBook.removeChild(removeBook.lastChild);
}
 remove()
//  function addBook() {
//   // Accessing the <ul> element inside the <div> with ID "fiction"
//   // The [0] is used to get the first <ul> element found because getElementsByTagName returns a collection of elements.
//   var fictionBooks = document
//     .getElementById('fiction')
//     .getElementsByTagName('ul')[1];

//   // Creating a new <li> element for the new book
//   var newBook = document.createElement('li');
//   newBook.innerText = 'Pride and Prejudice';

//   // Adding the new book to the catalog
//   fictionBooks.appendChild(newBook);
 
// }
// addBook();