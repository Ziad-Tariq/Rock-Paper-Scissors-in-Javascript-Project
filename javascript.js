
function getComputerChoice(){

let choice;

choice=Math.floor(Math.random()*3);

if (choice===0){
    
    console.log("The Computer Choose Rock");
    return "rock";
}
if (choice===1){
    
    console.log("The Computer Choose paper");
    return "paper";
}
if (choice===2){
    
    console.log("The Computer Choose Scissors");
    return "scissors";
}

}

function getHumanChoice() {
    let answer = prompt(" please enter rock paper or scissors ");
    answer = answer.toLowerCase();

    if (answer==="rock"){
    
    console.log("The User Choose Rock");
    return "rock";
}
    if (answer==="paper"){
    
    console.log("The User Choose paper");
    return "paper";
}
    if (answer==="scissors"){
    
    console.log("The User Choose scissors");
    return "scissors";
}
    return answer
    
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice==="rock" && computerChoice==="rock"){
        console.log("it's a tie");
        
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        console.log("User Wins!");
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        console.log("User Wins!");
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="paper"){
        console.log("it's a tie");
        
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        console.log("User Wins!");
        humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("it's a tie");
        
    }
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

if (humanScore>computerScore){
    console.log("User is the Victor");
}
else if (computerScore>humanScore) {
    console.log("Computer is the Victor");
}

else {
    console.log("The end result is a tie");
}