function play(playerChoice) {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let result;
    if (playerChoice === computerChoice) {
        result = 'Tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'I win!';
    }

    document.getElementById('result').innerText = `I chose ${computerChoice}. ${result}`;
}

