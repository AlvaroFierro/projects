const modal = document.getElementById('modal')
const form = document.getElementById('consent-form')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')

setTimeout(function () {
  modal.style.display = 'inline'
}, 0)

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(form)
  const name = formData.get('name')

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="img/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
  </div>`

  setTimeout(() => {
    document.getElementById('uploadText').innerText = 'Making the sale...'
    setTimeout(() => {
      modalInner.innerHTML = `
    <h2>Thanks you <span class="modal-display-name">${name}</span> sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="./img/pirate.gif">
    </div>`
    }, 1500)
  }, 1500)
})
