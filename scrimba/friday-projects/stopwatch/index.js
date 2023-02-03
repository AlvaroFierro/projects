let display = document.getElementById('display')

let counter = 0
let ms = 0
let sec = 0
let min = 0
let hour = 0
let intervalId

function start() {
  intervalId = setInterval(() => {
    counter++
    ms = counter % 10
    sec = Math.floor(counter / 10) % 60
    min = Math.floor(counter / 600) % 60
    hour = Math.floor(counter / 36000) % 60
    display.innerHTML = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${
      sec < 10 ? '0' + sec : sec
    }:${ms < 10 ? '0' + ms : ms}`
  }, 100)
}

const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId)
})
resetBtn.addEventListener('click', () => {
  counter = 0
  display.innerHTML = `00:00:00:00`
})
