function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = document.querySelector('.result');

    if (userChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${computerChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}