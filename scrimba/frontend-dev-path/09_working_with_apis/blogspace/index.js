const url = 'https://apis.scrimba.com/jsonplaceholder/posts'

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5)

    let html = ''
    postArr.forEach((data) => {
      html += `
        <div class="post">
          <div class="title"><h2>${data.title}</h2></div>
          <div class="body"><p>${data.body}</p></div>
          <hr />
        </div>
    `
    })

    document.getElementById('app').innerHTML += html
  })

const form = document.getElementById('form')

form.addEventListener('click', (e) => {
  e.preventDefault()
  const titleEl = document.getElementById('title')
  titleEl.value = ''
  const contentEl = document.getElementById('content')
  contentEl.value = ''
})
