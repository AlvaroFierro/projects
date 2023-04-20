let deckId = ''
let computerScore = 0,
  ownScore = 0
const computerScoreEl = document.getElementById('computer-score')
const ownScoreEl = document.getElementById('own-score')
const cardsContainer = document.getElementById('deck')
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
const remainingCardsEl = document.getElementById('remaining-cards')
const winnerTxtEl = document.getElementById('winner-text')

const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/'

newDeckBtn.addEventListener('click', fetchCard)
drawCardBtn.addEventListener('click', drawCard)

function fetchCard() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data)
      deckId = data.deck_id
      remainingCardsEl.textContent = `Remaining cards: ${data.remaining}`
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
      remainingCardsEl.textContent = `Remaining cards: ${data.remaining}`

      if (data.remaining === 0) {
        drawCardBtn.disabled = true
        if (computerScore > ownScore) {
          winnerTxtEl.innerHTML = 'The computer won the game!'
        } else if (computerScore < ownScore) {
          winnerTxtEl.innerHTML = 'You won the game!'
        } else {
          winnerTxtEl.innerHTML = 'It is a tie game!'
        }
      }
    })
}

function determineWinner(card1, card2) {
  const valueOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
  const card1Value = valueOptions.indexOf(card1.value)
  const card2Value = valueOptions.indexOf(card2.value)

  if (card1Value > card2Value) {
    computerScore++
    computerScoreEl.textContent = `Computer score: ${computerScore}`
    return 'Computer wins!'
  } else if (card1Value < card2Value) {
    ownScore++
    ownScoreEl.textContent = `Your score: ${ownScore}`
    return 'You win!'
  } else {
    return 'War'
  }
}
