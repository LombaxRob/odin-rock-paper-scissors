function getComputerChoice (){
    // create a random whole number between 0 and 2
    let choiceNum = Math.floor((Math.random() * 3));

    // choses rock, paper or scissors with error message
    if (choiceNum == 0) {
        return "rock";
    } else if (choiceNum == 1) {
        return "paper";
    } else if (choiceNum == 2) {
        return "scissors";
    } else {
        return "Error: compChoice function not returning the correct value";
    }
}

function getHumanChoice(){
    let userInput = prompt("rock, paper or scissors?");
    return userInput;
}

// testing getComputerChoice function output
console.log(getComputerChoice());
// testing getHumanChoice function output
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;