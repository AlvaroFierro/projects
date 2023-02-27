import { getDiceRollArray } from './utils.js'

function Character(data) {
  Object.assign(this, data)

  const { name, avatar, health, diceCount } = this

  this.getDiceHtml = function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount)
      .map(function (num) {
        return `<div class="dice">${num}</div>`
      })
      .join('')
  }

  this.getCharacterHtml = function () {
    const diceHtml = this.getDiceHtml(diceCount)

    return `
    <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
      <div class="health">health: <b> ${health} </b></div>
      <div class="dice-container">${diceHtml}
      </div>
    </div>`
  }
}

export default Character
