// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve({ user: 'alvaro' })
//     reject(new Error('user not logged in 😔'))
//   }, 1000)
// })

// promise
//   .then((user) => {
//     console.log(user)
//   })
//   .catch((err) => console.log(err))

console.log(' code refactor ')

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('now we have the data')
      resolve({ userEmail: email })
    }, 1000)
  })
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['first Video', 'second Video', 'third Video', 'fourth Video'])
    }, 1500)
  })
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['this is my first video', 'welcome to my second video', '...'])
    }, 2000)
  })
}

// const user = loginUser('hello@hello.com', 123456, (user) => {
//   console.log(user)
//   getUserVideos(user.email, (videos) => {
//     console.log(videos)
//     videoDetails(videos[0], (title) => {
//       console.log(title)
//     })
//   })
// })

// loginUser('hello', 'world12345')
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail))

async function displayUser() {
  const loggedUser = await loginUser('hello', 'world12345')
  const videos = await getUserVideos(loggedUser.userEmail)
  const detail = await videoDetails(videos[0])
  console.log(detail)
}

displayUser()
