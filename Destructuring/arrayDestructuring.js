//Destructuring
//Note- Destructuring works with both Arrays and Objects.

//console.log(typeof array);
const array = [1, 2, 3];

//Prior to ES6, when we wanted to assign elements of the array to variables, we typically do like this:

let a = array[0];

let b = array[1];

let c = array[2];

console.log(`a: ${a} b:${b} c:${c}`);

//Using ES6 destructuring
//----The syntax is similar to Object destructuring where since its now an array, we use '[ ]' instead of '{ }'
let [x, y, z] = array;

console.log(`x:${x} y:${y} z:${z}`);

/**
 Lets see the syntax based on this example.
 The left hand side of the assignment is an array of varaibles, and the right side is array of the values. 
 The array elements are assigned in order, with the first element of the array going to the first variable as so on.

 For example, if you have an array of multiple values, you can assign them to multiple variables like this:
 */

let [p, q, r, s] = [1, 2, 3, 4];

console.log(`p:${p} q: ${q} r: ${r} s:${s}`);

//Skipping items when array destructuring

const arrValue = ["One", "Two", "Three"];

//destructuring assignment in arrays

const [f, , g] = arrValue;

console.log(`f: ${f} g: ${g}`);

/**
 Assigning remaining elements to single variable

 You can assign remaining elements of array to a variable using spread syntax '...'
 */

const names = ["Jonh", "Adam", "Hansy", "Paul"];
//destucturing assignment in arrays
//assigning remaining elements to variable k
let [j, ...k] = names;

console.log(j);
console.log(k);

// Note: we should use this rest element (variable with spread syntax) as the last element.

//Interview questions based on this:
//Q. Can you swapped the two varibles in a single line of code.

//In this example, two variables as swapped using the destructuring assignment syntax

let name1 = "John";
let name2 = "Paul";

[name2, name1] = [name1, name2];

console.log(`name1 : ${name1} name2: ${name2}`);

//Function may return object or null in some situations.
console.log(`----Function may return null in some situation----`);

function getPerson() {
  return null;
}

//let { firstName, lastName } = getPerson(); //TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
//----To handle above error, we can write code as below-
let { firstName, lastName } = getPerson() || {};

console.log(`${firstName}  ${lastName}`);
