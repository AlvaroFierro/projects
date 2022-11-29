const container = document.getElementById('container')
const imgs = ['./img/hip1.jpg', './img/hip2.jpg', './img/hip3.jpg']

function renderImages(arr) {
  let imgsDOM = ''
  for (let i = 0; i < arr.length; i++) {
    imgsDOM += `<img class="team-img" src="${imgs[i]}"/>`
  }
  container.innerHTML = imgsDOM
}

renderImages(imgs)
