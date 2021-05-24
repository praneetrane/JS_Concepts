const shoppingList=[
  { name: 'pizza', price:200 },
  {name: 'Samosa', price: 15},
  {name:'Vada Pav', price:10  }
];

//console.log(shoppingList);

//----Some()
/*
The some() method tests whether at least one element in the array passes the 
test implemented by the provided function. 
It returns true if, in the array, it finds an element for which the provided function 
returns true; otherwise it returns false. It doesn't modify the array.
*/
const someItem =shoppingList.some(item =>item.price<=20);
console.log(someItem);