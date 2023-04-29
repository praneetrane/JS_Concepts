// Synchronous vs Asynchronous code

//Synchronous code
console.log("********Synchronous code*********");
console.log("Start");
console.log("Hello World!");
console.log("Finish");

console.log("********Asynchronous code*********");
console.log("Start");
setTimeout(() => console.log("Hello World!"), 1000);
console.log("Finish");

//Note- Javascript executes Synchronous code first and then Asynchronous code.
