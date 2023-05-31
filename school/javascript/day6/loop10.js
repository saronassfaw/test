let readlineSync = require("readline-sync");

let n = readlineSync.questionInt("What is the number to sum up to?");

let i = 1;
let sum = 0;

while (i <= n) {
  console.log(i);
  sum = sum + i;
  i = i + 1; 
}
console.log("after the loop i is: " + i);

console.log("The result is: " + sum);