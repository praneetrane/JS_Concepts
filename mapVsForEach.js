//Q. what is difference between map and for Each
console.log("==========================================");
console.log("Difference between map and for Each");

const arr = [2, 4, 5, 1, 8, 9, 6];

console.log("==========================================");
console.log("map");
//map() is use to loop over the array.
//Map will return a new array and the old array will be as it is.
//we can chain additional methods to map()
let mapResult = arr.map((item) => {
  return item + 2;
});
console.log(mapResult);

console.log("==========================================");
console.log("foreach");
//foreach() is also use to Loop over an array
//foreach will not return anything. To modify the existing array we can pass the index and modify.
//we can not chain additional methods to map()

let forEachResult = arr.forEach((item, i) => {
  arr[i] = item + 2;
});

console.log(forEachResult);
console.log("Modified Array: " + arr);
