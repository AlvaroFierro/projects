console.log('--------------- START setTimeout ---------------')
console.log('(first)')

setTimeout(() => {
  console.log('this will happen after 2 seconds (fourth)')
}, 2000)

console.log('(second)')
console.log('something is cooking in the back 🎂.... (third)')

console.log('--------------- END setTimeout ---------------')

console.log('--------------- START forEach ---------------')

const numbers = [1, 2, 3, 4, 5]

numbers.forEach((x) => {
  console.log(x)
})

console.log('--------------- END forEach ---------------')

console.log('--------------- START callbacks ---------------')
function loginUser(email, password, user) {
  setTimeout(() => {
    console.log('now we have the data')
    user({ userEmail: email })
  }, 1000)
}

function getUserVideos(email, videos) {
  setTimeout(() => {
    videos(['first Video', 'second Video', 'third Video', 'fourth Video'])
  }, 1500)
}

function videoDetails(video, title) {
  setTimeout(() => {
    title(['this is my first video', 'welcome to my second video', '...'])
  }, 2000)
}

const user = loginUser('hello@hello.com', 123456, (user) => {
  console.log(user)
  getUserVideos(user.email, (videos) => {
    console.log(videos)
    videoDetails(videos[0], (title) => {
      console.log(title)
    })
  })
})
console.log('--------------- END callbacks ---------------')
