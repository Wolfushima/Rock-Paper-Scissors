const game = () => {
    let playerScore = 5;
    let computerScore = 5;

    let playerBar = document.querySelectorAll(".health-1 img");
    let computerBar = document.querySelectorAll(".health-2 img");
    let playerHealth = Array.from(playerBar);
    let computerHealth = Array.from(computerBar);

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
        const playerBox = document.querySelector(".sub-b1 img");
        const computerBox = document.querySelector(".sub-b2 img");
        
        const computerWeapons = ["rock", "paper", "scissors"];

        weapons.forEach(weapon => {
            weapon.addEventListener("click", function() {
                const computerSelection = computerWeapons[Math.floor(Math.random() * 3)];
                const boxDotsB1 = document.querySelector(".sub-b1 .threeDots");
                const boxDotsB2 = document.querySelector(".sub-b2 .threeDots");

                playerSelection = this.dataset.weapon;

                playerBox.src = `./Images/${this.dataset.weapon}.png`;
                computerBox.src = `./Images/${computerSelection}.png`;
                
                boxDotsB1.style.visibility = "hidden"
                boxDotsB2.style.visibility = "hidden"
                playerBox.style.visibility = "visible";
                computerBox.style.visibility = "visible";
                
                setTimeout(() => {
                    boxDotsB1.style.visibility = "visible";
                    boxDotsB2.style.visibility = "visible"
                    playerBox.style.visibility = "hidden";
                    computerBox.style.visibility = "hidden";
                    compareSelections(playerSelection,computerSelection);
                }, 1000);


                
            })
        })
    }

    const checkLifePoints = () => {
        if ((playerScore === 0) || (computerScore === 0)){
            location.reload();
        }
        /*console.log(playerScore);
        console.log(computerScore);
        console.log(playerHealth[1]);*/
        
        
    }

    const compareSelections = (playerSelection, computerSelection) => {
        const arena = document.querySelector(".container");        
        
        if (playerSelection === computerSelection) {
            arena.style.backgroundColor = "purple";
            return;
        }
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
                computerScore--;
                computerHealth[computerScore].src = "Images/health-down.png";
                checkLifePoints();
                return arena.style.backgroundColor = "green";
        }
        if ((computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")) {
                playerScore--;
                playerHealth[playerScore].src = "Images/health-down.png";
                checkLifePoints();
                return arena.style.backgroundColor = "red";
        }
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