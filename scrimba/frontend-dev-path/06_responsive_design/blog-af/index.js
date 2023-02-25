import { main, secondary } from './posts.js'

function mainPost() {
  // render the first post
  const post = main
  return `
  <img src="${post.img}" alt="${post.alt}" />
  <div class="post-content">
    <div class="time"> <time datetime="${post.time}" class="time">${post.date}</time></div>
    <div class="title"> <h2 class="post-name">${post.title}</h2></div>
    <div class="description"> <p>${post.description}</p></div>
    <div class="url"> <a href="${post.url}" class="cta">Read more</a></div>
  </div>`
}

function renderPosts() {
  // render the secondary posts with map
  return secondary
    .map((post) => {
      return `
    <div class="post">
      <div class="img"><img loading="lazy" src="${post.img}" alt="${post.name}"/></div>
      <div class="time">${post.date}</div>
      <div class="post-title"><a href="${post.url}" class="secondary-link">${post.title}</a></div>
      <div class="post-description"><p class="description">${post.description}</p></div>
    </div>`
    })
    .join('')
}

function render() {
  document.getElementById('first-post').innerHTML = mainPost()
  document.getElementById('posts').innerHTML = renderPosts()
}

render()
