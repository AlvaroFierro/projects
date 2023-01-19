import { catsData } from './data'

const emotionRadios = document.querySelector('.emotion-radios')

function getEmotionsArray(cats) {
  const emotionsArr = []

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArr.push(emotion)
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

  /*
    Challenge:
    1. Swap out `<p>${emotion}</p>` for HTML
      that will render a radio input for each
      emotion. Remember to use "type", "id", 
      "value", and "name" properties on each radio.
      ("id" and "value" can both be set to the
      "emotion").
    2. Remember to give each radio a label.
      (What property does a label need?)
    3. Enclose each individual radio input in this div:
      <div class="radio">
          **RADIO HERE**
      </div>
*/
  emotionRadios.innerHTML = string
}

renderEmotionsRadios(catsData)
