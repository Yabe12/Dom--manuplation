// ------------Callback
let friendBringsBook = function (callback) {
  setTimeout(function () {
    callback("Here's your book!");
  }, 2000);
};

friendBringsBook(function (message) {
  console.log(message);
});

//----------- Promise
// let friendBringsBook = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Here's your book!");
//   }, 2000);
// });

// friendBringsBook.then(function (message) {
//   console.log(message);
// });

// --------------- Async/Await
// let friendBringsBook = async function () {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Here's your book!");
//     }, 2000);
//   });
// };

// (async function () {
//   let message = await friendBringsBook();
//   console.log(message);
// })();

// ----------------------------------------
// Callbacks involve waiting for an action to complete and then triggering another action.
// Promises involve waiting for an action to complete and then handling the result.
// Async/Await involves waiting for an action to complete in a synchronous-looking manner.
// -----------------------------------------
