import characterData from './data.js'
import Character from './Character.js'

let charactersArr = ['red', 'blue', 'purple']
let isWaiting = false

function getNewCharacter() {
  const nextCharacterData = characterData[charactersArr.shift()]
  return nextCharacterData ? new Character(nextCharacterData) : {}
}

function attack() {
  if (!isWaiting) {
    black.setDiceHtml()
    character.setDiceHtml()
    black.takeDamage(character.currentDiceScore)
    character.takeDamage(black.currentDiceScore)
    render()

    if (black.dead) {
      gameOver()
    } else if (character.dead) {
      isWaiting = true
      if (charactersArr.length > 0) {
        setTimeout(() => {
          character = getNewCharacter()
          render()
          isWaiting = false
        }, 1500)
      } else {
        gameOver()
      }
    }
  }
}

function gameOver() {
  isWaiting = true
  const endMessage =
    black.dead && character.dead
      ? 'No victors - all creatures are dead'
      : black.dead
      ? 'The Black Wins'
      : 'The characters are victorious'

  const endEmoji = character.dead ? '⚫' : '🔴'
  setTimeout(() => {
    document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
  </div>`
  }, 1500)
}

document.getElementById('attack-button').addEventListener('click', attack)
function render() {
  document.getElementById('black').innerHTML = black.getCharacterHtml()
  document.getElementById('red').innerHTML = character.getCharacterHtml()
}
const black = new Character(characterData.black)
let character = getNewCharacter()

render()
