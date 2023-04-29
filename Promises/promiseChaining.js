//Example- Promise Chaining
/**
 const promise1= doSomething();

 const promise2= promise1.then(sucessCallback, failuerCallback);

 //Or can be written as -

 const promise2= doSomething().then(sucessCallback, failuerCallback);
 */

//then syntax
//promiseObject.then(onFulfilled, OnRejected);

let exampleTask = new Promise((resolve, reject) => {
  resolve("Promise resolved....");
});

//executes when promise is resolved
exampleTask
  .then(function successVal1(result) {
    console.log(result);
  })
  .then(function successVal2() {
    console.log("We can call multiple functions like this.");
  });
