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

const choices = ['rock','paper','scissor']
const rockClass = 'fa-solid fa-hand-back-fist'
const paperClass = 'fa-solid fa-hand'
const scissorClass = 'fas fa-hand-scissors'

let playerPoints = 0
let computerPoints = 0

startButton.addEventListener('click', startGame)

function startGame(){
  startButton.style.display = 'none'
  weaponChoiceMenu.style.display = 'flex'
  rockChoice.addEventListener('click', () => {
    score('rock')
    playerScoreIcon.className = rockClass
  })
  paperChoice.addEventListener('click', () => {
    score('paper')
    playerScoreIcon.className = paperClass
  })
  scissorChoice.addEventListener('click', () => {
    score('scissor')
    playerScoreIcon.className = scissorClass
  })
} 

function score(playerChoice){
  let computerChoice = getComputerChoice()
  console.log(playerChoice,computerChoice)
  if(playerChoice === computerChoice){
    roundResult.innerText = "IT'S A TIE"
    roundCriteria.innerText = `${playerChoice} ties with ${computerChoice}`
  }
  else if(playerChoice === 'rock' && computerChoice === 'scissor'){
    win(playerChoice,computerChoice)
  }
  else if(playerChoice === 'rock' && computerChoice === 'paper'){
    lose(playerChoice,computerChoice)
  }
  else if(playerChoice === 'paper' && computerChoice === 'rock'){
    win(playerChoice,computerChoice)
  }
  else if(playerChoice === 'paper' && computerChoice === 'scissor'){
    lose(playerChoice,computerChoice)
  }
  else if(playerChoice === 'scissor' && computerChoice === 'paper'){
    win(playerChoice,computerChoice)
  }
  else{
    lose(playerChoice,computerChoice)
  }
}

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * choices.length)
  let computerChoice = choices[randomNumber]
  if(computerChoice === 'rock'){
    computerScoreIcon.className = rockClass
  }
  else if(computerChoice === 'paper'){
    computerScoreIcon.className = paperClass
  }
  else{
    computerScoreIcon.className = scissorClass
  }
  return computerChoice
}

function win(playerChoice,computerChoice){
  roundResult.innerText = "YOU WIN"
  roundCriteria.innerText = `${playerChoice} beats ${computerChoice}`
}

function lose(playerChoice,computerChoice){
  roundResult.innerText = "YOU LOSE"
  roundCriteria.innerText = `${playerChoice} loses to ${computerChoice}`
}