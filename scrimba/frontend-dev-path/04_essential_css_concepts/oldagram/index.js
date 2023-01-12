import post from './posts.js'

const content = document.getElementById('content')

post.forEach((post) => {
  const parsedLikes = post.likes.toLocaleString('en-us')

  const contentPost = `
  <section class="post">
    <header class="profile">
      <div class="profile-avatar">
        <img class="rounded-img" src="${post.avatar}" alt="Avatar" />
      </div>
      <div class="post--info">
        <div>
          <span class="username">${post.name}</span> 
        </div>
        <div>
          <span class="location">${post.location}</span>
        </div>
      </div>
    </header>

    <div class="post--img">
      <img src="${post.post}" alt="${post.username}'s post">
    </div>

    <footer class="footer">
      <div class="interactions">
        <div class="icons">
          <img class="icon" src="./img/icon-heart.png"/>
          <img class="icon" src="./img/icon-comment.png"/>
          <img class="icon" src="./img/icon-dm.png"/>
        </div>
      </div>

      <div class="likes">
        <span class="likes--count">${parsedLikes} likes</span>
      </div>

      <div class="caption">
           <p class="caption--user"><strong>${post.name}</strong> ${post.comment}</p> 
        </div>
      </div>
    </footer>
  </section>`

  content.innerHTML += contentPost
})
