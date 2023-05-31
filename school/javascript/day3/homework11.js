let readlineSync = require('readline-sync');
let number1 = Number(readlineSync.question("Give me your first number?"));
let number2 = Number(readlineSync.question("Give me your second number?"));
if(number1 < number2){
    console.log("The larger number is " + number2);
}
else if (number1 > number2){
    console.log("The larger number is " + number1)
}
else {
 console.log("Its the same")
}

