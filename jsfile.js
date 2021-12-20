
// const playerSelection = 'rock';

// Function for playing a best out of 5 games
function game() {

    const maxRounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    let computerSelection = '';
    let playerSelection= '';
    
    for (let i = maxRounds; i > 0 ; i--){
        playerSelection = window.prompt("Rock, Paper, or Scissors?");
        computerSelection = computerPlay();
        console.log("Player chose " + playerSelection);
        console.log("Computer chose " + computerSelection);
        roundResult = (playRound(playerSelection, computerSelection));

        if(roundResult == 'win'){
            playerWins++;
            console.log("Player wins!");
        }else if(roundResult =='lose'){
            computerWins++;
            console.log("Computer wins!");
        }else{
            console.log("It's a tie!");
        }

        console.log("Player: " + playerWins + " Computer: " + computerWins );

    }

    if(playerWins > computerWins){
        console.log("The player wins the game!")
    }else if (playerWins < computerWins){
        console.log("The computer wins the game!")
    }else{
        console.log("It\'s a tie!");
    }
    
}




// Function to generate a random computer play (rock, paper, or scissors)
function computerPlay() {

    let choice = '';
    randomNumber = Math.random()*100;

    if (randomNumber <= 33.33) {
        choice = 'rock';
    }else if ((randomNumber >= 66.67) && (randomNumber <= 100)) {
        choice= 'scissors';
    }else {
        choice='paper';
    }

    return choice;
}


// Function to generate a single round of play of rock, paper, scissors
//let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    let roundResult = '';
    let playerChoice = playerSelection.toLowerCase();

    if ((playerChoice == 'rock') && (computerSelection == 'rock')) {
        roundResult = 'tie';
    } else if ((playerChoice == 'rock') && (computerSelection == 'paper')) {
        roundResult = 'lose';
    } else if ((playerChoice == 'rock') && (computerSelection == 'scissors')) {
        roundResult = 'win';
    } else if ((playerChoice == 'paper') && (computerSelection == 'rock')) {
        roundResult = 'win';
    } else if ((playerChoice == 'paper') && (computerSelection == 'paper')) {
        roundResult = 'tie';
    } else if ((playerChoice == 'paper') && (computerSelection == 'scissors')) {
        roundResult = 'lose';
    } else if ((playerChoice == 'scissors') && (computerSelection == 'rock')) {
        roundResult = 'lose';
    } else if ((playerChoice == 'scissors') && (computerSelection == 'paper')) {
        roundResult = 'win';
    } else {
        roundResult = 'tie';
    }

    return roundResult;
}

    // let result = playRound(playerSelection, computerSelection);
    // console.log("Round: " + result);
// Testing the output of playRound
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
