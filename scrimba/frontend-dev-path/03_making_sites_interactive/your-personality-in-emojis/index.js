const myEmojis = ['👨‍💻', '🎸', '🌮', '🏈']
const emojiContainer = document.getElementById('emoji-container')
const inputEl = document.getElementById('emoji-input')
const unshiftBtn = document.getElementById('unshift-btn')
const pushBtn = document.getElementById('push-btn')

const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

function renderEmoji() {
  emojiContainer.innerHTML = ''
  const emojis = myEmojis.map((el) => {
    return `<span>${el}</span>`
  })
  emojiContainer.innerHTML = emojis.join('')
}

renderEmoji()

pushBtn.addEventListener('click', () => {
  if (inputEl.value) {
    myEmojis.push(inputEl.value)
    inputEl.value = ''
    renderEmoji()
  }
})

unshiftBtn.addEventListener('click', () => {
  if (inputEl.value) {
    myEmojis.unshift(inputEl.value)
    inputEl.value = ''
    renderEmoji()
  }
})

popBtn.addEventListener('click', () => {
  myEmojis.pop()
  renderEmoji()
})

shiftBtn.addEventListener('click', () => {
  myEmojis.shift()
  renderEmoji()
})
