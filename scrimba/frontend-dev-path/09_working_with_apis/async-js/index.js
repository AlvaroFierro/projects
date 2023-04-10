const drawCard = document.getElementById('draw-card')
const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/'

drawCard.addEventListener('click', fetchCard)

function fetchCard() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => console.log(data))
}
