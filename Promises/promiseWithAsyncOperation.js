// Example- Use of promise with Asyncronous operation

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Done....`);
  }, 5000);
});

promise.then((sucess) => console.log(sucess));

//error case

let promiseWithError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("An error occured!"));
  }, 10000);
});
promiseWithError.then((result) => console.log(result));
