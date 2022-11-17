// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const scoreBtn = document.getElementById('score')

let data = [
  {
    player: 'Jane',
    score: 52,
  },
  {
    player: 'Mark',
    score: 41,
  },
]
scoreBtn.addEventListener('click', () => {
  let score = data[0].score
  console.log(`Jane score is ${score}`)
})
