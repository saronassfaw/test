let readlineSync = require('readline-sync');
let score = Number(readlineSync.question("What is your score?"));

if(score >= 90){
    console.log("Du hast eine eins")
}

else if (score >= 80){
    console.log("Du hast eine zwei")
}

else if (score >= 79){
    console.log("Du hast eine drei")
}

else if (score >= 60){
    console.log("Du hast eine vier")
}

else if (score >= 40){
    console.log("Du hast eine fünf")
}

else if (score >= 24){
    console.log("Du hast eine sechs")
}




