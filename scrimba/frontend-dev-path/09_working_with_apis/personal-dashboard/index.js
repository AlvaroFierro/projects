// docs here
// https://www.coingecko.com/api/documentations/v3

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `By: ${data.user.name} `
  })
  .catch((err) => {
    console.log(`unsplash error: ${err}`)
  })

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  .then((res) => {
    if (!res.ok) throw Error('Something went wrong')
    return res.json()
  })
  .then((data) => {
    let current = data.market_data.current_price.usd
    let lowest = data.market_data.low_24h.usd
    let highest = data.market_data.high_24h.usd

    document.getElementById('crypto').innerHTML = `
    <div class="coin">
      <img src=${data.image.small} />
      <span>${data.name}</span>
    </div>

    <div class="coin-info">
      <span>💵: $${new Intl.NumberFormat().format(current)}</span>
      <span>📉: $${new Intl.NumberFormat().format(lowest)}</span>
      <span>📈: $${new Intl.NumberFormat().format(highest)}</span>
    </div>
    `
  })
  .catch((err) => {
    console.log(`coingecko error ${err}`)
  })

function currentTime() {
  const date = new Date().toLocaleTimeString('en-us', { timeStyle: 'short' })
  document.getElementById('time').textContent = date
}

setInterval(currentTime, 1000)

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial`)
    .then((res) => {
      if (!res.ok) throw Error('Something went wrong! ❌')
      return res.json()
    })
    .then((data) => {
      const icon = data.weather[0].icon
      document.getElementById('weather').innerHTML = `
      <div class="weather">
        <div class="weather-info">
          <img src="http://openweathermap.org/img/wn/${icon}.png" />
          <span>${Math.round(data.main.temp)}°</span>
        </div>
        <div class="weather-location">
          <span>${data.name}</span>
        </div>
      </div>
      `
    })
    .catch((err) => {
      console.error(`scrimba API openweathermap error: ${err}`)
    })
})
