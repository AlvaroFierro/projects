import { catsData } from './data'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModal = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', renderCat)
memeModalCloseBtn.addEventListener('click', closeBtn)
memeModalCloseBtn.addEventListener('mouseover', hoverBtn)

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio')

  for (let radio of radios) {
    radio.classList.remove('highlight')
  }

  document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function renderCat() {
  const catObject = getSingleCatObject()

  memeModalInner.innerHTML = `
  <img 
  class="cat-img"
  src="./images/${catObject.image}"
  alt="${catObject.alt}"
  />
  `

  memeModal.style.display = 'flex'
}

function closeBtn() {
  memeModal.style.display = 'none'
}

function hoverBtn() {
  memeModalCloseBtn.style.cursor = 'pointer'
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray()

  if (catsArray.length === 1) {
    return catsArray[0]
  } else {
    const randomObject = Math.floor(Math.random() * catsArray.length)
    return catsArray[randomObject]
  }
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifsOnlyOption.checked

    const matchingCatsArr = catsData.filter((cat) => {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif
      } else {
        return cat.emotionTags.includes(selectedEmotion)
      }
    })
    return matchingCatsArr
  }
}

function getEmotionsArray(cats) {
  const emotionsArr = []

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArr.includes(emotion)) {
        emotionsArr.push(emotion)
      }
    }
  }

  return emotionsArr
}

function renderEmotionsRadios(cats) {
  let string = ''
  const emotions = getEmotionsArray(cats)

  for (let emotion of emotions) {
    string += `<div class="radio">
    <label for="${emotion}">${emotion}</label>
    <input 
    type="radio"
    id="${emotion}"
    value="${emotion}"
    name="radio"
    >
    </div>`
  }

  emotionRadios.innerHTML = string
}

renderEmotionsRadios(catsData)
