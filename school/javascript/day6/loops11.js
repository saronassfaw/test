let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("What is the number to multiply up to?");

let i = 1;
let sum = 0;
let product = 1;

while (i <= n) {
  console.log(i);
  product = product * i;
  sum = sum + 1;
  i = i + 1; 
}

console.log("after the loop i is: " + i);

console.log("The result is: " + product);
console.log("The result is: " + sum);