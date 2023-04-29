//Nested Object Destructuring

const member = {
  id: 1,
  personName: {
    firstName: "Praneet",
    lastName: "Rane",
  },
};

let {
  id,
  personName: { firstName, lastName },
} = member;

console.log(`Id:${id}`);
console.log(`FirstName:${firstName}`);
console.log(`LastName:${lastName}`);

//Note : we have 3 variables in this destructring i.e. id, firstname and lastname. If we try to access 'personName' it will be error.

//console.log(`Name: ${personName}`); //ReferenceError: personName is not defined

//To fix this we need to destructure that personName Object as well
//for example-

let {
  id: personId,
  personName: { firstName: fName, lastName: lName },
  personName,
} = member;

// Note- Added alices as we have the variables with same name above in the same block scope.

console.log(
  `id:${id} First Name:${fName} LastName:${lName} PersonName: ${JSON.stringify(
    personName
  )}`
);
