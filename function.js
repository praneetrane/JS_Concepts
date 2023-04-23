//functions in Javascript
//Q. What is function Declarations?
//----Declaration of function. This is also known as function Definition or function statement
function square(num) {
  return num * num;
}

//----when we store function in a variable, it is called as function expression
//----function expression with Anonymous function
const square_anonymous = function (num) {
  return num * num;
};
//console.log(square_anonymous(5));

//First class functions- In a language functions are treated like a variable, their
//functions are called first class functions.In this cases, functions can be passed to
//another functions can be used to manipulate and return from those function and basically everything
//that a variable can do , a function can also do.So this is why
//we call functions as First class functions in Javascript
function displaySquare(fn) {
  console.log("Square is:" + fn(4));
}
//displaySquare(square_anonymous);

//Q. What is IIFE? (Immediatly Invoked Function Expression)
(function squareIIFE(num) {
  console.log(num * num);
})(2);

//Q. IIFE- Output based Question

(function (x) {
  return (function (y) {
    console.log(x); //1 this is because of Closure
  })(2);
})(1);
