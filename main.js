// intialise global variables
let humanScore = 0;
let computerScore = 0;

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

// store player and computer choices
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(computerChoice, humanChoice) {
    // input sanitation to lower case
    humanChoice = humanChoice.toLowerCase();

    // selects the winner
    if (humanChoice == computerChoice) {
        console.log(`It's a tie!!!, you picked ${humanChoice} and the computer also picked ${computerChoice}`)
        humanScore++;
        computerScore++;
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log(`You win!!!, you picked ${humanChoice} and the computer picked ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose!!!, you picked ${humanChoice} and the computer picked ${computerChoice}`);
            computerScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log(`You win!!!, you picked ${humanChoice} and the computer picked ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose!!!, you picked ${humanChoice} and the computer picked ${computerChoice}`);
            computerScore++;
        }
    } else {
        if (computerChoice == "paper") {
            console.log(`You win!!!, you picked ${humanChoice} and the computer picked ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose!!!, you picked ${humanChoice} and the computer picked ${computerChoice}`);
            computerScore++;
        }
    }
}

playRound(computerSelection, humanSelection);