#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number  - done
// 2) User input for guessing number   - done
// 3) Compare user input with computer generate number and show result   - done
const randomNumber = Math.floor(Math.random()* 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6:",
    },
]);
if (answers.UserGuessedNumber == randomNumber){
    console.log("Congratulations! you guessed the right number.");
}else{
    console.log("Sorry! you guessed the wrong number.");
}



1