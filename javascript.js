const userChoice= document.getElementById("userChoice")
const computerChoice= document.getElementById("computerChoice")
const result= document.getElementById("result")
const score= document.getElementById("score")
const winner= document.getElementById("winner")




function getComputerChoice(){

let choice;

choice=Math.floor(Math.random()*3);

if (choice===0){
    
    computerChoice.textContent="The Computer Choose Rock";
    return "rock";
}
if (choice===1){
    
    computerChoice.textContent="The Computer Choose paper";
    return "paper";
}
if (choice===2){
    
    computerChoice.textContent="The Computer Choose Scissors";
    return "scissors";
}

}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice==="rock" && computerChoice==="rock"){

        result.textContent="it's a tie";
 
        
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){

        result.textContent="Computer Wins!";
        computerScore++;
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){

        result.textContent="User Wins!";
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){

        result.textContent="User Wins!";
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="paper"){

        result.textContent="it's a tie";
        
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){

        result.textContent="Computer Wins!";
        computerScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){

        result.textContent="Computer Wins!";
        computerScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){

        result.textContent="User Wins!";
        humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="scissors"){

        result.textContent="it's a tie";
        
    }
  
}

 let humanSelection;

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {

    winner.textContent = "";
    humanSelection="rock"; 
    userChoice.textContent="The User Choose Rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    announceWinner();
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    winner.textContent = "";

    humanSelection="paper"; 
    userChoice.textContent="The User Choose Paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    announceWinner();
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {

    winner.textContent = "";
    humanSelection="scissors"; 
    userChoice.textContent="The User Choose scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    announceWinner();
});

function announceWinner(){

if (humanScore===5){

    userChoice.textContent = "";
    computerChoice.textContent = "";
    result.textContent = "";
    

    winner.textContent = "User is the Victor";
    humanScore=0
    computerScore=0
}
else if (computerScore===5) {

    userChoice.textContent = "";
    computerChoice.textContent = "";
    result.textContent = "";
    

    winner.textContent = "Computer is the Victor";
     humanScore=0
    computerScore=0
}
}
