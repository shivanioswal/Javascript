/* Create a game where you start with any random game number. Ask user to keep guessing the random number until the user enters
a correct number */

let computerNumber =25;
let userNumber=prompt("Enter a number");

while(computerNumber!=userNumber) //!== should be used when you want to match they typeof variable. strict.
{
    userNumber=prompt("You entered wrong number. Guess again !")
   

}
console.log(`Hurray ! The number you entered matched !! ${computerNumber} Computer's Number & ${userNumber} Your Number`);
