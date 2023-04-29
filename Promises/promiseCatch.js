// promise catch() method

//returns a promise
let exampleTask = new Promise((resolve, reject) => {
  //resolve("Promise resolved....");
  //reject("Promise rejected");
});

//executes on promise resolved sucessfully
exampleTask
  .then(function successValue(result) {
    console.log(`SucsessValue: ${result}`);
  })
  .catch(function errorValue(result) {
    console.log(`Error: ${result}`);
  });

//When we have single catch it acts as catch all
//for example-

/**
 examplePromiseTask()
 .then(function(resultOne){
  return secondTask();
 })
 .then(function(resultTwo){
  return thirdTask();
 }).
 then (function(resultThree){
  //Do something
 })
 .catch(function(error){
  //Handle any error occured before this point
 })
 */
