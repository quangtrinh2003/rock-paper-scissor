//1. Rock
//2. Paper
//3. Scissor


function getComputerChoice()
{
    // Random tu 1 toi 3
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoice()
{
    let playerChoice = prompt("Hay nhap lua chon: ");
    
    if(playerChoice.toLowerCase() === "rock")
    {
        return 1;
    }
    else if(playerChoice.toLowerCase() === "paper")
    {
        return 2;
    }
    else
    {
        return 3;
    }
}

function playRound(computerChoice, playerChoice)
{
    //Draw
    if(computerChoice - playerChoice === 0)
    {
        return 0;
    }
    //Computer win
    if(computerChoice - playerChoice === 1)
    {
        return 1;
    }
    if(playerChoice - computerChoice === 2)
    {
        return 1;
    }
    //Computer lose
    if(computerChoice - playerChoice === 2 ||  computerChoice - playerChoice < 0)
    {
        return 2;
    }
}

function printRoundResult(computerChoice, playerChoice, computerScore, playerScore)
{
    console.log(computerChoice + " " + playerChoice);
    console.log(computerScore + " - " + playerScore);
}

function play()
{
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5 ; i++)
    {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        const roundResult = playRound(computerChoice, playerChoice);

        if(roundResult === 1)
        {
            computerScore++;
        }
        else if(roundResult === 2)
        {
            playerScore++;
        }

        printRoundResult(computerChoice, playerChoice, computerScore, playerScore);
    }
}

play();

