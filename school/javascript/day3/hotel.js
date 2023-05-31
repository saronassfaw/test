
//let guest = Number(readlineSync.question("How many guest will be staying"));
let readlineSync = require('readline-sync');
let stay = Number(readlineSync.question("Welcome to J Hotel! How many  nights will you stay?"));
let pernight = 90;


if(stay >= 5 ){
    total = pernight * 0.90;
}

if(stay >= 10 ){
    total = pernight * 0.85;
}
if(stay >= 20 ){
    total = pernight * 0.80;
}

console.log("That will be" + total + "EUR")

let breakfast = readlineSync.question("Do you want to have breakfast?");

if (breakfast = "yes"){
    total2 = total + pernight * 10;
}
console.log("With Breakfast included will be" + total2 + "EUR");

let guest = Number(readlineSync.question("How many are staying?"));

if(guest = 1){
    total3 = total2;
}
if(guest = 2){
    total3 = pernight * 10;
}
console.log("Everything included will be" + total3 + "EUR");