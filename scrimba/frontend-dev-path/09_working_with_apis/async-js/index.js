let deckId = ''
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
      const remainingCardsCount = `Remaining cards: ${data.remaining}`
      remainingCardsEl.innerHTML = remainingCardsCount
    })
}

function determineWinner(card1, card2) {
  const valueOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
  const card1Value = valueOptions.indexOf(card1.value)
  const card2Value = valueOptions.indexOf(card2.value)

  if (card1Value > card2Value) {
    return 'Card 1 wins'
  } else if (card1Value < card2Value) {
    return 'Card 2 wins'
  } else {
    return 'War'
  }
}
