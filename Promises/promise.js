//Promises in Javascript

let promise = new Promise((resolve, reject) => {
  //do something
});

//A promise may have one of three states
//Pending: initial state, neither fulfiled nor rejected
//Fulfilled: operation was completed sucessfully
//Rejected: operation failed

const count = true;

let countValue = new Promise((resolve, reject) => {
  if (count) {
    resolve(`Count value present`);
  } else {
    reject(`There is no count value`);
  }
});

console.log(countValue);
