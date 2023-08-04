let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const playerChoice = choice.getAttribute("data-choice");
        matchChoices(playerChoice);

    })

})

function matchChoices (playerChoice) {
    const Array = ["rock" , "paper" , "scissors"];
    const computerChoice = Array[Math.floor(Math.random() * Array.length)];
    const displaymessage = document.getElementById("Display-msg")
    console.log(`Player Choice : ${playerChoice}`);
    console.log(`Computer Choice : ${computerChoice}`);
    if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper") {
            displaymessage.textContent = "You win!Congrats";
            playerScore ++;

        } else if (playerChoice == computerChoice) {
            displaymessage.textContent = "It's a draw!";
        } else {
            displaymessage.textContent = "You still got this! Try again!";
            computerScore ++;
        }
        Score();

}


function Score () {
    const playerScorepara = document.getElementById("player-score");
    const computerScorepara = document.getElementById("computer-score"); 
    let resultText;
    playerScorepara.textContent = `${playerScore}`;
    computerScorepara.textContent = `${computerScore}`;
    if (playerScore >= 5) {
        //create the modal with New Game button
        const modal = document.getElementById('result-modal');
        const resultTextContent = document.getElementById("result-text");
        resultTextContent.textContent = "Congrats! You win the game!!";
        const newGameButton = document.getElementById("new-game-button");
        newGameButton.addEventListener("click", Gamereset);
        modal.style.display = "flex";

    } else if (computerScore >= 5) {
        const modal = document.getElementById('result-modal');
        const resultTextContent = document.getElementById("result-text");
        resultTextContent.textContent = "Unlucky...Try again!";
        const newGameButton = document.getElementById("new-game-button");
        newGameButton.addEventListener("click", Gamereset);   
        modal.style.display = "flex"; 
    }
}

function Gamereset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("result-modal").style.display ="none";
}





