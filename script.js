function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
      console.log('Invalid choice. Please choose rock, paper, or scissors.');
      return;
    }
  
    console.log(`Player chooses: ${playerChoice}`);
    console.log(`Computer chooses: ${computerChoice}`);
  
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log('Player wins!');
    } else {
      console.log('Computer wins!');
    }
  }
  
  function game() {
    for (let i = 0; i < 5; i++) {
      const playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
      playRound(playerChoice, computerChoice());
    }
    console.log('Game over!');
  }
  
  game();
  