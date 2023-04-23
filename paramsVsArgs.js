// Q. Params vs Arguments in Javascript
console.log("==========================================");
console.log("Params vs Arguments");

function square(num) {
  //Parameters. Params are where we recive value passed by Arguments inside our function.
  return num * num;
}

square(5); // 5 is an Argument here. Arguments are the values we are passing to the function  parameters.

// Spread vs Rest operators
console.log("==========================================");
console.log("Spread vs Rest operators");
//Difference between Spread and Rest is : The values we are passing is called Spread operator (Similar to Args) and the values we are recieving
// is Rest operator (Similar to Params)
function multiply(num1, num2) {
  //We are passing arguments using Spread operator and can recive using params or Rest.
  console.log(`Multiply Result: ${num1 * num2}`);
}

function funcUsingRestOperator(...nums) {
  //Rest
  console.log(nums[0] * nums[1]);
}

var arr = [5, 5];

//multiply(5, 6);
multiply(...arr); //Spread
funcUsingRestOperator(...arr); //Spread

//Note-A rest parameter/ spread arguments must be last in a parameter list.

//Q. Params vs Arguments - Output based question
console.log("==========================================");
console.log("Params vs Arguments - Output based question");

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fn(5, 6, 7, 4, 8, 9);
