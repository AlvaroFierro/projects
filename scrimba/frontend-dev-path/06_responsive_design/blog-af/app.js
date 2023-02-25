import { main } from './posts.js'
console.log(main)

function articles() {
  const article = main
  return `
    <div class="post-content">
      <div class="time"><time datetime="${article.time}">${article.date}</time></div>
      <div class="title"><h2 class="post-name">${article.title}</h2></div>
      <img src="${article.img}" alt="${article.name}">
      <div class="description"><p>${article.description}</p></div>
    </div>
    `
}

function render() {
  document.getElementById('breaks-article').innerHTML = articles()
}

render()
