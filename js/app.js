const startButton = document.querySelector('#startButton')
const weaponChoiceMenu = document.querySelector('#weaponChoice')
const rockChoice = document.querySelector('#rockChoice')
const paperChoice = document.querySelector('#paperChoice')
const scissorChoice = document.querySelector('#scissorChoice')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const roundResult = document.querySelector('#roundResult')
const roundCriteria = document.querySelector('#roundCriteria')
const playerScoreIcon = document.querySelector('#playerScoreIcon')
const computerScoreIcon = document.querySelector('#computerScoreIcon')

startButton.addEventListener('click', startGame)

function startGame(){
  startButton.style.display = 'none'
  weaponChoiceMenu.style.display = 'flex'
  rockChoice.addEventListener('click', () => {
    score('rock')
  })
  paperChoice.addEventListener('click', () => {
    score('paper')
  })
  scissorChoice.addEventListener('click', () => {
    score('scissor')
  })
} 

function score(playerChoice){
  console.log(playerChoice)
}

function getComputerChoice(){
  
}