//1. Rock
//2. Paper
//3. Scissor
const arr = ['Búa', 'Bao', 'Kéo'];

//Lay event bua keo bao
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound(1);
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound(2);
});
const scissor =  document.querySelector('.scissor');
scissor.addEventListener('click', () => {
    playRound(3);
});

//Update bang lua chon
const decide = document.querySelector('.decide');

//Update bang diem
const score = document.querySelector('.score');

//Initialize score
let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    // Random tu 1 toi 3
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerChoice)
{
    let computerChoice = getComputerChoice();
    //Draw
    if(computerChoice - playerChoice === 0)
    {
        score.textContent = `${playerScore} - ${computerScore}`;
        decide.textContent = `Bạn chọn: ${arr[playerChoice - 1]} và máy chọn: ${arr[computerChoice - 1]}`;
        return 0;
    }
    //Computer win
    if(computerChoice - playerChoice === 1)
    {
        computerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
        decide.textContent = `Bạn chọn: ${arr[playerChoice - 1]} và máy chọn: ${arr[computerChoice - 1]}`;
        return 1;
    }
    if(playerChoice - computerChoice === 2)
    {
        computerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
        decide.textContent = `Bạn chọn: ${arr[playerChoice - 1]} và máy chọn: ${arr[computerChoice - 1]}`;
        return 1;
    }
    //Computer lose
    if(computerChoice - playerChoice === 2 ||  computerChoice - playerChoice < 0)
    {
        playerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
        decide.textContent = `Bạn chọn: ${arr[playerChoice - 1]} và máy chọn: ${arr[computerChoice - 1]}`;
        return 2;
    }
}


