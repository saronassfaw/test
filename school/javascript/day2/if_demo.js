let readlineSync = require('readline-sync');
let age = Number(readlineSync.question("What's your age?"));
if (age < 18){
    console.log("You can't buy alcohol");}
else {
    console.log("There you go")}
    
