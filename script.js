const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //start game
    const startGame = () => {
        const startBtn = document.querySelector(".introGame button");
        const introGame = document.querySelector(".introGame");
        const charChoosen = document.querySelectorAll(".characterSelection img");
        const charSelection = document.querySelector(".characterSelection");
        const characters = document.querySelector(".characters");
        const mainContent = document.querySelector(".main-content");

        startBtn.addEventListener("click", () => {
            introGame.classList.add("fadeOut");
            charSelection.classList.add("fadeIn");
        })

        charChoosen.forEach(character => {
            character.addEventListener("click", function() {
                let imgCharPlayer = document.getElementById("imgCharPlayer");
                let imgCharComp = document.getElementById("imgCharComp");

                imgCharPlayer.src = this.src;

                const compChar = () => {
                    if (character.id === "wizardImg") {
                        return imgCharComp.src = "Images/dragon.png";
                    } else if (character.id === "santaClausImg") {
                        return imgCharComp.src = "Images/witch.png";
                    } else return imgCharComp.src = "Images/devil.png"
                }
                compChar();

                characters.classList.add("fadeOut");
                mainContent.classList.add("fadeIn");
            })
        })
    }

    
    //game
    const playRound = () => {
        const weapons = document.querySelectorAll(".weapons-container button");

        const computerWeapons = ["rock", "paper", "scissors"];

        weapons.forEach(weapon => {
            weapon.addEventListener("click", function() {
                const computerRandom = computerWeapons[Math.floor(Math.random() * 3)];
                console.log(computerRandom);
            })
        });

        
    }


    //start functions
    startGame();
    playRound();
}

game();










/*


const rockButton = document.querySelector("#rock-btn").addEventListener("click", playGame);
function playGame() {
    let playChoice = this.dataset.weapon;
    console.log(playChoice);
}




const button = document.querySelectorAll('button');
const selection = Array.from(button);

selection.addEventListener("click", function(e) {
    console.log(e);
} )
playerSelection.addEventListener("click", function(e) {
    let rock = "rock";
    console.log(rock);
});



let roundsPlayed = 0; 
let playerScore = 0;
let computerScore = 0;

while (roundsPlayed <= 4) {
    let playerSelection = 

    let computerSelection = computerPlay();


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
*/