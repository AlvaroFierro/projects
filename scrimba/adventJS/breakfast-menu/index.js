const sectionEl = document.getElementById('menu')
const dinnerFoods = ['🍝', '🍔', '🌮']

const dinnerMenu = dinnerFoods.map((item) => {
  return `<div class="food">${item}</div>`
})

sectionEl.innerHTML = dinnerMenu.join('')
