// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"

//Q. Function Scope output based Question

for (let i = 0; i < 50; i++) {
  setTimeout(function () {
    console.log(i); // 0 1 2 3 4 because each time for loop executes it will create a block scope
  }, i * 1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    //   console.log(i); // 5 5 5 5 5  because when we use var it doesnot create block scope.
  }, i * 1000);
}
