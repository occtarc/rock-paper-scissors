const rockUser = document.getElementById("rock-user");
const paperUser = document.getElementById("paper-user");
const scissorsUser = document.getElementById("scissors-user");
const listaOptions = document.querySelectorAll(".option");
const userScore = document.getElementById("score-user");
const computerScore = document.getElementById("score-computer");
const modal = document.querySelector(".modal");
const modalMessage = document.getElementById("modal-message");
const modalButton = document.getElementById("modal-button");
let userPoints = 0;
let computerPoints = 0;
function getComputerChoice (){
    let computerArrayChoice = ["rock", "paper", "scissors"];
    return computerArrayChoice[Math.floor(Math.random()*3)]
}

function playRound (computerSelection, playerSelection){
    if(computerSelection === "rock" && playerSelection === "scissors"){
        console.log("You Lose! Rock beats Scissors");
        computerPoints++;
        computerScore.innerText = `Score: ${computerPoints}`;
        listaOptions[3].style.backgroundColor = "#52BE80";
        listaOptions[2].style.backgroundColor = "#EC7063"; 
    }else if (computerSelection === "paper" && playerSelection === "rock"){
        console.log("You Lose! Paper beats Rock");
        computerPoints++;
        computerScore.innerText = `Score: ${computerPoints}`;
        listaOptions[4].style.backgroundColor = "#52BE80";
        listaOptions[0].style.backgroundColor = "#EC7063"; 
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
        console.log("You Lose! Scissors beats Paper");
        computerPoints++;
        computerScore.innerText = `Score: ${computerPoints}`;
        listaOptions[5].style.backgroundColor = "#52BE80";
        listaOptions[1].style.backgroundColor = "#EC7063"; 
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors");
        userPoints++;
        userScore.innerText = `Score: ${userPoints}`;
        listaOptions[0].style.backgroundColor = "#52BE80";
        listaOptions[5].style.backgroundColor = "#EC7063"; 
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
        userPoints++;
        userScore.innerText = `Score: ${userPoints}`;
        listaOptions[1].style.backgroundColor = "#52BE80";
        listaOptions[3].style.backgroundColor = "#EC7063"; 
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper");
        userPoints++;
        userScore.innerText = `Score: ${userPoints}`;
        listaOptions[2].style.backgroundColor = "#52BE80";
        listaOptions[4].style.backgroundColor = "#EC7063"; 
    }else if (playerSelection === "rock" && computerSelection === "rock"){
        console.log("Tie");
        listaOptions[0].style.backgroundColor = "#2471A3";
        listaOptions[3].style.backgroundColor = "#2471A3"; 
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("Tie");
        listaOptions[1].style.backgroundColor = "#2471A3";
        listaOptions[4].style.backgroundColor = "#2471A3"; 
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("Tie");
        listaOptions[2].style.backgroundColor = "#2471A3";
        listaOptions[5].style.backgroundColor = "#2471A3"; 
    }
    if(userPoints === 5 || computerPoints === 5){
        if(userPoints === 5){
            showModal(`You Win! ${userPoints} - ${computerPoints}`);
        }else{
            showModal(`You Lost! ${userPoints} - ${computerPoints}`);
        }
    }
}

function resetSquareColors() {
    listaOptions.forEach(option => {
        option.style.backgroundColor = "#D7BDE2";
    });
}

function showModal(message){
    modal.style.display = "block";
    modalMessage.innerText = message;
    modalButton.addEventListener("click", () => {
        modal.style.display = "none";
        resetGame();
    })
}

function resetGame(){
    userPoints = 0;
    computerPoints = 0;
    userScore.innerText = "Score: 0";
    computerScore.innerText = "Score: 0";
    resetSquareColors();
}

rockUser.addEventListener("click",() => {
    resetSquareColors();
    playRound(getComputerChoice(), "rock");
})
paperUser.addEventListener("click",() => {
    resetSquareColors();
    playRound(getComputerChoice(),"paper");
})
scissorsUser.addEventListener("click", () => {
    resetSquareColors();
    playRound(getComputerChoice(),"scissors")
})



