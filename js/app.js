class Game{
  constructor(startButton,weaponChoiceMenu,rockChoice,paperChoice,scissorChoice,playerScore,computerScore,playerScoreIcon,computerScoreIcon,roundResult,roundCriteria){
    this.startButton = startButton
    this.weaponChoiceMenu = weaponChoiceMenu
    this.rockChoice = rockChoice
    this.paperChoice = paperChoice
    this.scissorChoice = scissorChoice
    this.playerScore = playerScore
    this.computerScore = computerScore
    this.playerScoreIcon = playerScoreIcon
    this.computerScoreIcon = computerScoreIcon
    this.roundResult = roundResult
    this.roundCriteria = roundCriteria

    this.startButton.addEventListener('click', this.start)
  }

  start = () => {
    this.weaponChoiceMenu.style.display = 'flex'
    this.startButton.style.display = 'none'
    this.rockChoice.addEventListener('click', this.rock)
    this.paperChoice.addEventListener('click', this.paper)
    this.scissorChoice.addEventListener('click', this.scissor)
  }

  rock = () => {
    console.log('rock')
  }

  paper = () => {
    console.log('paper')
  }

  scissor = () => {
    console.log('scissor')
  }
}

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

const game = new Game(startButton,weaponChoiceMenu,rockChoice,paperChoice,scissorChoice,playerScore,computerScore,playerScoreIcon,computerScoreIcon,roundResult,roundCriteria)