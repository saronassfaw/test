console.log("Greetings Traveler. Welcome to Teyvat!")
let readlineSync = require("readline-sync");
let answer = readlineSync.question("Which continent would you like to explore? (Mondstadt/Liyue/Inazuma)");

if (answer == "Mondstadt"){
    console.log("Welcome to Mondstadt! Jeanne greets you and wants you to the Favionis Knight")
    answer = readlineSync.question("Do you want join the knights? (Yes/No)");
}
if(answer == "Yes")
{
    console.log("Congratiolations you're a part of the honory knights and get your first mission to defeat Dvalin!")
    console.log("Your brave self")
}

if (answer == "Inazuma"){
    console.log("Welcome to Inazuma! The Shogun noticed your entrance invited to their castle. ") 
    console.log("She invites you to her castle. Turns out she wants to kill you. GAME OVER")
}
