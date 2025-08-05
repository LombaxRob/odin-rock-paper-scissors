function compChoice (){
    let choiceNum = Math.floor((Math.random() * 3));
    console.log(choiceNum)
    if (choiceNum == 0) {
        return "Rock";
    } else if (choiceNum == 1) {
        return "Paper";
    } else if (choiceNum == 2) {
        return "Scissors";
    } else {
        return "Error: compChoice function not returning the correct value";
    }
}

console.log(compChoice());