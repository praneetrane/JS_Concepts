//call back

console.log("Start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Hello ${username}`);
  }, 1000);
}

let message = importantAction("Praneet", (message) => {
  console.log(message);
});

console.log("Finish");

//******************************************* */
// console.log("Start");

// function importantAction(username) {
//   setTimeout(() => {
//     return `Hello ${username}`;
//   }, 1000);
// }

// let message = importantAction("Praneet");

// console.log(message); //undefined

// console.log("Finish");
