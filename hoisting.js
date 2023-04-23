//Q - Function Hoisting

//functions get hoisted and hence we can call functionName() before or after its definition
console.log("==========================================");
console.log("Function Hoisting");
functionName();

function functionName() {
  console.log("Hello World!");
}

//Function expressions doesnot get hoisted
console.log("==========================================");
console.log("Function expressions");
const func = () => {
  console.log(`y is ${y}`);
  var y = 20;
  console.log("Hey, I am an Arrow function");
};

func();

console.log("==========================================");
console.log("Variable Hoisting");
//variables are hoisted differently. If we check the x value on line 20 using debugger, we will find x is hoisted but its undefined.
console.log(`x is ${x}`);
var x = 5;
console.log(`x is ${x}`);

//Q. Function Hoisting- Output based question

console.log("==========================================");
console.log("Function Hoisting- Output based question");

var x = 21;
var fun = function () {
  console.log(x); //undefined, Since we have variable x in current scope it will not get it from global scope and since the current scope variable x is not
  //yet assigned it will print undefined.
  var x = 20;
};

fun();
