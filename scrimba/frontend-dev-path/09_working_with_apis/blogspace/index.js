let postsArr = []
const url = 'https://apis.scrimba.com/jsonplaceholder/posts'

function renderPosts() {
  let html = ''
  postsArr.forEach((data) => {
    html += `
    <div class="post">
      <div class="title"><h2>${data.title}</h2></div>
      <div class="body"><p>${data.body}</p></div>
      <hr />
    </div>
    `
  })

  document.getElementById('app').innerHTML = html
}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    postsArr = data.slice(0, 5)
    renderPosts()
  })

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const postTitle = document.getElementById('title').value
  const postBody = document.getElementById('content').value

  const data = {
    title: postTitle,
    body: postBody,
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  fetch(url, options)
    .then((res) => res.json())
    .then((post) => {
      postsArr.unshift(post)
      renderPosts()

      form.reset()
    })
})
