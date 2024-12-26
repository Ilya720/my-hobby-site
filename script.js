let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['Камінь', 'Ножиці', 'Папір'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    

    if (userChoice === computerChoice) {
        result = `Нічия! Ви і комп'ютер обрали ${userChoice}.`;
        
    } else if (
        (userChoice === 'Камінь' && computerChoice === 'Ножиці') ||
        (userChoice === 'Ножиці' && computerChoice === 'Папір') ||
        (userChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
        result = `Ви виграли! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
        userScore++;
    } else {
        result = `Ви програли. Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
        computerScore++;
    }

    document.getElementById('result').innerText = result;

    document.getElementById('userScore').innerText = userScore;
    document.getElementById('computerScore').innerText = computerScore;
}

