class Game{
  constructor(startButton,weaponChoiceMenu,rockChoice,paperChoice,scissorChoice,playerScore,computerScore,playerScoreIcon,computerScoreIcon,roundResult,roundCriteria){
    this = {startButton,weaponChoiceMenu,rockChoice,paperChoice,scissorChoice,playerScore,computerScore,playerScoreIcon,computerScoreIcon,roundResult,roundCriteria}
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