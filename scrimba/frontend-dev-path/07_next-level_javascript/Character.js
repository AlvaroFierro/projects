import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'

class Character {
  constructor(data) {
    // properties
    Object.assign(this, data)

    this.maxHealth = this.health
    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
  }

  //methods
  setDiceHtml() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)

    this.diceHtml = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join('')
  }

  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, current) => total + current)

    this.health -= totalAttackScore

    if (this.health <= 0) {
      this.dead = true
      this.health = 0
    }
  }

  getHealthBar() {
    const percent = getPercentage(this.health, this.maxHealth)

    return `
    <div class="health-bar-outer">
      <div class="health-bar-inner ${percent < 26 ? 'danger' : ''} " style="width: ${percent}%;"> </div>
    </div>`
  }

  getCharacterHtml() {
    const { name, avatar, health, diceCount, diceHtml } = this
    const healthBar = this.getHealthBar()

    return `
    <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        ${healthBar}
      <div class="dice-container">${diceHtml}</div>
    </div>`
  }
}

export default Character
