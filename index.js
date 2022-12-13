console.log("WELCOME TO THE QUIZ ")
var readlineSync = require("readline-sync");
var userName =readlineSync.question("What is your name ? : ")
console.log("Hi " +userName + "  Welcome to the Quiz :" )
score=0 ;

function game(question,answer) {
var userAnswer = readlineSync.question(question);
  if ( userAnswer === answer )
  {
    console.log("right")
    score = score + 1 
    console.log(score)
  }
  else
    console.log("wrong ") ;
    score = score - 1
   console.log(score)
  
}
game ("where do mohit live ? :  ","yamunanagar")
game ("what is his pet name ? : ", "hazy")
game ("what is the age of Mohit :   ","22")
game ("Favourite fruit : ? ","mango")
game ("Highest qualification of Mohit ","bca")
console.log("Your final score is : "+ score)