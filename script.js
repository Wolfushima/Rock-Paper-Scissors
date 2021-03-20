const game = () => {
    let playerScore = 5;
    let computerScore = 0;
    let playerBar = document.querySelectorAll(".health-1 img");
    let computerBar = document.querySelectorAll(".health-2 img");
    let playerHealth = Array.from(playerBar);
    let computerHealth = Array.from(computerBar);
    const arena = document.querySelector(".container");
    const introGame = document.querySelector(".introGame");
    const body = document.querySelector("body");
    const mainContent = document.querySelector(".main-content");

    //start game
    const startGame = () => {
        const startBtn = document.querySelector(".introGame button");       
        const charChoosen = document.querySelectorAll(".characterSelection img");
        const charSelection = document.querySelector(".characterSelection");
        const characters = document.querySelector(".characters");
        const btnSelectSound = document.querySelector('audio[data-sound="btnSelectSound"]');
        
        startBtn.addEventListener("click", () => {
            btnSelectSound.currentTime = 0;
            btnSelectSound.play();
            introGame.classList.add("fadeOut");
            charSelection.classList.add("fadeIn");
        })

        charChoosen.forEach(character => {
            character.addEventListener("click", function() {
                let imgCharPlayer = document.getElementById("imgCharPlayer");
                let imgCharComp = document.getElementById("imgCharComp");
                btnSelectSound.currentTime = 0;
                btnSelectSound.play();

                imgCharPlayer.src = this.src;

                const compChar = () => {
                    if (character.id === "wizardImg") {
                        return imgCharComp.src = "Images/dragon.png";
                    } else if (character.id === "santaClausImg") {
                        return imgCharComp.src = "Images/witch.png";
                    } else return imgCharComp.src = "Images/devil.png"
                }

                characters.classList.add("fadeOut");
                mainContent.classList.add("fadeIn");

                compChar();
            })
        })
    }
    //game
    const playRound = () => {
        const weaponsContainer = document.querySelector(".weapons");
        const weapons = document.querySelectorAll(".weapons-container button");
        const playerBox = document.querySelector(".sub-b1 img");
        const computerBox = document.querySelector(".sub-b2 img");       
        const computerWeapons = ["rock", "paper", "scissors"];
        

        weapons.forEach(weapon => {
            weapon.addEventListener("click", function() {
                const computerSelection = computerWeapons[Math.floor(Math.random() * 3)];
                const boxDotsB1 = document.querySelector(".sub-b1 .threeDots");
                const boxDotsB2 = document.querySelector(".sub-b2 .threeDots");
                const afterChoiceSound = document.querySelector('audio[data-sound="afterChoiceSound"]');

                playerSelection = this.dataset.weapon;
                weaponsContainer.style.pointerEvents = "none";
                arena.style.animation = "bg-color-trans 0.8s ease-in-out";
                afterChoiceSound.currentTime = 0;
                afterChoiceSound.play();

                setTimeout(() => {
                    playerBox.src = `./Images/${this.dataset.weapon}.png`;
                    computerBox.src = `./Images/${computerSelection}.png`;
                    
                    boxDotsB1.style.visibility = "hidden";
                    boxDotsB2.style.visibility = "hidden";
                    playerBox.style.visibility = "visible";
                    computerBox.style.visibility = "visible";

                    setTimeout(() => {
                        boxDotsB1.style.visibility = "visible";
                        boxDotsB2.style.visibility = "visible"
                        playerBox.style.visibility = "hidden";
                        computerBox.style.visibility = "hidden";
                        arena.style.animation = "none";
                        weaponsContainer.style.pointerEvents = "all";

                        compareSelections(playerSelection,computerSelection);
                    }, 800);
                }, 800);
            })
        })
    }

    const checkLifePoints = () => {
        const div = document.createElement("div");
        const button = document.createElement("button");
        const loseGameSound = document.querySelector('audio[data-sound="loseGameSound"]');
        const winGameSound = document.querySelector('audio[data-sound="winGameSound"]');
        const endBtnSound = document.querySelector('audio[data-sound="endButtonSound"]');

        if ((playerScore === 0) || (computerScore === 5)){
            body.insertBefore(div, introGame);
            div.classList.add("outroGame");
            div.appendChild(button);
            button.classList.add("endBtn");
            mainContent.style.zIndex = "-1";
            mainContent.style.opacity = "0.1";

            button.onclick = () => { 
                endBtnSound.currentTime = 0;
                endBtnSound.play();
                setTimeout(() => {
                    location.reload();
                }, 500);
                
            }
            if (playerScore === 0) { 
                loseGameSound.currentTime = 0;
                loseGameSound.play();
                button.textContent = "You Lost!";
                button.style.backgroundColor = "#8c0101";
            }
            if (computerScore === 5) {
                winGameSound.currentTime = 0;
                winGameSound.play();
                button.textContent = "You Won!";
                button.style.backgroundColor = "#208502";
            }  
        }
    }

    const compareSelections = (playerSelection, computerSelection) => { 
        const drawSound = document.querySelector('audio[data-sound="drawSound"');
        const losePointSound = document.querySelector('audio[data-sound="losePointSound"]');  
        const winPointSound = document.querySelector('audio[data-sound="winPointSound"]');

        if (playerSelection === computerSelection) {
            drawSound.currentTime = 0;
            drawSound.play();
            return;
        }
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
                computerScore++;
                computerHealth[computerScore - 1].src = "Images/health-down.png";
                computerHealth[computerScore - 1].style.animation = "none";
                computerHealth[computerScore - 1].style.backgroundImage = "none";
                computerHealth[computerScore - 1].style.filter = "invert(1)";
                winPointSound.currentTime = 0;
                winPointSound.play();
                checkLifePoints();
                return;
        }
        if ((computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")) {
                playerScore--;
                playerHealth[playerScore].src = "Images/health-down.png";
                playerHealth[playerScore].style.animation = "none";
                playerHealth[playerScore].style.backgroundImage = "none";
                playerHealth[playerScore].style.filter = "invert(1)";
                losePointSound.currentTime = 0;
                losePointSound.play();
                checkLifePoints();
                return;
        }
    }
    startGame();
    playRound();
}
game();