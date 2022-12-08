const tacoTray = document.getElementById('tray')

function getRandomNumberOfTacos() {
  const emptyArray = ['Empty array']
  const number = Math.floor(Math.random() * 10) + 1
  tacoTray.innerHTML = number
}
getRandomNumberOfTacos()
