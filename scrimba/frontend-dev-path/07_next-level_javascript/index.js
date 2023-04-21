import characterData from './data.js'
import Character from './Character.js'

let rivals = ['red', 'purple', 'blue']

function attack() {
  black.getDiceHtml()
  red.getDiceHtml()
  black.takeDamage(black.currentDiceScore)
  red.takeDamage(red.currentDiceScore)
  render()

  if (black.dead || red.dead) gameOver()
}

function gameOver() {
  const endMessage =
    red.dead && black.dead
      ? 'No victors - all creatures are dead'
      : black.dead
      ? 'The red is Victorius'
      : 'The black Wins'

  const endEmoji = red.dead ? '⚫' : '🔴'
  document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
  </div>`
}

const black = new Character(characterData.black)
const red = new Character(characterData.red)

function render() {
  document.getElementById('black').innerHTML = black.getCharacterHtml()
  document.getElementById('red').innerHTML = red.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack)
render()
