let roundsPlayed = 0; 
let playerScore = 0;
let computerScore = 0;

while (roundsPlayed <= 4) {
    let enterChoice = prompt('Enter rock, paper or scissors', '');

    let playerSelection = enterChoice.toLowerCase();
        alert(playerSelection);

    let computerSelection = computerPlay().toLowerCase();
        alert(computerSelection);


    playRound(playerSelection, computerSelection);
    
    
    function computerPlay() {
        var computerRandom = ['rock','paper','scissors'];
        var computerRandom = computerRandom[Math.floor(Math.random() * 3)];
        return computerRandom;
    }
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            alert('Tie');
            return
        }   
        else if (playerSelection == 'rock' && computerSelection == 'paper') {
            alert('You lost! Paper beats Rock');
            computerScore++;
            return computerScore;
        }
        else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            alert('You won! Rock beats Scissors');
            playerScore++;
            return playerScore;
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            alert('You won! Paper beats Rock');
            playerScore++;
            return playerScore;
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            alert('You lost! Scissors beats Paper');
            computerScore++;
            return computerScore;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            alert('You won! Scissors beats Paper');
            playerScore++;
            return playerScore;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            alert('You lost! Rock beats Scissors');
            computerScore++;
            return computerScore;
        }         
    }

    roundsPlayed++;

    alert('Player Score: ' + playerScore);
    alert('Computer Score: ' + computerScore);
}

if (playerScore > computerScore) {
    alert('Player Won!');  
}
else if (playerScore < computerScore) {
    alert('Computer Won!');
}
else {
    alert('No one won!');
}
