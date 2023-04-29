//
//Destructuring
//Note- Destructuring works with both Arrays and Objects.

//Accessing objects old way

console.log(`***********Destructuring**********************`);
let person = {
  firstName: "Praneet",
  lastName: "Rane",
  personAge: 35,
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

console.log(`${personFirstName} ${personLastName}`);

console.log(`***********Destructuring**********************`);
//Renaming destructured values
let { firstName: personFN, lastName: personLN } = person;
console.log(`${personFN} ${personLN}`);
//or
let { firstName, lastName } = person;
console.log(`${firstName} ${lastName}`);

console.log("------Settting up default values-------");
let {
  firstName: FN,
  lastName: LN,
  middleName = "",
  personAge: age = 20,
  city,
} = person;

console.log(`Age: ${age}`); // This will be 35 as values is there it will consider Actual value instead of default value
console.log(`Middle Name: ${middleName}`); // This will be '' as default value it will pick
console.log(`City: ${city}`); // This will be undefined as its not there in the object
