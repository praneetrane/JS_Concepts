// Destructuring function arguments
// We regulary use this in our React functional components.
//let displayFullName = (person) => `${person.firstName} ${person.lastName}`;
//----We have cleaner appraoch in ES6 for this as below-

let displayFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

let person = {
  firstName: "Praneet",
  lastName: "Rane",
};

displayFullName(person);
