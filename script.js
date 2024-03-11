function getComputerChoice (){
    let computerArrayChoice = ["rock", "paper", "scissors"];
    return computerArrayChoice[Math.floor(Math.random()*3)]
}

function getPlayerChoice(){
    let playerSelection;
    do {
        playerSelection = prompt("Ingresa rock, paper o scissors: ");
        playerSelection = playerSelection.toLowerCase();
    } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");
    return playerSelection
}

function playRound (computerSelection, playerSelection){
    if(computerSelection === "rock" && playerSelection === "scissors"){
        console.log("You Lose! Rock beats Scissors");
        return 0;
    }else if (computerSelection === "paper" && playerSelection === "rock"){
        console.log("You Lose! Paper beats Rock");
        return 0;
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
        console.log("You Lose! Scissors beats Paper");
        return 0;
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors");
        return 1;
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
        return 1;
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper");
        return 1;
    }else{
        console.log("Tie");
        return 2;
    }
}

function playGame(){
    let computerWin = 0;
    let userWin = 0;
    let tie = 0;
    for(i=0; i<5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let result = playRound(computerSelection,playerSelection);
        if(result === 0){
            computerWin++;
        }else if(result === 1){
            userWin++;
        }else{
            tie++;
        }
    }
    console.log("Resultados: \n");
    console.log(`User: ${userWin} | Computer: ${computerWin} | Tie: ${tie}`);
}


playGame();
