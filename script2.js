let myarray = ["rock", "paper", "scissors"];
function getComputerchoice () {
    return myarray[Math.floor(Math.random() * myarray.length)];
}



function playRound(playerSelection, computerSelection) {


    console.log(`Player choice: ${playerSelection}`);
console.log(`Computer Choice: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return string = "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper")
               {
                return string = " You Win! Congratulations!";
               } else {

                return string = "You lose";
               }
            
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("what is your choice(rock, paper, scissors?) :");
    playRound(playerSelection, getComputerchoice());
}
console.log('Game over');
}
game();

