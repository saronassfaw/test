let readlineSync = require('readline-sync');
let number1 = Number(readlineSync.question("Give me your first number?"));
let number2 = Number(readlineSync.question("Give me your second number?"));
let number3 = Number(readlineSync.question("Give me your second number?"));
if(number1 >= number2 && number1 >= number3){
    console.log("The larger number is " + number1);
}
else if (number3 >= number1  && number3 >= number2){
    console.log("The larger number is " + number3)
}
else if (number2 >= number1 && number2 >= number3){
    console.log("The larger number is " + number2)
}
else {
 console.log("Its the same")
}

