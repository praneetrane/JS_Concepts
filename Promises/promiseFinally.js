//Promise finally()

//retuns promise
const countValue = new Promise((resolve, reject) => {
  //can be resolved or rejected
  resolve("Promise resolved....");
});

countValue
  .then((success) => {})
  .catch((error) => {})
  .finally(function greet() {
    //finally will always get executed
    console.log("The code is executed....");
  });
