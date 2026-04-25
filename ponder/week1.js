const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);
console.log("Area:", PI * radius * radius);

const one = 1;
const two = "2";

console.log(one + two); // type coercion example

let course = "CSE131";

if (true) {
  let student = "John";
  console.log(course);
  console.log(student);
}

console.log(course);
// console.log(student); 
// This will cause an error because student only exists inside the block.