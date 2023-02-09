import { main, secondary } from './posts'

const firstPost = document.getElementById('first-post')

function mainPost() {
  // render the first post
  const post = main
  return `
  <img src="${post.img}" alt="${post.alt}" />
  <div class="post-content">
    <div class="time"> <time datetime="${post.time}" class="time">${post.date}</time></div>
    <div class="tite"> <h2 class="post-name">${post.title}</h2></div>
    <div class="description"> <p>${post.description}</p></div>
    <div class="url"> <a href="${post.url}" class="cta">Read more</a></div>
  </div>`
}

function render() {
  firstPost.innerHTML = mainPost()
}

render()
