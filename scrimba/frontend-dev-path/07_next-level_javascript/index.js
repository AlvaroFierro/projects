import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ['orc', 'demon', 'goblin']

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(wizard.currentDiceScore)
  orc.takeDamage(orc.currentDiceScore)
  render()

  if (wizard.dead || orc.dead) gameOver()
}

function gameOver() {
  const endMessage =
    orc.dead && wizard.dead
      ? 'No victors - all creatures are dead'
      : wizard.dead
      ? 'The Orc is Victorius'
      : 'The Wizard Wins'

  const endEmoji = orc.dead ? '🔮' : '☠️'
  document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
  </div>`
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack)
render()
