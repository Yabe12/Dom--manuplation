// // ------------ Callbacks
// function orderPizza(callback) {
//   setTimeout(function () {
//     callback('Your pizza is ready!');
//   }, 3000); // Simulating 30 minutes of wait time
// }

// function callback(message) {
//   console.log(message);
// }

// orderPizza(callback);

// ------------- Promises
function orderPizza() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Your pizza is ready!');
    }, 3000); // Simulating 30 minutes of wait time
  });
}

// orderPizza().then(function (message) {
//   console.log(message);
// });

// // ----------- Async-await
async function orderAndDeliverPizza() {
  const message = await orderPizza();
  console.log(message);
  console.log('Enjoy your pizza!');
}

orderAndDeliverPizza();
