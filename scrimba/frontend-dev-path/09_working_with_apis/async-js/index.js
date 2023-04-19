let deckId = ''
let computerScore = 0,
  ownScore = 0
const computerScoreEl = document.getElementById('computer-score')
const ownScoreEl = document.getElementById('own-score')
const cardsContainer = document.getElementById('deck')
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
const remainingText = document.getElementById('remaining-cards')
const winnerTxtEl = document.getElementById('winner-text')
const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/'

newDeckBtn.addEventListener('click', fetchCard)
drawCardBtn.addEventListener('click', drawCard)

function fetchCard() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      remainingText.textContent = `Remaining cards: ${data.remaining}`
      deckId = data.deck_id
      console.log(computerScore)
    })
}

function drawCard() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      cardsContainer.children[0].innerHTML = `<img src="${data.cards[0].image}">`
      cardsContainer.children[1].innerHTML = `<img src="${data.cards[1].image}">`

      const winnerTxt = determineWinner(data.cards[0], data.cards[1])
      winnerTxtEl.innerHTML = winnerTxt

      let remainingCardsCount = `Remaining cards: ${data.remaining}`
      remainingText.innerHTML = remainingCardsCount

      if (data.remaining === 0) drawCardBtn.disabled = true
    })
}

/**
 * Challenge:
 *
 * Keep score! Every time the computer wins a hand, add a point to
 * the computer's score. Do the same for every time you win a hand.
 * If it's a war, no points are awarded to either player. If it's
 * a war (same card values), no one is awarded points.
 *
 * Display the computer's score above the top card, display your
 * own score BELOW the bottom card.
 *
 * Track the scores in a global variable defined at the top of this file
 *
 * Add to the global scores inside the `determineCardWinner` function below.
 */

function determineWinner(card1, card2) {
  const valueOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
  const card1Value = valueOptions.indexOf(card1.value)
  const card2Value = valueOptions.indexOf(card2.value)

  if (card1Value > card2Value) {
    computerScore++
    computerScoreEl.textContent = `Computer score: ${computerScore}`
    return 'Computer Wins'
  } else if (card1Value < card2Value) {
    ownScore++
    ownScoreEl.textContent = `Your score: ${ownScore}`
    return 'You Win'
  } else {
    return 'War'
  }
}
