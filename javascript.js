console.log("Hello World")

function getComputerChoice (max) {
    max=3;
    
    return Math.floor(Math.random() * max);

}

console.log(getComputerChoice (3))

function getHumanChoice() {
    let answer = parseInt(prompt(" please enter rock paper or scissors "));
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);